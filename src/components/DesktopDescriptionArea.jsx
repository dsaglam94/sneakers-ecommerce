import React, { useState, useEffect } from "react";
import DesktopImageCarousel from "./DesktopImageCarousel";
import ProductDescription from "./ProductDescription";
import productData from "../ProductData";
import thumbnails from "../ProductThumbnails";

const DesktopDescriptionArea = ({
  handleLightbox,
  setNumberOfItems,
  numberOfItems,
  setProduct,
  product,
}) => {
  const { discount_percentage, initial_value } = productData;
  const discountedAmount = (discount_percentage / 100) * initial_value;
  const [discountedPrice, setDiscountedPrice] = useState(null);

  useEffect(() => {
    setDiscountedPrice(initial_value - discountedAmount);
  }, [discountedAmount, initial_value]);

  const addToCart = () => {
    if (numberOfItems === 0) return;

    setProduct({
      title: productData.title,
      price: discountedPrice,
      amount: numberOfItems,
      thumbnail: thumbnails[0],
    });

    setNumberOfItems(0);
  };

  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:py-20">
      <DesktopImageCarousel handleLightbox={handleLightbox} />
      <ProductDescription
        title={productData.title}
        description={productData.description}
        initialPrice={productData.initial_value}
        discountedPrice={discountedPrice}
        discountPercentage={discount_percentage}
        setNumberOfItems={setNumberOfItems}
        numberOfItems={numberOfItems}
        setProduct={setProduct}
        handleAddToCart={addToCart}
      />
    </div>
  );
};

export default DesktopDescriptionArea;
