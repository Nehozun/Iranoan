import MainLayout from "src/layouts/main";
import { NextPageLayout } from "src/types";
import { Tabs } from "antd";
import PageTab from "@components/tab";
import React from "react";
import InformationItem from "@components/banner/information-item";
import Link from "next/link";
const { TabPane } = Tabs;
const NewsDetail: NextPageLayout = () => {
  return (
    <div className="service-wrapper">
      <h1 className="page-title font-raleWay uppercase text-6xl font-bold w-full">
        news
        <span className="ml-10 font-notoSans font-bold text-xl text-secondary">
          ニュース
        </span>
      </h1>
      <div className="services-tabs mt-13">
        <Tabs defaultActiveKey="1">
          <TabPane tab="ALL" key="1">
            <div className="my-5 md:my-11">
              <div className="mt-11 font-notoSans text-sm text-fourth">
                <h2 className="tab-title text-xl md:text-4xl text-fourth ">
                  年頭ご挨拶
                </h2>
                <div className="flex flex-nowrap gap-3 text-base mt-3.5 items-center">
                  <div className="h-10 bg-third rounded-lg text-white uppercase px-4 py-2">
                    new
                  </div>
                  <div className="h-10 bg-fourth rounded-lg text-black uppercase px-4 py-2">
                    2020.08.18
                  </div>
                  <div
                    className="flex-1 border-b border-black hidden md:inline-flex"
                    style={{ height: "1px" }}
                  ></div>
                </div>
                <div className="new-detail">
                  <div className="img-wrapper p-0 md:p-16 mt-5 md:mt-0">
                    <img
                      src="/images/news-item.png"
                      alt=""
                      className="rounded-2xl w-full object-cover"
                    />
                  </div>
                  <div className="about-us-box px-5 py-12 md:px-8 md:py-14 lg:px-11 lg:py-16 xl:px-14 xl:py-18 mt-5 md:mt-11 font-notoSans text-base text-secondary">
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
                      <div>2021年1月</div>
                      <div>株式会社Iranoan</div>
                      <div>代表取締役</div>
                    </div>
                    <div className="flex gap-x-3.5 md:gap-x-18 items-end mt-13">
                      <h2 className="tab-title font-bold text-2xl md:text-4xl text-third ">
                        Latest News
                      </h2>
                      <div className="text-base md:text-lg">最新の記事</div>
                    </div>
                    <div className="information-table rounded-table bg-white mt-10">
                      <InformationItem />
                      <InformationItem />
                      <InformationItem />
                    </div>
                    <div className="text-center mt-12 md:mt-14 lg:mt-14 2xl:mt-16">
                      <Link href="/news">
                        <button
                          className="cursor-pointer learn-more capitalize text-black rounded-button text-sm md:text-xl bg-transparent mx-auto py-3 px-5 md:py-5 md:px-16 "
                          style={{ border: "3px solid #AD7BC5" }}
                        >
                          learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="NEWS" key="2">
            <div className="my-5 md:my-11">
              <div className="about-us-box px-5 py-12 md:px-8 md:py-14 lg:px-11 lg:py-16 xl:px-14 xl:py-18 mt-11 font-notoSans text-sm text-fourth">
                <div className="flex gap-x-3.5 md:gap-x-18 items-end">
                  <h2 className="tab-title font-bold text-2xl md:text-4xl text-third ">
                    News
                  </h2>
                  <div className="text-base md:text-lg">最新の記事</div>
                </div>
                <div className="information-table rounded-table bg-white mt-10">
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                </div>
                <div className="text-center mt-12 md:mt-14 lg:mt-14 2xl:mt-16">
                  <Link href="/news">
                    <button
                      className="cursor-pointer learn-more capitalize text-black rounded-button text-sm md:text-xl bg-transparent mx-auto py-3 px-5 md:py-5 md:px-16 "
                      style={{ border: "3px solid #AD7BC5" }}
                    >
                      learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="PRESS" key="3">
            <div className="my-5 md:my-11">
              <div className="about-us-box px-5 py-12 md:px-8 md:py-14 lg:px-11 lg:py-16 xl:px-14 xl:py-18 mt-11 font-notoSans text-sm text-fourth">
                <div className="flex gap-x-3.5 md:gap-x-18 items-end">
                  <h2 className="tab-title font-bold text-2xl md:text-4xl text-third ">
                    Press
                  </h2>
                  <div className="text-base md:text-lg">最新の記事</div>
                </div>
                <div className="information-table rounded-table bg-white mt-10">
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                  <InformationItem />
                </div>
                <div className="text-center mt-12 md:mt-14 lg:mt-14 2xl:mt-16">
                  <Link href="/news">
                    <button
                      className="cursor-pointer learn-more capitalize text-black rounded-button text-sm md:text-xl bg-transparent mx-auto py-3 px-5 md:py-5 md:px-16 "
                      style={{ border: "3px solid #AD7BC5" }}
                    >
                      learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default NewsDetail;
NewsDetail.Layout = MainLayout;
