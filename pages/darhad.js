import React, { useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";



export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const productImages = [
    "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965",
    "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965",
    "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965"
  ];

  const colors = [
    { name: "Black", available: true },
    { name: "White", available: true },
    { name: "Blue", available: false }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  const products = [
    { id: 1, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Circles T-Shirt", price: "$20.00" },
    { id: 2, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304", name: "Acme Drawstring Bag", price: "$12.00" },
    { id: 3, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Cup", price: "$15.00" },
    { id: 4, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Keyboard", price: "$150.00" },
    { id: 5, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme T-Shirt", price: "$20.00" },
    { id: 6, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Hoodie", price: "$50" },
    { id: 7, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Cowboy Hat", price: "$160.00" },
    { id: 8, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Prism T-Shirt", price: "$25.00" },
    { id: 9, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Slip-On Shoes", price: "$45.00" },
    { id: 10, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Rainbow Sticker", price: "$4.00" },
  ];

  const handleQuantityChange = (delta) => {
    const newQty = quantity + delta;
    if (newQty >= 1 && newQty <= 99) {
      setQuantity(newQty);
      setError("");
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor) {
      setError("Ungu Songo");
      return;
    }
    if (!selectedSize) {
      setError("Size Songo");
      return;
    }
    
    const selectedColorObj = colors.find(c => c.name === selectedColor);
    if (selectedColorObj && !selectedColorObj.available) {
      setError(`${selectedColor} is currently out of stock`);
      return;
    }

    setError("");
    setSuccessMessage(`Cartnd nemsen: ${quantity}x Acme Geometric Circles T-Shirt - Color: ${selectedColor}, Size: ${selectedSize} - Total: ${(20 * quantity).toFixed(2)}`);
    setTimeout(() => setSuccessMessage(""), 5000);
  };
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-200 font-sans">
      <Header/>
      <div className="w-max-screen grid grid-cols-12 gap-8">

        <div className="col-span-7 bg-[#0b0b0b] p-6 rounded-md">
          <div className="bg-black rounded-md p-6 shadow-inner">
            <div className="flex items-start gap-6">
              <div className="w-3/4 flex justify-center items-center">

                <div className="relative w-196 h-196 bg-gradient-to-b from-black to-[#050505] rounded-md flex items-center justify-center">
                  <img
                    src={productImages[currentImageIndex]}
                    alt="tshirt"
                    className="max-w-150 max-h-full object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-4 items-center justify-center">
              {productImages.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className="w-16 h-16 rounded-md border-2 border-[#1f2937] bg-[#0b0b0b] flex items-center justify-center"
                >
                  <div className={`w-12 h-12 rounded-sm ${idx === 0 ? 'bg-gray-800' : idx === 1 ? 'bg-white' : 'bg-blue-500'}`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="col-span-5 p-6">
          <h1 className="text-3xl font-bold mb-2">Acme Geometric Circles T-Shirt</h1>
          <div className="text-[#3c76d6] font-semibold mb-6">$20.00 USD</div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded text-red-300 text-sm">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-green-900/30 border border-green-700 rounded text-green-300 text-sm">
              {successMessage}
            </div>
          )}

          <div className="mb-4">
            <div className="text-sm uppercase mb-2 text-gray-400">Color</div>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => color.available && setSelectedColor(color.name)}
                  className={`px-3 py-1 rounded-full bg-[#111] border border-[#222] ${
                    !color.available ? 'opacity-60' : ''
                  } ${selectedColor === color.name ? 'ring-2 ring-blue-500' : ''}`}
                  disabled={!color.available}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm uppercase text-gray-400">Size</div>
            <div className="flex flex-wrap gap-3">
              {sizes.map(sz => (
                <button 
                  key={sz} 
                  onClick={() => setSelectedSize(sz)}
                  className={`px-3 py-1 rounded-full bg-[#111] border border-[#222] text-sm ${
                    selectedSize === sz ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-6">60% combed ringspun cotton / 40% polyester jersey tee.</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#0f1724] rounded-full px-3 py-2">
              <button 
                onClick={() => handleQuantityChange(-1)}
                className="w-8 h-8 rounded-full border border-[#222]"
              >
                -
              </button>
              <div className="px-4">{quantity}</div>
              <button 
                onClick={() => handleQuantityChange(1)}
                className="w-8 h-8 rounded-full border border-[#222]"
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-[#254bb8] hover:bg-[#2e59d0] rounded-full py-3 text-white font-semibold"
            >
              Add To Cart
            </button>
          </div>
          <div style={{ height: 300 }} />
        </aside>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Related Products</h3>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 bg-[#0b0b0b] p-4 rounded shadow-md border border-[#1b1b1b] hover:scale-105 transition-transform">
              <div className="w-full h-48 bg-[#0b0b0b] rounded flex items-center justify-center border border-[#111]">
                <img src={product.src} alt={product.name} className="w-36 h-36 object-contain" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm">{product.name}</div>
                <div className="text-xs bg-[#112244] px-3 py-1 rounded-full">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
