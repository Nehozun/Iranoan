const NewBannerFirst: React.FC = () => {
  return (
    <div
      className="new-first-banner gap-x-10 pb-9 md:pb-12 2xl:pb-20 flex flex-wrap justify-between items-center h-full lg:h-screen font-notoSans"
      style={{ paddingLeft: "10%", paddingRight: "5%" }}
    >
      <div className="banner-left text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
        <div className="block mb-3 md:mb-10">人生は、</div>
        <div className="inline md:block mb-0 md:mb-10">努力次第で </div>
        <div className="inline md:block mb-0 md:mb-10">変えられる</div>
        <div className="block text-xs xs:text-sm sm:text-base md:text-2xl max-w-xs mt-4 md:mt-0 last font-light font-raleWay">
          life changes depending on their efforts
        </div>
      </div>
      <div
        className="banner-right flex-1 h-full relative"
        style={{ minWidth: "300px", minHeight: "300px" }}
      >
        <div
          className="centered-absolute"
          style={{ minWidth: "300px", minHeight: "300px", maxHeight: '900px' }}
        >
          <img
            src="/svg/1-isometric.svg"
            alt="banner"
            className="absolute top-0 left-0  object-contain img-1"
            style={{ transitionDelay: ".8s" }}
          />
          <img
            src="/svg/2-isometric.svg"
            alt="banner"
            className="absolute top-0 left-0 object-contain img-2"
            style={{ transitionDelay: "1.6s" }}
          />
          <img
            src="/svg/3-isometric.svg"
            alt="banner"
            className="absolute top-0 left-0 object-contain img-3"
            style={{ transitionDelay: "2.4s" }}
          />
        </div>
        {/* <img
          src="/images/banner.png"
          alt="banner"
          className="w-full object-contain"
        /> */}
      </div>
    </div>
  );
};

export default NewBannerFirst;
