import MainLayout from "src/layouts/main";
import { NextPageLayout } from "src/types";
import { Tabs } from "antd";
import PageTab from "@components/tab";
import { useState } from "react";
import { useRef } from "react";
const Services: NextPageLayout = () => {
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
  }
  return (
    <div className="service-wrapper">
      <h1 className="page-title font-raleWay uppercase text-2xl md:text-6xl font-bold w-full">
        service
        <span className="ml-10 font-notoSans font-bold text-sm md:text-xl text-secondary">
          サービス
        </span>
      </h1>
      <div className="services-tabs mt-9 md:mt-13">
        <div className="ira-tabs inline-flex flex-nowrap gap-x-5">
          <button className={'ira-tab ' + (currentTab === 1 ? 'ira-tab-active' : '')} onClick={() => onChangeTab(1)}>
            Yu-Gi-Oh ! MARKETING
          </button>
          <button className={'ira-tab ' + (currentTab === 2 ? 'ira-tab-active' : '')} onClick={() => onChangeTab(2)}>MOBILE APP DEVELOPMENT</button>
          <button className={'ira-tab ' + (currentTab === 3 ? 'ira-tab-active' : '')} onClick={() => onChangeTab(3)}>CLOTHING FASHION</button>
        </div>
        <div className="my-5 md:my-32" ref={tabRef1}>
          <PageTab
            title="Yu-Gi-Oh! Shopping"
            subTitle="遊戯王販売店Nari"
            content={
              <>
                <p>インターネット販売で24h販売可。</p>
                <p>高額買取と豊富な品揃えで安心に購入いただけます。</p>
              </>
            }
            imageUrl="/images/shopping.png"
          />
        </div>
        <div className="my-5 md:my-32" ref={tabRef2}>
          <PageTab
            title="Mobile App Development"
            subTitle="Team Wanana"
            content={
              <>
                <p>
                  ツール系アプリの開発を得意とし、作業負担の軽減・効率化を目指します。
                </p>
                <p>
                  さらに当社のアプリを利用して、楽しいと感じて頂けるように何度も議論を重ね、
                </p>
                <p>利用者様にわかりやすく使いやすいデザインを提供します。</p>
              </>
            }
            imageUrl="/images/mobile-app-development.png"
          />
        </div>
        <div className="my-5 md:my-32" ref={tabRef3}>
          <PageTab
            title="Clothing Fashion"
            subTitle="Ruly"
            content={
              <>
                <p>“mode casual selectshop”</p>
                <p>洗練された大人なmodeスタイルを提案。</p>
                <p>歳を重ねても自由にお洒落を楽しみたいあなたに....</p>
              </>
            }
            imageUrl="/images/Fashion.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
Services.Layout = MainLayout;
