import React from "react";
import carImg from "../img/car.png";

// Top-down car image, facing right.
const Car = () => {
  return (
    <img
      src={carImg}
      alt="Orange sports car viewed from above"
      className="h-full w-full object-contain select-none"
      draggable="false"
    />
  );
};

export default Car;
