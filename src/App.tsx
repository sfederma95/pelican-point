import React from "react";
import "./App.css";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { About } from "./About";
import { Testimonials } from "./Testimonials";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NotFound } from "./404";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};
