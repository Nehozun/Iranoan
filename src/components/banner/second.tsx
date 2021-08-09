import Link from "next/link";
import React from "react";

const BannerSecond: React.FC = () => {
  return (
    <div className="flex items-center flex-col h-full justify-center md:py-20">
      <img
        src="/images/creative-all.svg"
        alt="banner"
        className="w-1/2 mx-auto block"
        style={{ minWidth: "375px" }}
      />
      <div className="text-center mt-9 mb-22 md:mt-12 md:mb-24 lg:mt-16 lg:mb-42">
        <Link href="/about">
          <button
            className="learn-more capitalize text-black bg-white rounded-button text-lg lg:text-3xl py-3.5 lg:py-5 2xl:py-7 px-7 2xl:px-22 lg:px-14 bg-transparent mx-auto"
            style={{ border: "3px solid #AD7BC5" }}
          >
            learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerSecond;
