import React from "react";

export const Footer: React.FC<{callback: any}> = (props) => {
  const scrollTo = (value: string) => {
    props.callback(value);
  }
  return (
    <div className="footer bg-secondary py-10 md:py-16 xl:py-22 px-0 md:px-30 xl:px-52">
      <div className="menu flex items-center justify-center md:justify-start uppercase text-white font-notoSans text-sm lg:text-lg xl:text-2xl">
        <a className="block md:inline-block px-3 py-3 cursor-pointer" onClick={() => scrollTo('information')}>Info</a>
        <a href="#" className="block md:inline-block px-3 py-3 cursor-pointer">About us</a>
        <a href="#" className="block md:inline-block px-3 py-3 cursor-pointer">Services</a>
        <a href="#" className="block md:inline-block px-3 py-3 cursor-pointer">Contact</a>
      </div>
      <div className="mx-auto flex flex-col items-center mt-10 md:mt-12 xl:mt-14 font-notoSans text-white">
        <img src="/images/logo.png" alt="iranoan logo" className="w-24 h-26 lg:w-30 lg:h-32 2xl:w-42 2xl:h-44 object-contain" style={{ maxWidth: '168px' }} />
        <div className="footer-text-1 break-words mt-8 xl:mt-10 text-base 2xl:text-2xl text-center">
          <p className="mb-1">〒330-0856 さいたま市大宮区三橋2-800-18</p>
          <p>TEL : 048-729-7668</p>
        </div>
        <a href="https://facebook.com" target="_blank" className="footer-social mt-6 xl:mt-8 cursor-pointer">
          <img src="/images/facebook.png" alt="facebook-icon" className="w-11 h-11 lg:w-13 lg:h-13 2xl:w-18 2xl:h-18" />
        </a>
      </div>
    </div>
  );
};
