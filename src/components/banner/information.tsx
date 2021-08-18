import Link from "next/link";
import React from "react";
import InformationItem from "./information-item";
import ScrollAnimation from "react-animate-on-scroll";

const InformationBanner: React.FC = () => {
  return (
    <div
      className="information-banner py-20 lg:py-22 xl:py-30 px-3 md:px-10 lg:px-16 font-raleWay pb-22 md:pb-26 lg:pb-30 2xl:pb-36"
      style={{
        background: "url('images/banner-bg-3.png') no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-full xl:max-w-1200 2xl:max-w-1500 mx-auto">
        <div className="title uppercase text-white text-4xl lg:text-6xl font-medium mb-4 text-center">
          <ScrollAnimation delay={100} animateIn="fadeInUp" animateOnce>
            information
          </ScrollAnimation>
        </div>
        <ScrollAnimation delay={200} animateIn="fadeInUp" animateOnce>
          <div className="flex items-center justify-center gap-4 mb-11">
            <div
              className="borderline flex-1 border-white border"
              style={{ maxWidth: "160px" }}
            ></div>
            <div className="uppercase text-2xl text-white font-medium flex-shrink-0 lg:text-4xl xl:text-5xl">
              NEWS
            </div>
            <div
              className="borderline flex-1 border-white border"
              style={{ maxWidth: "160px" }}
            ></div>
          </div>
        </ScrollAnimation>

        <div className="information-table rounded-table bg-white py-4 px-8 lg:px-24">
          <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce>
            <InformationItem />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
            <InformationItem />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce>
            <InformationItem isLastItem />
          </ScrollAnimation>
        </div>
        <div className="text-center mt-12 md:mt-14 lg:mt-14 2xl:mt-16">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <Link href="/news">
              <button
                className="cursor-pointer learn-more capitalize text-white border-white rounded-button text-lg 2xl:text-3xl lg:py-5 2xl:py-7 py-3.5 px-7 bg-transparent mx-auto 2xl:px-22 lg:px-14"
                style={{ border: "3px solid" }}
              >
                learn more
              </button>
            </Link>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default InformationBanner;
