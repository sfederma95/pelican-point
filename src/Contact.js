import React from "react";
import {
  Button,
  ButtonToolbar,
  Col,
  Container,
  Content,
  FlexboxGrid,
  Form,
  Input,
  Panel,
  Row,
} from "rsuite";
import Background_1 from "./img/background1.jpg";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";
import { ContactForm } from "./ContactForm";

// Need to implement captcha for this form

export const Contact = () => {
  return (
    <Content
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "cyan",
        color: "white",
      }}
    >
      <FlexboxGrid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "4% 0 4% 0",
          }}
        >
          <img
            src={Background_1}
            style={{
              objectFit: "cover",
              opacity: "0.8",
              width: "100%",
              position: "absolute",
            }}
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={24}
          as={Col}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5% 0 5% 0 ",
            color: "gray",
            backgroundColor: "white",
          }}
        >
          <h2 style={{ fontFamily: "cursive", marginBottom: "3%" }}>
            Contact Us
          </h2>
          <ContactForm />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "4% 0 4% 0",
          }}
        >
          <img
            src={Background_1}
            style={{
              objectFit: "cover",
              opacity: "0.8",
              width: "100%",
              position: "absolute",
            }}
          />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
  );
};
