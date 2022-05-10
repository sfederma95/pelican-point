import React, { useEffect, useState } from "react";
import Background_1 from "./img/background1.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="sidebar"></div>
      <img className="bg1" src={Background_1} />
      <div className="text">
        <h2>To Travel is to Live</h2>
        <p>
          Vacation Homes in the Riviera Maya and Puerto Penasco offered by Cece
        </p>
        <button>More Information and Inquiries</button>
      </div>
      {/* <div>
        <h2>Relax refresh and recharge</h2>
        <p>Your home away from home</p>
        <button>Learn More</button>
      </div>
      <div>
        <h2>Feel the vibe</h2>
        <p>
          The Pelican Point @ The Sonoran Sun Resort awaits you... Unwind and
          Relax with the best views the Sea of Cortez has to offer. Book direct
          and save on fees!
        </p>
      </div> */}
    </div>
  );
};
