import React from "react";
import "./styles/grid.css";

function Grid() {
  return (
    <div className="grid">
      <div className="title">
        <h1 style={{ color: "white" }}>
          Access Boundless Knowledge with
          <span> Subscription</span>
        </h1>
        <h3 style={{ color: "white", marginBottom: "70px" }}>
          Choose Your theme
        </h3>
      </div>
      <div className="cds" style={{ marginBottom: "55px" }}>
        <img src="./img/bio.png" alt="bio" />
        <img src="./img/chem.png" alt="bio" />
        <img src="./img/steam.png" alt="bio" />
      </div>
      <div className="rf">
        Discover the 'Fantastic, Remarkable' Wonders - Monthly Delivery Awaits!
      </div>
      <div className="bd">
        <h2>
          <span>1 </span>Choose Your Subscription
        </h2>
        <h2>
          <span>2 </span>Select Your Plan
        </h2>
        <h2>
          <span>3 </span>Receive Funfilled kit Every Month
        </h2>
      </div>
    </div>
  );
}

export default Grid;
