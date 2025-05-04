import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseProductCount,
  increaseProductCount,
  removeItemFromCartList,
} from "../../features/cart/cartSlice";

function Cart() {
  const { cart, quantity, total } = useSelector(
    (state) => state.cart.cartItems
  );
  const dispatch = useDispatch();

  return (
    <div className="max-w-[500px]">
      <h1>Sepet</h1>
      {!cart.length ? (
        <p>Ürün Eklenmedi.Lütfen sepetinize bir şey ekleyin</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div
                className="border-1 border-[#cdcdcd] text-left rounded-md p-2.5 mb-2.5 flex justify-between items-center"
                key={item.id}
              >
                <div>
                  <div className="text-[1.1rem] m-2.5">
                    ${(item.price * item.count).toFixed(2)}
                  </div>
                  <div className="ml-2.5 font-semibold uppercase">
                    {item.name}
                  </div>
                  <div className="ml-2.5">
                    (Beklenen Teslimat Süresi 3 - 6 gün)
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-baseline px-5 ">
                    <button
                      className="cursor-pointer p-1"
                      onClick={() => dispatch(increaseProductCount(item.id))}
                    >
                      +
                    </button>
                    <p>{item.count}</p>

                    <button
                      className="cursor-pointer p-1"
                      onClick={() => dispatch(decreaseProductCount(item.id))}
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeItemFromCartList(item.id))}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
            <div className="space-y-5">
              <p> Toplam Ürün Miktarı :{quantity}</p>
              <p> Toplam Ürün Fiyatı :{total}</p>
              <button
                className="cursor-pointer"
                onClick={() => dispatch(clearCart())}
              >
                Sepeti temizle
              </button>
            </div>
          </div>
          <Link to="/checkout">
            <button className="item-btn">Sonraki</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
