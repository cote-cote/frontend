import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"

function PageWrapper({ children }) {
  return (
    <>
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </>
  )
}

export default PageWrapper
