import { Container, Footer, Header } from "@components";
import BusinessBanner from "@components/banner/business";
import BusinessMobileBanner from "@components/banner/business-mobile";
import BannerFirst from "@components/banner/first";
import InformationBanner from "@components/banner/information";
import BannerSecond from "@components/banner/second";
import React, { useRef } from "react";

const Home: React.FC = () => {
  const infoRef = useRef<any>();
  const scrollTo = (value: string) => {
    if (value && value === 'information') {
      infoRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Container>
      <Header callback={scrollTo} />
      <BannerFirst />
      <BannerSecond />
      <div className="toggle-business-banner desktop">
        <BusinessBanner />
      </div>
      <div className="toggle-business-banner mobile">
        <BusinessMobileBanner />
      </div>
      <div ref={infoRef} >
        <InformationBanner />
      </div>
      <Footer callback={scrollTo} />
    </Container>
  );
};

export default Home;
