import MainLayout from "src/layouts/main";
import { NextPageLayout } from "src/types";
import { Tabs } from "antd";
import PageTab from "@components/tab";
const { TabPane } = Tabs;
const Services: NextPageLayout = () => {
  return (
    <div className="service-wrapper">
      <h1 className="page-title font-raleWay uppercase text-6xl font-bold w-full">
        service
        <span className="ml-10 font-notoSans font-bold text-xl text-secondary">
          サービス
        </span>
      </h1>
      <div className="services-tabs mt-13">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Yu-Gi-Oh ! MARKETING" key="1">
            <div className="my-5 md:my-32">
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
          </TabPane>
          <TabPane tab="MOBILE APP DEVELOPMENT" key="2">
            <div className="my-5 md:my-32">
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
                    <p>
                      利用者様にわかりやすく使いやすいデザインを提供します。
                    </p>
                  </>
                }
                imageUrl="/images/mobile-app-development.png"
              />
            </div>
          </TabPane>
          <TabPane tab="CLOTHING FASHION" key="3">
            <div className="my-5 md:my-32">
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
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
Services.Layout = MainLayout;
