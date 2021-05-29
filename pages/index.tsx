import React, { useRef } from "react";

import { Container, Header, Footer } from "@components";
import BannerFirst from "@components/banner/first";
import InformationBanner from "@components/banner/information";
import BannerSecond from "@components/banner/second";
import BusinessBanner from "@components/banner/business";
import BusinessMobileBanner from "@components/banner/business-mobile";

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
      <Footer />
    </Container>
  );
};

export default Home;
