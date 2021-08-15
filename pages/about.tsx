import PageTab from "@components/tab";
import { useRef, useState } from "react";
import MainLayout from "src/layouts/main";
import { NextPageLayout } from "src/types";
const About: NextPageLayout = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const tabRef1 = useRef<any>();
  const tabRef2 = useRef<any>();
  const tabRef3 = useRef<any>();
  const onChangeTab = (value: number) => {
    setCurrentTab(value);
    if (value === 1) {
      tabRef1.current?.scrollIntoView();
    } else if (value === 2) {
      tabRef2.current?.scrollIntoView();
    } else {
      tabRef3.current?.scrollIntoView();
    }
  };
  return (
    <div className="service-wrapper">
      <h1 className="page-title font-raleWay uppercase text-2xl md:text-6xl font-bold w-full">
        about us
        <span className="ml-10 font-notoSans font-bold text-sm md:text-xl text-secondary">
          私たち
        </span>
      </h1>
      <div className="services-tabs mt-9 md:mt-13">
        <div className="ira-tabs inline-flex flex-nowrap gap-x-5">
          <button
            className={"ira-tab " + (currentTab === 1 ? "ira-tab-active" : "")}
            onClick={() => onChangeTab(1)}
          >
            VISION
          </button>
          <button
            className={"ira-tab " + (currentTab === 2 ? "ira-tab-active" : "")}
            onClick={() => onChangeTab(2)}
          >
            MESSAGE
          </button>
          <button
            className={"ira-tab " + (currentTab === 3 ? "ira-tab-active" : "")}
            onClick={() => onChangeTab(3)}
          >
            OVERVIEW
          </button>
        </div>
        <div className="my-5 md:my-16" ref={tabRef1}>
          <PageTab
            title="Vision"
            subTitle="Iranoanを1億人に知ってもらう"
            isBigImage
            content={
              <>
                <p>誰もが知る会社になるためにサービスの質を常に探求し、</p>
                <p>
                  人との繋がりや手のとり合いを念頭に置きこの一瞬を大切にしています。
                </p>
                <p>
                  事業拡大は私達の意欲であり、そして利用者様の安心に繋がります。
                </p>
              </>
            }
            imageUrl="/images/about-us-vision.png"
          />
        </div>
        <div className="my-5 md:my-16" ref={tabRef2}>
          <h2 className="tab-title font-bold text-5xl text-third ">Message</h2>
          <div className="about-us-box px-5 py-12 md:px-8 md:py-14 lg:px-11 lg:py-16 xl:px-14 xl:py-18 mt-11 font-notoSans text-sm text-fourth">
            <p>
              この度は、株式会社Iranoanのホームページをご覧頂き、誠にありがとうございます。
            </p>
            <p> 代表取締役の鈴木直と申します。</p>
            <br />
            <p>
              {" "}
              私たちの事業は、インターネットで主にトレーディングカードの販売、スマホアプリ開発を展開しています。
            </p>
            <p>
              インターネットの利用者数は年々増加傾向にあり、幅広い世代の方々が簡単に利用する世の中になりました。
            </p>
            <p>
              これは言い換えると、インターネットを利用する方々にIranoanのサービスを使って頂ける機会がより多くなったということだと思います。
            </p>
            <p>
              そこで「Iranoanを1億人に知ってもらう」という大きなビジョンを掲げて私たちの気持ちを広めていくことに致しました。
            </p>
            <br />
            <p>
              このビジョンの上で私たちが提供させていただくサービスは、世の中にない新しいサービスの展開、市場調査やマーケット開拓、最新技術の導入です。
            </p>
            <p>
              これにより皆様の身近な存在になり、趣味や娯楽の一助・生活をより良くするための一端を担わせていただきたく思っております。
            </p>
            <p>
              私たちのサービスで、一人ひとりの快適な日常へと繋がる。その想いを強く持ってこれからも日々あらゆる事業に邁進していく所存であります。
            </p>
            <p>
              今後とも益々のご支援とご愛好を賜りますようお願い申し上げます。
            </p>
            <div className="signature text-right mt-12">
              <div className="inline-flex justify-center flex-col items-center">
                <p>株式会社Iranoan</p>
                <p>代表取締役　鈴木　直</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 md:my-16" ref={tabRef3}>
          <h2 className="tab-title font-bold text-5xl text-third ">Overview</h2>
          <div className="about-us-box px-5 py-12 md:px-8 md:py-14 lg:px-11 lg:py-16 xl:px-14 xl:py-18 mt-11 font-notoSans text-sm text-fourth">
            <div className="flex flex-wrap gap-x-5 md:gap-x-10">
              <div className="block-1 flex-1">
                <div className="overview-item flex items-start justify-between py-3.5 border-b border-overview gap-x-5 md:gap-x-10">
                  <div className="left text-secondary">商号</div>
                  <div className="right flex-1">株式会社Iranoan</div>
                </div>
                <div className="overview-item flex items-start justify-between py-3.5 border-b border-overview gap-x-5 md:gap-x-10">
                  <div className="left text-secondary">設立</div>
                  <div className="right flex-1">2019年12月18日</div>
                </div>
                <div className="overview-item flex items-start justify-between py-3.5 border-b border-overview gap-x-5 md:gap-x-10">
                  <div className="left text-secondary">資本金</div>
                  <div className="right flex-1">5,000千円</div>
                </div>
                <div className="overview-item flex items-start justify-between py-3.5 border-b border-overview gap-x-5 md:gap-x-10">
                  <div className="left text-secondary">本社所在地</div>
                  <div className="right flex-1">
                    <div>〒330-0856 </div>
                    <div>埼玉県さいたま市大宮区三橋</div>
                    <div>2-800-18</div>​
                  </div>
                </div>
                <div className="overview-item flex items-start justify-between py-3.5 border-b border-overview gap-x-5 md:gap-x-10">
                  <div className="left text-secondary">代表者</div>
                  <div className="right flex-1">鈴木 直</div>
                </div>
                <div className="overview-item flex items-start justify-between py-3.5 border-b border-overview gap-x-5 md:gap-x-10">
                  <div className="left text-secondary">従業員数</div>
                  <div className="right flex-1">6名</div>
                </div>
              </div>
              <div className="block-1 flex-1">
                <div className="overview-item flex items-start justify-between py-3.5 border-b border-overview gap-x-5 md:gap-x-10">
                  <div className="left text-secondary">事業内容</div>
                  <div className="right flex-1">
                    <div>古物営業に基づく古物営業</div>
                    <div>玩具、家電、OA機器等の買い取り及び販売</div>
                    <div>インターネットを利用した通信販売事業</div>
                    <div>アプリケーションの企画、制作及び販売</div>
                    <div>埼玉県さいたま市大宮区三橋</div>
                    <div>インターネットコンテンツの販売​</div>
                    <div>IT関連事業</div>
                    <div>
                      ベトナムオフショア事業 ​前各号に関連する一切の事業​
                    </div>
                  </div>
                </div>
                <div className="overview-item flex items-start justify-between py-3.5 border-b border-overview gap-x-5 md:gap-x-10">
                  <div className="left text-secondary">グループ会社</div>
                  <div className="right flex-1">
                    <div>■ベトナム法人</div>
                    <div>Wanana : Iranoan(株式保有100％)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
About.Layout = MainLayout;
