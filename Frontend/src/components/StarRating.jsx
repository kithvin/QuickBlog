import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
  return (
    <>
    {/* Create 5 stars */}
      {Array(5)
        .fill("") // Make an array with 5 empty items
        .map((_, index) => (
          <img
          key={index}
            src={
            // If the star number is less than the rating, show filled star
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star-icon" className="w-4.5 h-4.5" // Set star size
          />
        ))}
    </>
  );
};

export default StarRating;



