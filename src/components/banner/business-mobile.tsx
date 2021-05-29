import BusinessCard from "./business-card"

const BusinessMobileBanner: React.FC = () => {
    return <div className="business-banner">
        <div className="title my-10 md:my-12 lg:my-14 xl:my-16 2xl:my-18 uppercase text-4xl lg:text-60 2xl:text-80 text-black font-raleWay text-center font-medium">
            business
        </div>
        <div className="business-mobile-item mb-7">
            <div className="w-screen">
                <img src="/images/business-mobile-1.png" alt="business" className="w-full" />
            </div>
            <div className="card-mobile-info">
                <BusinessCard title="遊戯王カード販売"
                    content={<p>インターネット販売で24h販売可高額買取と豊富な品揃えで安心に購入いただけます。</p>} />
            </div>
        </div>
        <div className="business-mobile-item">
            <div className="w-screen">
                <img src="/images/business-mobile-2.png" alt="business" className="w-full" />
            </div>
            <div className="card-mobile-info">
                <BusinessCard title="スマホアプリ開発"
                    content={<><p className="mb-4">ツール系アプリの開発を得意とし、作業負担の軽減・効率化を目指します</p>
                        <p>さらに当社のアプリを利用して楽しいと感じて頂けるように何度も議論を重ね、利用者様にわかりやすく使いやすいデザインを提供します。</p></>} />
            </div>
        </div>
        <div className="text-center mt-10 mb-22 md:mt-12 md:mb-24 lg:mt-32 lg:mb-42">
            <button className="learn-more capitalize text-black border-2 border-purple rounded-button text-lg lg:text-3xl py-3.5 lg:py-5 2xl:py-7 px-7 2xl:px-22 lg:px-14 bg-transparent mx-auto ">
                learn more
            </button>
        </div>
    </div>
}

export default BusinessMobileBanner