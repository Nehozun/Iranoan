import { Input, Radio, Space, Form, InputNumber, notification } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useState } from "react";
import { sendContact } from "src/apis";
import MainLayout from "src/layouts/main";
import { NextPageLayout } from "src/types";

const Contact: NextPageLayout = () => {
  const numberRegex = /^[0-9]+$/g;
  const [form] = useForm();
  const [isSentEmail, setIsSentEmail] = useState(false);
  const onSubmit = async (data: any) => {
    const postData = {
      subject: "問い合わせ",
      inquiryItem: data.requestTitle,
      inquiryContent: data.requestContent,
      name: data.name,
      companyName: data.companyName,
      emailAddress: data.email,
      telephoneNumber: `${data.phone1}${data.phone2}${data.phone3}`,
    };
    await sendContact(postData).then(() => {
      setIsSentEmail(true)
    });
  };
  const handleInputOnlyNumber = (event: any, maxLength: number) => {
    const key = event.key;
    const isValid = key.match(numberRegex);
    if (!(event.keyCode === 8 || event.keyCode === 46)) {
      if (!isValid?.length || event.target.value?.length >= maxLength) {
        event.preventDefault();
      }
    }
  };
  return (
    <div className="contact-wrapper mt-14 md:mt-30 mx-auto about-us-box max-w-contact p-7 md:px-14 md:py-16 font-notoSans">
      <h1 className="text-2xl md:text-6xl font-raleWay uppercase text-center">
        Contact
      </h1>
      <div className="mt-8 text-secondary text-base md:text-xl">
        Iranoanにお問い合わせをします。
      </div>
      <hr className="contact-hr-mobile md:contact-hr mt-4 mb-4 md:mb-10" />
      <Form
        form={form}
        onFinish={onSubmit}
        className="contact-form flex flex-col gap-5 md:gap-6"
      >
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 items-start">
          <div className="flex justify-between mt-2 max-w-200 w-full">
            <div className="text-base">お問い合わせ項目</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Form.Item
              name="requestTitle"
              rules={[{ required: true, message: "" }]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={"開発に関するお問い合わせ"}>
                    開発に関するお問い合わせ
                  </Radio>
                  <Radio value={"取材に関するお問い合わせ"}>
                    取材に関するお問い合わせ
                  </Radio>
                  <Radio value={"その他のお問い合わせ"}>
                    その他のお問い合わせ
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 ">
          <div className="flex justify-between mt-2 max-w-200 w-full">
            <div className="text-base">お問い合わせ内容</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Form.Item
              name="requestContent"
              rules={[{ required: true, message: "" }]}
            >
              <TextArea />
            </Form.Item>
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 ">
          <div className="flex justify-between mt-2 max-w-200 w-full">
            <div className="text-base">お名前</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Form.Item name="name" rules={[{ required: true, message: "" }]}>
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 ">
          <div className="flex justify-between mt-2 max-w-200 w-full">
            <div className="text-base">会社名</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Form.Item
              name="companyName"
              rules={[{ required: true, message: "" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 ">
          <div className="flex justify-between mt-2 max-w-200 w-full">
            <div className="text-base">メールアドレス</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <Form.Item name="email" rules={[{ required: true, message: "" }]}>
              <Input type="email" />
            </Form.Item>
          </div>
        </div>
        <div className="contact-form-block flex flex-wrap gap-y-3 gap-x-12 ">
          <div className="flex justify-between mt-2 max-w-200 w-full">
            <div className="text-base">電話番号</div>
            <div className="bg-third text-white rounded-sm h-6 text-center w-14">
              必須
            </div>
          </div>
          <div className="form-item flex-1">
            <div className="flex gap-2">
              <Form.Item
                name="phone1"
                className="flex-1 w-full"
                rules={[{ required: true, message: "" }, {min: 3, message: ""}]}
              >
                <Input
                  maxLength={3}
                  minLength={3}
                  onKeyPress={(e) => handleInputOnlyNumber(e, 3)}
                />
              </Form.Item>
              <Form.Item
                name="phone2"
                className="flex-1 w-full"
                rules={[{ required: true, message: "" }, {min: 4, message: ""}]}
              >
                <Input
                  maxLength={4}
                  minLength={4}
                  onKeyPress={(e) => handleInputOnlyNumber(e, 4)}
                />
              </Form.Item>
              <Form.Item
                name="phone3"
                className="flex-1 w-full"
                rules={[{ required: true, message: "" }, {min: 4, message: ""}]}
              >
                <Input
                  maxLength={4}
                  minLength={4}
                  onKeyPress={(e) => handleInputOnlyNumber(e, 4)}
                />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="submit-button text-center w-full mt-11 md:mt-16">
          <button
            className="bg-third text-white rounded-lg h-11 w-64"
            type="submit"
          >
            送信する
          </button>
        </div>
        {isSentEmail ? (
          <div
            className="mx-auto w-full"
            style={{ fontSize: "15px", color: "#666666", maxWidth: '284px', transform: 'translateX(15px)' }}
          >
            <p>お問い合わせありがとうございました。</p>
            <p>2~3日以内にご返答いたしますので
ご返答までしばらくお待ちください。</p>
          </div>
        ) : null}
      </Form>
    </div>
  );
};

export default Contact;
Contact.Layout = MainLayout;
