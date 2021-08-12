import { Input, Radio, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import MainLayout from "src/layouts/main";
import { NextPageLayout } from "src/types";

const Contact: NextPageLayout = () => {
  return (
    <div className="contact-wrapper mt-14 md:mt-30 mx-auto about-us-box max-w-contact p-7 md:px-14 md:py-16 font-notoSans">
      <h1 className="text-2xl md:text-6xl font-raleWay uppercase text-center">
        Contact
      </h1>
      <div className="mt-8 text-secondary text-xl">
        Iranoanにお問い合わせをします。
      </div>
      <hr className="contact-hr-mobile md:contact-hr mt-4 mb-4 md:mb-10" />
      <form className="contact-form flex flex-col gap-5 md:gap-6">
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 items-start">
          <div className="flex justify-between items-center max-w-200 w-full">
            <div className="text-base">お問い合わせ項目</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>開発に関するお問い合わせ</Radio>
                <Radio value={2}>取材に関するお問い合わせ</Radio>
                <Radio value={3}>その他のお問い合わせ</Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 items-center">
          <div className="flex justify-between items-center max-w-200 w-full">
            <div className="text-base">お問い合わせ内容</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <TextArea />
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 items-center">
          <div className="flex justify-between items-center max-w-200 w-full">
            <div className="text-base">お名前</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Input />
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 items-center">
          <div className="flex justify-between items-center max-w-200 w-full">
            <div className="text-base">会社名</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Input />
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 items-center">
          <div className="flex justify-between items-center max-w-200 w-full">
            <div className="text-base">メールアドレス</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Input />
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 items-center">
          <div className="flex justify-between items-center max-w-200 w-full">
            <div className="text-base">電話番号</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Space direction="horizontal">
              <Input /> <Input /> <Input />
            </Space>
          </div>
        </div>
        <div className="submit-button text-center w-full mt-11 md:mt-16">
          <button className="bg-third text-white rounded-lg h-11 w-64">
            送信する
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
Contact.Layout = MainLayout;
