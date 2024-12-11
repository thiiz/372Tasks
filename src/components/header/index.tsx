'use client';

import React, { useState } from "react";
import { Bell, CalendarRange } from "lucide-react";
import { SearchBar } from "../search_bar";
import { Button } from "../ui/button";
import { DateComponent } from "../date";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header className='flex shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
      <div className='container mx-auto flex flex-wrap items-center justify-between gap-4'>

        <div id="collapseMenu"
          className='max-xl:hidden max-xl:w-full max-xl:fixed max-xl:before:fixed max-xl:before:bg-black max-xl:before:opacity-50 max-xl:before:inset-0 max-xl:before:z-50'>
          <Link href={'/'} className="cursor-pointer">
            <h1 className="cursor-pointer font-mono font-bold text-3xl">
              <span className="text-theme-primary">372</span>
              <span>Tasks</span>
            </h1>
          </Link>
        </div>
        <div className="w-full flex flex-1 max-xl:hidden">
          <SearchBar />
        </div>

        <Link href={'/'} className="max-xl:block hidden cursor-pointer">
          <h1 className=" font-mono font-bold text-4xl">
            <span className="text-theme-primary">372</span>
            <span>Tasks</span>
          </h1>
        </Link>

        <div className='flex items-center justify-between ml-auto space-x-6'>
          <div className="flex items-center space-x-3">
            <Button className="w-9 h-9">
              <Bell />
            </Button>
            <Button className="w-9 h-9">
              <CalendarRange />
            </Button>
            <DateComponent />
          </div>

        </div>
        <div className="xl:hidden w-full">
          <SearchBar />
        </div>

      </div>
    </header>
    // <header className='flex border-b py-3 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50'>
    //   <div className='flex flex-wrap items-center gap-5 w-full'>


    //     <div
    //       id="collapseMenu"
    //       className={`${menuOpen ? "block" : "hidden"
    //         } max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
    //     >
    //       <button
    //         id="toggleClose"
    //         className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'
    //         onClick={toggleMenu}
    //       >
    //         <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
    //           <path
    //             d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
    //           ></path>
    //           <path
    //             d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>

    //     <button onClick={toggleMenu} id="toggleOpen" className='lg:hidden ml-auto'>
    //       <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //         <path
    //           fillRule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clipRule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>

    //     <div className='grid grid-flow-row items-center lg:flex lg:ml-auto max-lg:w-full'>
    //       <SearchBar />

    //       <div className="flex items-center gap-x-4 px-6">
    //         <Button className="w-9 h-9">
    //           <Bell />
    //         </Button>
    //         <Button className="w-9 h-9">
    //           <CalendarRange />
    //         </Button>
    //       </div>

    //       <div className="flex xl:w-80 max-xl:w-full">
    //         <DateComponent />
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};
