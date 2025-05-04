import React from "react";

function Item({ name, rating, price, image, brand }) {
  return (
    <div className="inline-block m-3.75 cursor-pointer rounded-[10px] border-1 border-[#e7e7e7]">
      <img src={image} alt={"Item image"} width="100%" />
      <div className="text-[#7c7c7c] text-[0.8rem] mt-2.5 ml-2.5">{brand}</div>
      <div className="ml-2.5 font-semibold uppercase">{name}</div>
      <div className="flex w-full justify-between">
        <div className="text-[1.1rem] m-2.5">${price}</div>
        <div className="m-2.5">{rating}&#9733;</div>
      </div>
    </div>
  );
}

export default Item;
