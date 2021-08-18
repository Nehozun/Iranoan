import ScrollAnimation from "react-animate-on-scroll";

const NewBannerFirst: React.FC = () => {
  return (
    <div
      className="new-first-banner gap-x-10 pb-9 md:pb-12 2xl:pb-20 flex flex-wrap justify-between items-center h-full lg:h-screen font-notoSans"
      style={{ paddingLeft: "10%", paddingRight: "5%" }}
    >
      <div className="banner-left text-white font-bold text-base md:text-4xl banner-appear">
        <div className="block mb-3 md:mb-10">毎日に、</div>
        <div className="inline md:block mb-0 md:mb-10 ml-0 md:ml-8">刺激と</div>
        <div className="inline md:block mb-0 md:mb-10 ml-0 md:ml-16">
          遊びを
        </div>
        <div className="block text-xs xs:text-sm sm:text-base md:text-2xl max-w-xs mt-4 md:mt-0 last font-light font-raleWay">
          今、私たちに
        </div>
        <div className="block text-xs md:text-2xl max-w-xs ml-4 md:mt-0 last font-light font-raleWay min-w-max">
          何 ができるのかを考える
        </div>
      </div>
      <div
        className="banner-right flex-1 h-full relative"
        style={{ minWidth: "300px", minHeight: "300px" }}
      >
        <div
          className="centered-absolute animation-item"
          style={{ minWidth: "300px", minHeight: "300px" }}
        >
          <ScrollAnimation animateIn="bounceInUp" animateOnce delay={500} duration={2}>
            <img
              src="/svg/1-isometric.svg"
              alt="banner"
              className="absolute top-0 left-0  object-contain"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce delay={100} duration={2}>
            <img
              src="/svg/2-isometric.svg"
              alt="banner"
              className="absolute top-0 left-0 object-contain"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInDown" animateOnce delay={500} duration={2}>
            <img
              src="/svg/3-isometric.svg"
              alt="banner"
              className="absolute top-0 left-0 object-contain"
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default NewBannerFirst;
