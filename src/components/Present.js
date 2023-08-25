import React from "react";
import "./styles/present.css";

function Present() {
  return (
    <div className="present">
      <img
        style={{
          left: "93%",
          position: "absolute",
          width: "100px",
          top: "10%",
          zIndex: "1",
        }}
        src="./img/vector.png"
        alt=""
      />

      <div className="content">
        <h1>
          Presenting Us <span>!</span>
        </h1>
        <div className="ctext">
          Revolutionizing e-learning with{" "}
          <span>
            Interactive courses, Practical kits, and a Vibrant community
          </span>
          for hands-on virtual learning experiences
        </div>
        <a href="#">Learn More about us &#8594;</a>
      </div>
      <div className="pic">
        <img className="p1" src="./img/m3.png" alt="pic" />
        <img className="p2" src="./img/m2.png" alt="pic" />
        <img className="p3" src="./img/m1.png" alt="pic" />
      </div>
    </div>
  );
}

export default Present;
