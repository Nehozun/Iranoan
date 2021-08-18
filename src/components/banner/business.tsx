import Link from "next/link";
import React from "react";
import BusinessCard from "./business-card";
import ScrollAnimation from "react-animate-on-scroll";

const BusinessBanner: React.FC = () => {
  return (
    <div className="business-banner">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="title my-10 md:my-12 lg:my-14 xl:my-16 2xl:my-18 uppercase text-4xl lg:text-60 2xl:text-80 text-black font-raleWay text-center font-medium">
          business
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce>
        <div className="mx-auto h-13 bsn-matches"></div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInRight" delay={400} animateOnce>
        <div className="flex justify-start items-center mb-13">
          <img
            src="/images/business-image-1.png"
            alt=""
            className="object-contain"
            style={{ maxWidth: "1070px", height: "450px" }}
          />
          <div className="bsn-card" style={{ transform: "translateX(-150px)" }}>
            <BusinessCard
              title="遊戯王カード販売"
              content={
                <p>
                  インターネット販売で24h販売可高額買取と豊富な品揃えで安心に購入いただけます。
                </p>
              }
            />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" delay={700} animateOnce>
        <div className="flex justify-end items-center mb-13">
          <div className="bsn-card" style={{ transform: "translateX(150px)" }}>
            <BusinessCard
              title="スマホアプリ開発"
              content={
                <>
                  <p className="mb-4">
                    ツール系アプリの開発を得意とし、作業負担の軽減・効率化を目指します
                  </p>
                  <p>
                    さらに当社のアプリを利用して楽しいと感じて頂けるように何度も議論を重ね、利用者様にわかりやすく使いやすいデザインを提供します。
                  </p>
                </>
              }
            />
          </div>
          <img
            src="/images/business-image-2.png"
            alt=""
            className="object-contain"
            style={{ maxWidth: "1070px", height: "450px" }}
          />
        </div>
      </ScrollAnimation>
      <div className="text-center mt-10 mb-22 md:mt-12 md:mb-24 lg:mt-32 lg:mb-42">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <Link href="/services">
            <button className="learn-more capitalize text-black border-2 border-purple rounded-button text-lg lg:text-3xl py-3.5 lg:py-5 2xl:py-7 px-7 2xl:px-22 lg:px-14 bg-transparent mx-auto ">
              learn more
            </button>
          </Link>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default BusinessBanner;
