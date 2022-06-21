import React, { useState } from "react";
import Cart from "./components/Cart";
import DesktopDescriptionArea from "./components/DesktopDescriptionArea";
import Lightbox from "./components/Lightbox";
import MobileImageCarousel from "./components/MobileImageCarousel";
import Navbar from "./components/Navbar";
// import thumbnail from "./images/image-product-1-thumbnail.jpg";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [product, setProduct] = useState({
    title: null,
    price: null,
    amount: null,
    thumbnail: null,
  });

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLightbox = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };

  console.log(product);

  return (
    <div className="md:px-20">
      <Navbar
        numberOfSelectedProducts={product.amount}
        handleClick={handleCart}
      />
      <Cart product={product} setProduct={setProduct} isCartOpen={isCartOpen} />
      <MobileImageCarousel />
      <DesktopDescriptionArea
        numberOfItems={numberOfItems}
        setNumberOfItems={setNumberOfItems}
        handleLightbox={handleLightbox}
        setProduct={setProduct}
        product={product}
      />
      <Lightbox
        isLightboxOpen={isLightboxOpen}
        setIsLightboxOpen={setIsLightboxOpen}
      />
    </div>
  );
};

export default App;
