import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import SlotMachine from "./SlotMachine";
import BuyRows from "./BuyRows";
import FourOptions from "./FourOptions";
import PastWinners from "./PastWinners";

function MainSite() {
  return (
    <div className="FullSite">
      <Header />
      <Banner />
      <SlotMachine />
      <BuyRows />
      <FourOptions />
      <PastWinners />
      <Footer />
    </div>
  );
}
export default MainSite;
