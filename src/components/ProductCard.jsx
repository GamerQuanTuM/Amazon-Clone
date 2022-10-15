import Image from "next/image";
import React, { useState } from "react";
import Star from "./Star";
import Currency from "react-currency-formatter";

const ProductCard = ({ product }) => {

  const [hasPrime] = useState(Math.random() < 0.5);
  const { id, title, price, description, image, rating, category } = product;
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic font-Roboto text-gray-400">{category}</p>
      <Image src={image} alt="" height={200} width={200} objectFit="contain" />

      <h4 className="my-3 font-bold font-Roboto">{title}</h4>

      <div className="flex">
        <Star rating={rating} />
      </div>

      <p className="text-sm font-Roboto my-2 line-clamp-2">{description}</p>

      <div className="mb-5 font-Roboto font-semibold ">
        <Currency className="" quantity={price * 82.368} currency="INR" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="Prime" />
          <p className="text-xs text-gray-500 font-Roboto">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="bg-yellow-500 mt-auto button">Add to Basket</button>
    </div>
  );
};

export default ProductCard;
