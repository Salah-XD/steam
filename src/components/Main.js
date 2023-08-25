import React from "react";
import "./styles/main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__left">
        <h2 className="text1">
          Lab n <span>Box</span>
        </h2>
        <h2 className="text2">
          Unleash Your{" "}
          <i>
            Inner Explorers{" "}
            <span>
              <strong>!</strong>
            </span>
          </i>
        </h2>
        <h4 className="sub">
          Discover the fusion of <span className="cc">Steam</span>
          <span className="cb">tastic</span> education and <br />
          practical experience within the virtual world.
        </h4>
        <a href="#">Join the Lab n Box Community &#8594;</a>
      </div>
      <div className="main__right">
        <img className="img1" src="./img/vr.png" alt="" />
      </div>
    </div>
  );
}

export default Main;
