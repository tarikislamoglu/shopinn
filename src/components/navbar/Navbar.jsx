import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart.cartItems);

  return (
    <div className="flex items-baseline justify-between py-2.5 px-6 cursor-pointer">
      <Link to="/">
        <h2>LikeMuClothes</h2>
      </Link>
      <ul className="list-none">
        <Link to="/category/woman">
          <li className="p-2.5 float-left ">Kadın</li>
        </Link>
        <Link to="/category/man">
          <li className="p-2.5 float-left ">Erkek</li>
        </Link>
        <Link to="/category/clothes">
          <li className="p-2.5 float-left ">Giyim</li>
        </Link>
        <Link to="/category/brands">
          <li className="p-2.5 float-left ">Markalar</li>
        </Link>
        <Link to="/cart">
          <li className="p-2.5 float-left ">
            &#128722;{" "}
            <span className="card-count text-red-500">({quantity})</span>
          </li>
        </Link>
        <Link to="/orders">
          <li className="p-2.5 float-left ">Siparişler</li>
        </Link>
        <button className="m-1 bg-[rgb(255 101 101)] border-0 text-[14px] h-[70%] py-2 px-2.5 cursor-pointer">
          Merhaba, Namık
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
