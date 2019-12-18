import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import SlotMachine from "./SlotMachine";
import BuyRows from "./BuyRows";
import FourOptions from "./FourOptions";
import PastWinners from "./PastWinners";
import Intro from "./Intro";
import CookieConsent from "react-cookie-consent";

function MainSite() {
  //fetching the data from past week statistics and store it
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

  //fetching all the current users whi have an account and store it
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://kea3rdsemester-91fd.restdb.io/rest/" +
        "subscribers?fetchchildren=true",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "5d887df9fd86cb75861e2626",
          "cache-control": "no-cache"
        }
      }
    )
      .then(e => e.json())
      .then(e => setUsers(e));
  }, []);

  return (
    <div className="FullSite">
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Header />
      <Banner />
      <Intro />
      <SlotMachine />
      <BuyRows users={users} />
      <FourOptions users={users} />
      <PastWinners winners={winners} />
      <Footer />
    </div>
  );
}
export default MainSite;
