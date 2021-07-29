const NewBannerFirst: React.FC = () => {
  return (
    <div className="new-first-banner my-9 md:my-12 xl:my-20 flex flex-wrap justify-between items-center" style={{paddingLeft: '10%', paddingRight: '5%'}}>
      <div className="banner-left text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
        <div className="block mb-3 md:mb-10">人生は、</div>
        <div className="inline md:block mb-0 md:mb-10">努力次第で </div>
        <div className="inline md:block mb-0 md:mb-10">変えられる</div>
        <div className="block text-xs xs:text-sm sm:text-base md:text-2xl font-normal max-w-xs mt-4 md:mt-0">life changes depending on their efforts</div>
      </div>
      <div className="banner-right" style={{ maxWidth: "55%", minWidth: '375px' }}>
        <img
          src="/images/banner.png"
          alt="banner"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default NewBannerFirst;
