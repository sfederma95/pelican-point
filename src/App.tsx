import React from "react";
import "./App.css";
import { Home2 } from "./Home2";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Footer2 } from "./Footer2";
import { About } from "./About";
import { Testimonials } from "./Testimonials";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NotFound } from "./404";
import { Offers } from "./Offers";
import { Contact } from "./Contact";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home2 />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/special-offers">
            <Offers />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      {/* <Footer2 /> */}
    </div>
  );
};
