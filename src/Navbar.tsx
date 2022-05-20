import React from "react";
import "./Navbar.css";
import { useRef, useEffect, useState } from "react";

export const Navbar = () => {
  const _navBar = useRef<HTMLDivElement>(null);
  const [currentHeight, setCurrentHeight] = useState("");
  useEffect(() => {
    if (_navBar.current) {
      setCurrentHeight(_navBar.current.style.height);
    }
  }, []);
  window.onresize = () => {
    if (window.innerWidth > 880 && _navBar.current) {
      _navBar.current.style.height = currentHeight;
    }
  };
  const handleChange = (e: { target: { checked: any } }) => {
    const checked = e.target.checked;
    if (_navBar.current) {
      if (checked) {
        _navBar.current.style.height = "100vh";
      } else {
        _navBar.current.style.height = currentHeight;
      }
    }
  };
  return (
    <div ref={_navBar} className="nav nav-bar">
      <input type="checkbox" id="nav-check" onChange={handleChange} />
      <div className="nav-header">
        <div className="nav-title"></div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/special-offers">Special Offers</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};
