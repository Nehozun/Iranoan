import MainLayout from "src/layouts/main";
import { NextPageLayout } from "src/types";
import { Tabs } from "antd";
import PageTab from "@components/tab";
import React from "react";
import InformationItem from "@components/banner/information-item";
import Link from "next/link";
const { TabPane } = Tabs;
const News: NextPageLayout = () => {
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
              <div className="about-us-box px-5 py-12 md:px-8 md:py-14 lg:px-11 lg:py-16 xl:px-14 xl:py-18 mt-11 font-notoSans text-sm text-fourth">
                <div className="flex gap-x-3.5 md:gap-x-18 items-end">
                  <h2 className="tab-title font-bold text-2xl md:text-4xl text-third ">
                    Latest New
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

export default News;
News.Layout = MainLayout;
