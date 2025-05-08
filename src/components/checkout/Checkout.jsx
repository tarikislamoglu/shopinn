import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToOrderList, clearCart } from "../../features/cart/cartSlice";
const Checkout = () => {
  const dispatch = useDispatch();
  const { cart, orders, total, quantity } = useSelector(
    (state) => state.cart.cartItems
  );
  const { discount, extraFees, tax } = { discount: 20, extraFees: 99, tax: 5 };
  const totalWithDiscount = Math.floor(total + 99 + 5 - (total + 99 + 5) * 0.2);
  const [isOrdered, setIsOrdered] = useState(false);
  const handlePay = () => {
    const currentCart = [...cart];
    const currentCartId = cart.length + 1;
    dispatch(
      addItemToOrderList({
        orderId: currentCartId,
        buyerId: 1,
        items: currentCart,
        price: totalWithDiscount,
        address: "7.Sokak",
        deliveryDate: "28/12/2023",
        isDelivered: false,
      })
    );
    setTimeout(() => {
      dispatch(clearCart());
    }, 0);

    setIsOrdered(true);
  };
  const rowClass =
    "py-1.5 px-3.75 m-2.5 border-1 border-[#cdcdcd] rounded-[15px] block text-left";
  const summaryClass = "my-0.5 mx-3.75";
  return (
    <div className="mt-5 rounded-[15px] p-5 max-w-[500px]">
      {isOrdered ? (
        <h3>
          Tebrikler 🚀 Sipariş başarıyla verildi. {orders[0].orderId}
          <div>
            {orders?.map(
              ({
                orderId,
                buyerId,
                items,
                price,
                address,
                deliveryDate,
                isDelivered,
              }) => {
                return (
                  <div key={orderId}>
                    <p>İd:{buyerId}</p>
                    <ul className="space-y-5">
                      Ürünler:
                      {items?.map(({ id, name, brand, size, price, image }) => {
                        return (
                          <li key={id}>
                            <div className="flex border-1 items-center p-2 rounded-md justify-between w-full h-[200px]">
                              <img src={image} width={100} height={100} />
                              <p className=" flex flex-col items-start w-2/3">
                                <span> Ürün adı : {name}</span>
                                <span> Marka : {brand}</span>
                                <span> Beden : {size}</span>
                                <span> Fiyat : ${price}</span>
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <p>Ücret:{price}</p>
                    <p>Adres:{address}</p>
                    <p>Teslimat Tarihi:{deliveryDate}</p>
                    <p>Teslimat Durumu:{isDelivered}</p>
                  </div>
                );
              }
            )}
          </div>
          <Link to="/">Daha fazla alışveriş yapın</Link>
        </h3>
      ) : (
        <>
          <div>
            <div className={rowClass}>
              <h4>Sipariş İncelemesi</h4>
              <span>{quantity} sepetteki ürünler</span>
            </div>
            <div className={rowClass}>
              <h4>Kuponlar</h4>
              <span>Mevcut değil</span>
            </div>
            <div className={rowClass}>
              <h4>Ödeme Özeti</h4>
              <div className={summaryClass}>
                <span>Ara Toplam</span>
                <span>${total}</span>
              </div>
              <div className={summaryClass}>
                <span>İndirim</span>
                <span>{discount}%</span>
              </div>
              <div className={summaryClass}>
                <span>Ekstra Ücret</span>
                <span>${extraFees}</span>
              </div>
              <div className={summaryClass}>
                <span>Vergi</span>
                <span>${tax}</span>
              </div>
            </div>
            <div className={rowClass}>
              <h4>Toplam</h4>
              <span>${totalWithDiscount}</span>
            </div>
          </div>
          <button
            className="text-white bg-[#343434] rounded-[5px] w-[150px] h-[35px] cursor-pointer"
            onClick={handlePay}
          >
            ${totalWithDiscount} ödeyin
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
