import React, { useEffect, useRef, useState } from "react";
import Background_1 from "./img/background1.jpg";
import "./Home.css";
import { DateRangePicker, SelectPicker, Button, Form } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export const Home = () => {
  const openEmailWindow = () => {
    window.open("mailto:cebeehomes@gmail.com?subject=Rentals");
  };
  return (
    <div className="home">
      <div className="sidebar"></div>
      <img className="bg1" src={Background_1} />
      <div className="text">
        <h2>To Travel is to Live</h2>
        <p>
          Vacation Homes in the Riviera Maya and Puerto Penasco offered by Cece
        </p>
        <Form fluid>
          <DateRangePicker
            showOneCalendar
            block
            placeholder="Select Date Range"
          />
          <SelectPicker
            data={[
              { label: "Puerto Penasco - Sonoran Sun", value: "sonoran-sun" },
              { label: "Puerto Penasco - Sonoran Spa", value: "sonoran-spa" },
              { label: "Tulum", value: "tulum" },
            ]}
            searchable={false}
            block
          />
          <Button
            onClick={openEmailWindow}
            color="cyan"
            appearance="primary"
            block
          >
            Book Directly
          </Button>
        </Form>
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
