import React from "react";
import "./styles/card.css";

function Card() {
  return (
    <div className="card">
      <div className="title">
        <h1>
          Your Gateway To <span>Knowledge and Innovation</span>
        </h1>
        <h3>Discover! Shop! Elevate Your Learning With One Time shop!</h3>
      </div>
      <div className="cd">
        <img src="./img/gr.png" alt="card" />
        <img src="./img/gr.png" alt="card" />
        <img src="./img/gr.png" alt="card" />
        <img src="./img/gr.png" alt="card" />
      </div>
      <a href="#">Start Exploring Shop &#8594;</a>
    </div>
  );
}

export default Card;
