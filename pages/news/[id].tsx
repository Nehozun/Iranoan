import InformationItem from "@components/banner/information-item";
import { Spin, Tabs } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "src/layouts/main";
import { NewsList } from "src/static/news";
import { NextPageLayout } from "src/types";
import { News } from "src/types/new";
const { TabPane } = Tabs;
const NewsDetail: NextPageLayout = () => {
  const query = useRouter().query;
  const id = query?.id;
  const news = NewsList.find((x) => x.id == id);
  return (
    <div className="service-wrapper">
      {news ? (
        <>
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
                      {news.title}
                    </h2>
                    <div className="flex flex-nowrap gap-3 text-base mt-3.5 items-center">
                      <div className="h-10 bg-third rounded-lg text-white uppercase px-4 py-2">
                        new
                      </div>
                      <div className="h-10 bg-fourth rounded-lg text-black uppercase px-4 py-2">
                        {news.createdAt}
                      </div>
                      <div
                        className="flex-1 border-b border-black hidden md:inline-flex"
                        style={{ height: "1px" }}
                      ></div>
                    </div>
                    <div className="new-detail">
                      {/* <div className="img-wrapper p-0 md:p-16 mt-5 md:mt-0">
                        <img
                          src="/images/news-item.png"
                          alt=""
                          className="rounded-2xl w-full object-cover"
                        />
                      </div> */}
                      <div className="about-us-box px-5 py-12 md:px-8 md:py-14 lg:px-11 lg:py-16 xl:px-14 xl:py-18 mt-5 md:mt-11 font-notoSans text-base text-secondary">
                        <div
                          dangerouslySetInnerHTML={{ __html: news.content }}
                          className="whitespace-pre-line"
                        ></div>
                        {/* <div className="signature text-right mt-12">
                          <div>2021年1月</div>
                          <div>株式会社Iranoan</div>
                          <div>代表取締役</div>
                        </div> */}
                        <div className="flex gap-x-3.5 md:gap-x-18 items-end mt-13">
                          <h2 className="tab-title font-bold text-2xl md:text-4xl text-third ">
                            Latest News
                          </h2>
                          <div className="text-base md:text-lg">最新の記事</div>
                        </div>
                        <div className="information-table rounded-table bg-white mt-10">
                          {NewsList.map((item: News, index: number) => {
                            return <InformationItem {...item} />;
                          })}
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
                      {NewsList.map((item: News, index: number) => {
                        return <InformationItem {...item} />;
                      })}
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
                      {NewsList.map((item: News, index: number) => {
                        return <InformationItem {...item} />;
                      })}
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
        </>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};

export default NewsDetail;
NewsDetail.Layout = MainLayout;
