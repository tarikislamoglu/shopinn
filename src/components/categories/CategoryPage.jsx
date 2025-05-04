import React from "react";
import items from "../../mockData/items.json";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const filteredItems = items.filter((item) => item.category === categoryName);
  return (
    <div className="grid grid-cols-4">
      {filteredItems?.map(({ image, brand, name, price, rating, id }) => {
        return (
          <div key={id} className="p-2">
            <img src={image} alt={"Item image"} width={150} height={150} />
            <div className="text-[#7c7c7c] text-[0.8rem] mt-2.5 ml-2.5">
              {brand}
            </div>
            <div className="ml-2.5 font-semibold uppercase">{name}</div>
            <div className="flex w-full justify-between">
              <div className="text-[1.1rem] m-2.5">${price}</div>
              <div className="m-2.5">{rating}&#9733;</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
