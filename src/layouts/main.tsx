import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { memo } from "react";

const MainLayout = memo(({ children }) => {
  return (
    <div className="main-layout-component flex flex-col h-screen">
      <div
        className="main-layout-wrapper flex-1 relative"
        style={{ background: "url('/images/bg-top.png') right top no-repeat" }}
      >
        <Header callback={() => {}} />
        <div className="main-content flex-1 overflow-y-auto px-2 md:px-20 py-12 md:py-30">{children}</div>
      </div>

      <Footer callback={() => {}} />
    </div>
  );
});

export default MainLayout;
