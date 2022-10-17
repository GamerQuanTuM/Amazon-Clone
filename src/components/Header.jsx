import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../Redux/Slice/basketSlice";

const Header = () => {
  const { data } = useSession();
  const router = useRouter();

  const navigate = ()=>{
    router.push('/');
  }

  const items = useSelector(selectItems)

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={navigate}
            className="cursor-pointer"
            objectFit="contain"
            height={40}
            width={150}
            alt=""
            src="https://links.papareact.com/f90"
          />
        </div>

        <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-1 cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-1 flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 p-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div
          className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap"
        >
          <div onClick={!data ? signIn : signOut} className="linkLarge">
            <p className="font-Roboto">
              {data ? `Hello ${data.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold font-Roboto md:text-sm">
              Account & Lists
            </p>
          </div>

          <div className="linkLarge">
            <p className="font-Roboto">Returns</p>
            <p className="font-Roboto font-extrabold md:text-sm">& Orders</p>
          </div>

          <div onClick={()=>router.push("/checkout")} className="relative linkLarge flex items-center">
            <span className="absolute top-0 -right-1 md:right-10 h-4 w-4 bg-yellow-500 text-center rounded-full  text-black font-bold">
              {items.length}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8"
            >
              <path
                fillRule="evenodd"
                d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                clipRule="evenodd"
              />
            </svg>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-5 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center font-Roboto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          All
        </p>
        <p className="link font-Roboto">Prime Video</p>
        <p className="link font-Roboto">Amazon Business</p>
        <p className="link font-Roboto">Today's Deals</p>
        <p className="link font-Roboto">Electronics</p>
        <p className="link font-Roboto">Food & Grocery</p>
        <p className="link font-Roboto">Prime</p>
        <p className="link font-Roboto">Buy Again</p>
        <p className="link font-Roboto">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex font-Roboto">
          Health & Personal Care
        </p>
        <p className="link hidden lg:inline-flex font-Roboto">AmazonBasics</p>
        <p className="link hidden lg:inline-flex font-Roboto">Gift Ideas</p>
        <p className="link hidden lg:inline-flex font-Roboto">Video Games</p>
      </div>
    </header>
  );
};

export default Header;
