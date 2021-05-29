import React, { useState } from "react";
export const Header: React.FC<{callback: any}> = (props) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);
  function toggleMenu() {
    setShowDropdownMenu(!showDropdownMenu);
  }
  const scrollTo = (value: string) => {
    setShowDropdownMenu(false);
    props.callback(value);
  }
  return (
    <nav className="page-header flex flex-wrap items-center justify-between pr-5 py-4 md:pr-24 md:pl-20 bg-white h-20 xl:h-32 2xl:h-40">
      <a className="flex items-center h-full max-h-full" href="">
        <img src="/images/logo.png" alt="iranoan logo" className="w-full object-contain max-h-full" style={{ maxWidth: '94px' }} />
        <div className="brand text-2xl font-bold font-montserrat xl:ml-8 ml-0">Iranoan</div>
      </a>
      <div className="flex md:hidden">
        <button className="focus:ring-0 focus:outline-none" onClick={toggleMenu}>
          <img className="block" src="/images/menu.png" width="30" height="30" alt="menu icon 1" />
        </button>
      </div>
      <div className={'w-full md:w-auto md:flex text-right text-secondary text-xl 2xl:text-2xl text-bold uppercase bg-white font-notoSans ' + (showDropdownMenu ? 'absolute top-20 left-0' : 'hidden')}>
        <a className="block md:inline-block px-3 py-3 cursor-pointer" onClick={() => scrollTo('information')}>Info</a>
        <a className="block md:inline-block px-3 py-3 cursor-pointer">About us</a>
        <a className="block md:inline-block px-3 py-3 cursor-pointer">Services</a>
        <a className="block md:inline-block px-3 py-3 cursor-pointer">Contact</a>
      </div>
    </nav>
  );
};
