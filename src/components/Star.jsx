import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ rating }) => {
  const { rate } = rating;
  const starRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rate >= index + 1 ? (
          <FaStar className="text-[1.1rem]  text-yellow-500" />
        ) : rate >= number ? (
          <FaStarHalfAlt className="text-[1rem]  text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-[1.25rem]  text-yellow-500 mt-0.5" />
        )}
      </span>
    );
  });

  return (
    <div>
      <div className="flex space-x-1 items-center  justify-center">
        {starRating}
      </div>
    </div>
  );
};

export default Star;
