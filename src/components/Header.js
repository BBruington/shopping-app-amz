import Image from "next/legacy/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";

export default function Header() {

  const {data: session} = useSession();

  const items = useSelector(selectItems);

  return (

    <header>

      {/* top */}

      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <Link href="/" className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image 
            src="https://links.papareact.com/f90"
            alt=""
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </Link>

        {/* search bar */}

        <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 
        hover:bg-yellow-500 flex-grow cursor-pointer ">
          <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md
          focus:outline-none px-4" />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right side */}

        <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? () => signIn() : () => signOut()} className="flex flex-col items-center link">
            {session ? (
                <p>{
                  session.user.name
                  }</p>
              ) : (
                <p>Please Sign In</p>  
              )
            }
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <Link href="/orders" className="flex flex-col items-center link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </Link>
          <Link href="/checkout" className="relative flex items-center link">
            <span className="absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-9" />
            <p className="hidden md:inline font-extrabold md:text-sm ml-1 mt-2">Basket</p>
          </Link>
        </div>
      </div>

      {/* bottom */}

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personel Care</p>
      </div>

    </header>
  )
}