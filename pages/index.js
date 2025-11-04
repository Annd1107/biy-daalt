"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [bottomRow, setBottomRow] = useState([]);

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
  useEffect(() => {
    const filtered = products.filter((product) => product.id > 3);
    setBottomRow(filtered);
  }, []);

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <Header />

      <div className="flex gap-6 p-30 h-[calc(100vh-80px)]">
        <div className="relative w-2/3 bg-black rounded-md overflow-hidden">
          <Image
            src={products[0].src}
            alt={products[0].name}
            fill
            className="object-contain transition duration-300 ease-in-out hover:scale-105"
            sizes="(min-width: 1024px) 66vw, 100vw"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-sm">
            {products[0].name} — {products[0].price}
          </div>
        </div>

        <div className="flex flex-col justify-between w-1/3 gap-6">
          {[products[1], products[2]].map((product) => (
            <div
              key={product.id}
              className="relative flex-1 bg-black rounded-md overflow-hidden"
            >
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-contain transition duration-300 ease-in-out hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-sm">
                {product.name} — {product.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Marquee className="flex overflow-x-scroll scrollbar-hide gap-6 px-10 pb-10 snap-x snap-mandatory">
        {bottomRow.map((product) => (
          <div
            key={product.id}
            className="relative h-150 w-150 bg-black rounded-md overflow-hidden m-10 flex-shrink-0 w-64 h-64 snap-center"
          >
            <Image
              src={product.src}
              alt={product.name}
              fill
              className="h-150 object-contain transition duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-sm">
              {product.name} — {product.price}
            </div>
          </div>
        ))}
      </Marquee>
      <Footer/>
    </div>
  );
}
