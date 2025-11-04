import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div>
      <div className="flex flex-row justify-evenly p-20 border-b border-neutral-500">
        <div className="flex flex-row gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" class="h-4 w-4 fill-black dark:fill-white h-[16px] w-[16px]"><path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path><path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path></svg>
          <h1>ACME STORE</h1>
        </div>

        <div className="flex flex-col gap-5">
          <p>Home</p>
          <p>About</p>
          <p>Terms & Conditions</p>
          <p>Shipping & Return Policy</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>   
      </div>
      <div className="flex flex-row justify-center items-center gap-4 p-6">
        <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
        <p>|</p>
        <p>View the Source</p>
      </div>
    </div>
  );
}