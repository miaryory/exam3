import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Login from "./Login";
import SlotMachine from "./SlotMachine";
import BuyRows from "./BuyRows";
import FourOptions from "./FourOptions";
import PastWinners from "./PastWinners";

function MainSite() {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887df9fd86cb75861e2626",
      "cache-control": "no-cache"
    };
    fetch("./lotto.json", {
      method: "get",
      headers: headers
    })
      .then(e => e.json())
      .then(e => setWinners(e));
  }, []);

  return (
    <div className="FullSite">
      <Header />
      <Banner />
      <Login />
      <SlotMachine />
      <BuyRows />
      <FourOptions />
      <PastWinners winners={winners} />
      <Footer />
    </div>
  );
}
export default MainSite;
