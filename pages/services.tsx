import PageTab from "@components/tab";
import { useRef, useState } from "react";
import MainLayout from "src/layouts/main";
import { NextPageLayout } from "src/types";
import ScrollAnimation from "react-animate-on-scroll";

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
  };
  return (
    <div className="service-wrapper">
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={100}>
        <h1 className="page-title font-raleWay uppercase text-2xl md:text-6xl font-bold w-full">
          service
          <span className="ml-10 font-notoSans font-bold text-sm md:text-xl text-secondary">
            サービス
          </span>
        </h1>
      </ScrollAnimation>

      <div className="services-tabs mt-9 md:mt-13">
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={200}>
          <div className="ira-tabs inline-flex flex-nowrap gap-x-5">
            <button
              className={
                "ira-tab " + (currentTab === 1 ? "ira-tab-active" : "")
              }
              onClick={() => onChangeTab(1)}
            >
              Yu-Gi-Oh ! MARKETING
            </button>
            <button
              className={
                "ira-tab " + (currentTab === 2 ? "ira-tab-active" : "")
              }
              onClick={() => onChangeTab(2)}
            >
              MOBILE APP DEVELOPMENT
            </button>
            <button
              className={
                "ira-tab " + (currentTab === 3 ? "ira-tab-active" : "")
              }
              onClick={() => onChangeTab(3)}
            >
              CLOTHING FASHION
            </button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div className="my-5 md:my-32" ref={tabRef1}>
            <PageTab
              title="Yu-Gi-Oh! Shopping"
              subTitle="遊戯王販売店Nari"
              content={
                <>
                  <p>
                    コレクターに人気の遊戯王オリパを専門で扱う通販ショップNari。
                  </p>
                  <p>
                    人気のカードはもちろん、コレクター向けアイテムまでそろう充実の品揃え。
                  </p>
                  <p>
                    ほかの店で見つけられなかったお探しの遊戯王カードを24時間いつでも自由に見つけられるかもしれません。
                  </p>
                  <p>
                    また、Nariでは遊ばなくなって不要となった遊戯王カードの買取もおこなっています。
                  </p>
                  <p>
                    郵送で査定がおこなえるので、ご自宅にいながら不要になった遊戯王カードの査定や高価買取が出来ると人気です。
                  </p>
                  <p>
                    査定は無料なので、売るかどうしようか迷っているという方や
                    遊戯王カードの買取業者選びで悩んでいる方は、お気軽にNariの宅配査定をご利用ください。
                  </p>
                </>
              }
              imageUrl="/images/shopping.png"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div className="my-5 md:my-32" ref={tabRef2}>
            <PageTab
              title="Mobile App Development"
              subTitle="Team Wanana"
              content={
                <>
                  <p>
                    アプリをリリースしたいという方にとって、ネックとなりやすいのが開発の難しさと手間です。
                  </p>
                  <p>
                    ツール系アプリの開発が得意な私たちは、こうしたアプリ開発の作業負担の軽減や効率化を可能にする支援をおこなっています
                  </p>
                  <p>
                    アプリ開発は初めて、専門的な知識がないからモバイルアプリの作成なんて無理と思っている方はあきらめる前に、まず、私達にご相談ください。
                  </p>
                  <p>
                    アプリを使う目的やユーザーのことを考え、何度も議論を重ねて、使いやすいデザインを追求、分かりやすく利便性の高いアプリの開発を支援しています。
                  </p>
                  <p>
                    また、当社でアプリ開発を支援させていただいたお客様から、モバイルアプリを開発してから大幅に売り上げアップした、経費削減が出来た、業務効率が上がったというお喜びの声も続々と届いております。
                  </p>
                </>
              }
              imageUrl="/images/mobile-app-development.png"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div className="my-5 md:my-32" ref={tabRef3}>
            <PageTab
              title="Clothing Fashion"
              subTitle="Ruly"
              content={
                <>
                  <p>洋服は、ただ単に着るだけのものではありません。</p>
                  <p>
                    洋服は、着る人の悩みを解決したり、こんな風になりたいという希望をかなえてくれる魔法のアイテムです。
                  </p>
                  <p>
                    Rulyでは、
                    白と黒の世界観で世代を問わず愛されるモードスタイルをもっと身近に…
                  </p>
                  <p>
                    をスローガンに掲げ、洗練されたモードスタイルを皆様に提供いたします。
                  </p>
                  <p>
                    Rulyは、通信販売・オンラインショップで販売しておりますので、洋服屋へ行く時間がない、子どもがいるからゆっくりと落ち着いて買い物できないという方も当店で、おうちお買い物時間をじっくりとお楽しみ下さい。
                  </p>
                </>
              }
              imageUrl="/images/Fashion.png"
            />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Services;
Services.Layout = MainLayout;
