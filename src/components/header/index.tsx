import Link from "next/link";
import React, { useState } from "react";
export const Header: React.FC<{ callback: any; isHome?: boolean }> = (
  props
) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);
  function toggleMenu() {
    setShowDropdownMenu(!showDropdownMenu);
  }
  const scrollTo = (value: string) => {
    setShowDropdownMenu(false);
    props.callback(value);
  };
  return (
    <nav className="page-header flex flex-wrap items-center justify-between pl-2 pr-5 py-4 md:pr-24 md:pl-20 bg-secondary md:bg-transparent h-20 xl:h-32 2xl:h-40">
      <a className="flex items-center h-full max-h-full" href="/">
        <img
          src="/images/logo-xl.png"
          alt="iranoan logo"
          className="w-full object-contain max-h-full filter invert md:invert-0"
          style={{ maxWidth: "190px" }}
        />
      </a>
      <div className="flex md:hidden">
        <button
          className="focus:ring-0 focus:outline-none filter invert"
          onClick={toggleMenu}
        >
          <img
            className="block"
            src="/images/menu.png"
            width="30"
            height="30"
            alt="menu icon 1"
          />
        </button>
      </div>
      <div
        className={
          "w-full md:w-auto md:flex text-right text-white text-xl 2xl:text-2xl text-bold uppercase bg-transparent font-notoSans " +
          (showDropdownMenu
            ? "absolute top-20 left-0 z-50 bg-secondary"
            : "hidden")
        }
      >
        {props.isHome ? (
          <a
            className="block md:inline-block px-3 py-3 cursor-pointer"
            onClick={() => scrollTo("information")}
          >
            Info
          </a>
        ) : (
          <Link href="/">
            <a
              className="block md:inline-block px-3 py-3 cursor-pointer"
              onClick={showDropdownMenu ? toggleMenu : null}
            >
              Info
            </a>
          </Link>
        )}
        <Link href="/about">
          <a
            className="block md:inline-block px-3 py-3 cursor-pointer"
            onClick={showDropdownMenu ? toggleMenu : null}
          >
            About us
          </a>
        </Link>
        <Link href="/services">
          <a
            className="block md:inline-block px-3 py-3 cursor-pointer"
            onClick={showDropdownMenu ? toggleMenu : null}
          >
            Services
          </a>
        </Link>
        <Link href="/contact">
          <a
            className="block md:inline-block px-3 py-3 cursor-pointer"
            onClick={showDropdownMenu ? toggleMenu : null}
          >
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};
