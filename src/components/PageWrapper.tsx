import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

function PageWrapper({ children }) {
  return (
    <div className="tw-flex tw-flex-col">
      <Header />
      <div className="tw-flex-1 tw-p-20">{children}</div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
