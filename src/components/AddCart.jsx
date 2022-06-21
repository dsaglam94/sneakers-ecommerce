import React from "react";
import { ImMinus, ImPlus } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddCart = ({ setNumberOfItems, numberOfItems, handleAddToCart }) => {
  const addItem = () => {
    setNumberOfItems(numberOfItems + 1);
  };

  const leaveItem = () => {
    setNumberOfItems(numberOfItems === 0 ? 0 : numberOfItems - 1);
  };

  return (
    <div className="space-y-6 lg:space-y-0 lg:flex gap-2">
      <div className="flex items-center justify-between py-4 px-6 bg-grayishLightBlue rounded-xl lg:grow-[1]">
        <ImMinus
          onClick={leaveItem}
          className="text-primary text-lg cursor-pointer hover:opacity-70"
        />
        <span className="font-bold text-veryDarkBlue text-xl">
          {numberOfItems}
        </span>
        <ImPlus
          onClick={addItem}
          className="text-primary text-lg cursor-pointer hover:opacity-70"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-primary flex items-center justify-center gap-2 text-xl font-bold text-white py-4 shadow-xl rounded-xl hover:opacity-70 w-full lg:w-0 lg:grow-[3]"
      >
        <AiOutlineShoppingCart className="text-2xl" /> Add to cart
      </button>
    </div>
  );
};

export default AddCart;
