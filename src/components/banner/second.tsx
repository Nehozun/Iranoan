const BannerSecond: React.FC = () => {
    return <div className="block">
        <div className="bg-contain hidden md:block bg-top-center bg-no-repeat h-banner-second-sm md:h-banner-second-md lg:h-banner-second-lg xl:h-banner-second-xl 2xl:h-banner-second-2xl" style={{ backgroundImage: "url('/images/banner-3.png')", backgroundSize: '100%' }}>
        </div>
        <div className="block md:hidden text-center">
            <img src="/images/banner-4.png" alt="banner" className="w-full h-banner-second-sm" />
            <div className="mt-9 font-notoSans text-2xl mb-6 px-6">
                <p className="mb-1">ベトナムとのタイアップで</p>
                <p> 生まれる最高のサービス</p>
            </div>
            <div className="text-secondary font-notoSans text-sm w-full break-words px-5">
                結民粧欧ヨセヱソ供立親ウハ教提ロタ報占だぼぐ率番アフチク届長べ結イめえ効景や民粧欧ヨセヱソ供立親ウハ教提ロタ報占だぼぐ率番アフチク届長べ
        </div>
        </div>
        <div className="text-center mt-10 mb-22 md:mt-12 md:mb-24 lg:mt-32 lg:mb-42">
            <button className="learn-more capitalize text-black border-2 border-purple rounded-button text-lg lg:text-3xl py-3.5 lg:py-5 2xl:py-7 px-7 2xl:px-22 lg:px-14 bg-transparent mx-auto ">
                learn more
            </button>
        </div>
    </div>
}

export default BannerSecond