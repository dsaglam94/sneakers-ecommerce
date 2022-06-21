import React from "react";
import AddCart from "./AddCart";

const ProductDescription = ({
  description,
  title,
  initialPrice,
  discountPercentage,
  setNumberOfItems,
  numberOfItems,
  discountedPrice,
  handleAddToCart,
}) => {
  return (
    <div className="space-y-6 p-6 md:p-0 w-full md:w-1/2 max-w-[600px] mx-auto lg:mx-0">
      <h2 className="font-bold text-primary uppercase tracking-wider text-md md:text-lg">
        sneaker company
      </h2>
      <h2 className="text-4xl text-veryDarkBlue font-bold capitalize">
        {title}
      </h2>
      <p className="text-grayishDarkBlue text-lg py-2">{description}</p>
      <div className="w-full flex items-center md:items-start justify-between md:flex-col md:gap-2">
        <div className="font-bold flex items-center gap-2">
          <span className="text-3xl text-veryDarkBlue">{`$${discountedPrice}.00`}</span>
          <span className="bg-paleOrange px-2 py-1 rounded-lg text-primary">
            {`${discountPercentage}%`}
          </span>
        </div>
        <span className="text-grayishDarkBlue opacity-70 font-bold text line-through">
          {`$${initialPrice}.00`}
        </span>
      </div>
      <AddCart
        handleAddToCart={handleAddToCart}
        setNumberOfItems={setNumberOfItems}
        numberOfItems={numberOfItems}
      />
    </div>
  );
};

export default ProductDescription;
