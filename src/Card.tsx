import React from "react";
import { Col, Container, Content, Panel, Row } from "rsuite";

export const Card = (props: {
  title: string;
  name: string;
  contact: string;
  imgSrc: string;
}) => (
  <Panel
    shaded
    bordered
    style={{
      display: "inline-block",
      fontWeight: "900",
    }}
  >
    <img src={props.imgSrc} height="350" />
    <Panel>
      <p style={{ fontFamily: "cursive", fontSize: "1.5em" }}>{props.name}</p>
      <p>{props.title}</p>
      <p>
        <small>{props.contact}</small>
      </p>
    </Panel>
  </Panel>
);
