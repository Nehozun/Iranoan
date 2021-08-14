import { Container, Footer, Header } from "@components";
import BusinessBanner from "@components/banner/business";
import BusinessMobileBanner from "@components/banner/business-mobile";
import InformationBanner from "@components/banner/information";
import NewBannerFirst from "@components/banner/newFirst";
import BannerSecond from "@components/banner/second";
import React, { useRef } from "react";

const Home: React.FC = () => {
  const infoRef = useRef<any>();
  const scrollTo = (value: string) => {
    if (value && value === "information") {
      infoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      <div className="head-wrapper">
        <Header callback={scrollTo} isHome={true}/>
        <NewBannerFirst />
        <BannerSecond />
      </div>
      <div className="toggle-business-banner desktop">
        <BusinessBanner />
      </div>
      <div className="toggle-business-banner mobile">
        <BusinessMobileBanner />
      </div>
      <div ref={infoRef}>
        <InformationBanner />
      </div>
      <Footer callback={scrollTo} isHome={true}/>
    </Container>
  );
};

export default Home;
