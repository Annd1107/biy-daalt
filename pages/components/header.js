import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div>
      <div className="bg-neutral-900 text-white">
        <header className=" flex flex-row mx-w-screen justify-between p-4 pl-10">

          <div className="flex flex-row w-1/3 items-center gap-4">

            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" class="h-4 w-4 fill-black dark:fill-white h-[16px] w-[16px]"><path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path><path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path></svg></a>
            <h1>ACME STORE</h1>
            <div className="flex flex-row justify-evenly mx-w-full gap-4">
              <a href="all"><p>All</p></a>
              <a><p>Shirts</p></a>
              <a><p>Stickers</p></a>
            </div>

          </div>

          <div className="flex flex-row h-10 w-1/3 items-center justify-between border-2 border-neutral-800 rounded-lg p-2">
            <input type="text" placeholder="Search products..." className="focus:outline-none"/>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div className="flex flex-row w-1/3 items-center justify-end">

            <div className="border-2 border-neutral-800 rounded-lg p-2 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 transition-all ease-in-out hover:scale-110"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
            </div>
            
          </div>
          
        </header>
      </div>
    </div>
  );
}