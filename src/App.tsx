import React from "react";
import "./App.css";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};
