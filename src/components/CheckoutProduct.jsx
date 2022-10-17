import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../Redux/Slice/basketSlice";
import Star from "./Star";

const CheckoutProduct = ({ item }) => {
//   console.log(item);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(item));
  };
  const removeItemFromBasket = () => {
    const {id} = item
    dispatch(removeFromBasket({id}));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={item.image} height={200} width={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p className="font-Roboto font-medium">{item.title}</p>
        <div className="flex">
          <Star className="h-5" rating={item.rating} />
        </div>

        <p className="text-xs mt-2 font-Roboto my-2 line-clamp-3">
          {item.description}
        </p>
        <Currency className="" quantity={item.price * 82.368} currency="INR" />

        {item.hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs font-Roboto text-gray-500">
              FREE Next-day Delivery
            </p>
          </div>
        )}
      </div>

      {/* Righ Part  */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">Add to Basket</button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
