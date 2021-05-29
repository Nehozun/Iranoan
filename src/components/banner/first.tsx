const BannerFirst: React.FC = () => {
    return <div className="banner-first h-banner-sm lg:h-banner-xl 2xl:h-banner-2xl bg-contain bg-top-center md:bg-right-top bg-no-repeat block mb-0 lg:mb-40"
        style={{ backgroundImage: "url('/images/banner-1.png')", minHeight: 'fit-content', height: 'max-content' }}>
        <div className="banner-content text-center mx-5 md:mx-16 lg:mx-26 xl:mx-36 2xl:mx-46 lg:mt-0 mb-30 lg:mb-0" style={{ marginTop: '334px', width: 'fit-content' }}>
            <div className="text-black flex justify-between md:justify-center max-w-full flex-wrap gap-5 capitalize text-5xl 2xl:text-80 font-raleWay font-semibold mb-6">
                <div className="text-left md:w-auto w-full">jump up</div>
                <div className="text-right md:w-auto w-full">for joy!!</div>
            </div>
            <div className="text-secondary mb-2 text-lg font-raleWay font-semibold ">きんきじゃくやく</div>
            <div className="text-primary text-xl lg:text-4xl font-notoSans mb-30 font-medium">1 億 人 欣 喜 雀 躍 プ ロ ジ ェ ク ト</div>
        </div>
    </div>
}

export default BannerFirst