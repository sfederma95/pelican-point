import React, { useEffect, useState } from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <p>cebeehomes@gmail.com</p>
      <p>+1 (760) 219-3781</p>
      <p>1440 Beaumont Ave. Ste 2A-173 Beaumont, CA 92223</p>
      <div className="socials">
        <span>FB</span>
        <span>Twitter</span>
        <span>Insta</span>
      </div>
    </div>
  );
};