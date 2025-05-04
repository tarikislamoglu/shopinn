import React, { useState } from "react";
import Item from "../item/Item";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  clearFilterProducts,
} from "../../features/cart/cartSlice";
function ItemList() {
  const { products, filteredProducts } = useSelector(
    (state) => state.cart.cartItems
  );
  const [inputValue, setInputValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && categoryValue) {
      dispatch(filterProducts({ inputValue, categoryValue }));
      setInputValue("");
      setCategoryValue("");
    }
  };
  const displayedItems = filteredProducts.length ? filteredProducts : products;
  return (
    <div className="flex flex-col space-y-2">
      <form onSubmit={handleSubmit} className="space-x-2">
        <select
          name=""
          id=""
          onChange={(e) => setCategoryValue(e.target.value)}
          value={categoryValue}
        >
          <option value="category">category</option>
          <option value="size">size</option>
          <option value="brand">brand</option>
        </select>
        <input
          className="border"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          type="submit"
          className="cursor-pointer"
          disabled={!inputValue.trim() || !categoryValue}
        >
          Ara
        </button>
      </form>
      <button
        className="cursor-pointer"
        onClick={() => dispatch(clearFilterProducts())}
      >
        Filtreyi temizle
      </button>
      <div className="grid grid-cols-4">
        {displayedItems.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id}>
            <Item
              name={item.name}
              rating={item.rating}
              price={item.price}
              saleDiscount={item.saleDiscount}
              image={item.image}
              brand={item.brand}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
