import Link from "next/link";
import React from "react";
import BusinessCard from "./business-card";
import ScrollAnimation from "react-animate-on-scroll";

const BusinessMobileBanner: React.FC = () => {
  return (
    <div className="business-banner">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="title mt-10 uppercase text-4xl lg:text-60 2xl:text-80 text-black font-raleWay text-center font-medium">
          business
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="mx-auto h-8 mt-3 bsn-matches"></div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="business-mobile-item mb-7">
          <div className="w-screen max-w-full">
            <img
              src="/images/business-mobile-1.png"
              alt="business"
              className="w-full"
            />
          </div>
          <div className="card-mobile-info">
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

      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="business-mobile-item">
          <div className="w-screen max-w-full">
            <img
              src="/images/business-mobile-2.png"
              alt="business"
              className="w-full"
            />
          </div>
          <div className="card-mobile-info">
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

export default BusinessMobileBanner;
