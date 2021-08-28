import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const BannerSecond: React.FC = () => {
  return (
    <div className="flex items-center flex-col h-full justify-center md:py-20">
      <div className="banner2">
        <div
          className="relative"
          style={{ width: "60vw", maxWidth: "1200px", minWidth: "375px" }}
        >
          <ScrollAnimation animateIn="bounceInDown" animateOnce>
            <img
              src="/svg/Group 2.svg"
              alt="banner"
              className="absolute top-0 left-0 object-contain"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInDown" animateOnce>
            <img
              src="/svg/Group 4.svg"
              alt="banner"
              className="absolute top-0 left-0 object-contain"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInDown" delay={100} animateOnce>
            <img
              src="/svg/01-11.png"
              alt="banner"
              className="absolute top-0 left-0 object-contain"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInDown" delay={200} animateOnce>
            <img
              src="/svg/Group 3.svg"
              alt="banner"
              className="absolute top-0 left-0 object-contain"
            />
          </ScrollAnimation>
        </div>
      </div>
      <div className="text-white font-notoSans ">
        <div className="text-center font-bold text-28px xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
          <ScrollAnimation delay={100} animateIn="fadeInUp" animateOnce>
            おもしろいことを考える
          </ScrollAnimation>
        </div>
        <div className="text-sm mt-3 xl:mt-5 2xl:mt-7 text-center xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
          <ScrollAnimation delay={150} animateIn="fadeInUp" animateOnce>
            <p>私たちは常に面白いコトを考え新しいモノをつくります。</p>
          </ScrollAnimation>
          <ScrollAnimation delay={200} animateIn="fadeInUp" animateOnce>
            <p>マンネリ化した毎日に心地よい刺激を提供し、</p>
          </ScrollAnimation>
          <ScrollAnimation delay={250} animateIn="fadeInUp" animateOnce>
            <p>より豊かな活気のある日々になるよう発信し続けます。</p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="text-center mt-9 mb-22 md:mt-12 md:mb-24 lg:mt-16 lg:mb-42">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <Link href="/about">
            <button
              className="learn-more capitalize text-black bg-white rounded-button text-lg lg:text-3xl py-3.5 lg:py-5 2xl:py-7 px-7 2xl:px-22 lg:px-14 bg-transparent mx-auto"
              style={{ border: "3px solid #AD7BC5" }}
            >
              learn more
            </button>
          </Link>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default BannerSecond;
