import * as React from "react";

import coteLogo from "../assets/cote-logo.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "@mui/base";

// todo: 레이아웃 잡기

function MainPage() {
  const navigation = useNavigate();

  return (
    <>
      <Header />
      <section className="flex justify-between">
        <h1>Cote Study!</h1>
        <Button>Add Session</Button>
      </section>
      <section></section>
      <section></section>
      <Footer />
    </>
  );
}

export default MainPage;
