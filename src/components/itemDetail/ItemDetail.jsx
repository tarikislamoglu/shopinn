import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCartList } from "../../features/cart/cartSlice";

function ItemDetail() {
  const dispatch = useDispatch();
  const { cart, products } = useSelector((state) => state.cart.cartItems);
  const getItemDetail = (id) => products.filter((item) => item.id === id)[0];

  const params = useParams();
  const itemId = parseInt(params?.id);
  const item = !!itemId && getItemDetail(itemId);

  const [isAdded, setIsAdded] = useState(
    cart.findIndex((c) => c.id === itemId) > -1
  );

  useEffect(() => {
    console.log("useEffect çalıştı", isAdded);
    // Her cart değiştiğinde isAdded state'ini güncelle
    setIsAdded(cart.findIndex((c) => c.id === itemId) > -1);
  }, [cart, itemId]);

  return (
    <div className="flex flex-col justify-center flex-wrap m-7.5 items-start">
      <Link to="/"> &#8592; Geri</Link>
      <div className="flex justify-center items-center w-full mt-12.5">
        <div className="h-[500px] flex">
          <img src={item.image} alt={"Item image"} />
        </div>
        <div className="ml-3.75 max-w-[500px]">
          <div
            className="text-[#7c7c7c] text-[0.8rem] mt-2.5 ml-2.5"
            style={{ margin: "0px 10px" }}
          >
            {item.brand}
          </div>
          <div className="ml-2.5 font-semibold uppercase">{item.name}</div>
          <div className="text-[1.1rem] m-2.5">${item.price}</div>

          <select className="m-2.5 rounded-[5px] w-[130px] h-[35px] cursor-pointer focus:outline-none">
            <option value={"S"}> Boyut seçin (S)</option>
            <option value={"M"}> Boyut seçin (M)</option>
            <option value={"L"}> Boyut seçin (L)</option>
            <option value={"XL"}> Beden seçin (XL)</option>
          </select>
          {isAdded ? (
            <button className="text-white bg-[#343434] rounded-[5px] w-[150px] h-[35px] cursor-pointer border-0 active:bg-white active:text-initial active:border-1 active:border-gray-200">
              <Link to="/cart">Sepete Git</Link>
            </button>
          ) : (
            <button
              className="text-white bg-[#343434] rounded-[5px] w-[150px] h-[35px] cursor-pointer border-0 active:bg-white active:text-initial active:border-1 active:border-gray-200"
              disabled={isAdded}
              onClick={() => {
                dispatch(addItemToCartList({ ...item, count: 1 }));
                setIsAdded(true);
              }}
            >
              Sepete Ekle
            </button>
          )}

          <p>
            Lorem Ipsum, baskı ve dizgi işlemlerinde kullanılan sahte metindir.
            Lorem Ipsum, sektörün standart sahte metni olmuştur 1500'lü
            yıllardan beri, bilinmeyen bir matbaacının dizgiyi alıp bir tür
            örnek kitabı yapmak için karıştırdı.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
