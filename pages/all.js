"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";

const products = [
  { id: 1, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Circles T-Shirt", price: "$20.00", category: "Shirts" },
  { id: 2, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304", name: "Acme Drawstring Bag", price: "$12.00", category: "Bags" },
  { id: 3, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Cup", price: "$15.00", category: "Shirts" },
  { id: 4, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Keyboard", price: "$150.00", category: "Hoodies" },
  { id: 5, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme T-Shirt", price: "$20.00", category: "Shirts" },
  { id: 6, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Hoodie", price: "$50", category: "Hoodies" },
  { id: 7, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Cowboy Hat", price: "$160.00", category: "Hoodies" },
  { id: 8, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Prism T-Shirt", price: "$25.00", category: "Shirts" },
  { id: 9, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Slip-On Shoes", price: "$45.00", category: "Hoodies" },
  { id: 10, src: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965", name: "Acme Rainbow Sticker", price: "$4.00", category: "Stickers" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Bags", "Shirts", "Hoodies", "Stickers"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col bg-black text-white min-h-screen">
      <Header />
      <div className="flex bg-black text-white flex-1">
        <aside className="w-52 border-r border-gray-800 p-6">
          <h2 className="font-semibold mb-4">Collections</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left hover:text-blue-400 ${
                    selectedCategory === cat ? "text-blue-400" : ""
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">{selectedCategory}</h1>

          {filteredProducts.length === 0 ? (
            <p className="text-gray-400">No products found.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="relative border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={400}
                    height={400}
                    className="object-cover rounded-lg mb-4"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-sm flex flex-row items-center gap-3">
                    <p>{p.name}</p>
                    <p className="bg-blue-800 w-16 rounded-xl p-2">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
