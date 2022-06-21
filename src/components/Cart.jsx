import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Cart = ({ isCartOpen, product, setProduct }) => {
  const removeItemsFromCart = () => {
    setProduct({
      title: null,
      amount: null,
      thumbnail: null,
      price: null,
    });
  };

  return (
    <div
      className={
        isCartOpen
          ? "bg-white fixed w-[420px] rounded-xl top-[8rem] md:top-[7rem] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[55%] lg:left-[65%] md: shadow-2xl z-[100]"
          : "hidden"
      }
    >
      <div className="border-b-2 border-grayishLightBlue p-8">
        <h2 className="font-bold text-lg">Cart</h2>
      </div>
      {product.title !== null ? (
        <div className="p-8 space-y-6">
          <div className="w-full flex items-center justify-between">
            <div>
              <img
                className="w-full h-16 rounded-md"
                src={product.thumbnail}
                alt="product thumbnail"
              />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-md tracking-wide text-grayishDarkBlue">
                {product.title}
              </h3>
              <div className="flex items-center">
                <div className="text-grayishDarkBlue mr-2">
                  {`$${product.price}.00`} x <span>{product.amount}</span>
                </div>
                <div className="font-bold text-veryDarkBlue">{`$${
                  product.price * product.amount
                }.00`}</div>
              </div>
            </div>
            <BsFillTrashFill
              onClick={removeItemsFromCart}
              className="text-xl text-grayishDarkBlue cursor-pointer hover:text-primary"
            />
          </div>
          <button className="bg-primary text-grayishLightBlue font-bold w-full py-5 rounded-xl">
            Checkout
          </button>
        </div>
      ) : (
        <p className="font-bold text-center py-20 text-grayishDarkBlue">
          Your cart is empty.
        </p>
      )}
    </div>
  );
};

export default Cart;
