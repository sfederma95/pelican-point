import React from "react";
import { Col, Container, Content, FlexboxGrid, Panel, Row } from "rsuite";
import { Card } from "./Card";
import "rsuite/dist/rsuite.min.css";

export const NotFound = () => {
  return (
    <Content
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "white",
        color: "gray",
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
          margin: "15% 0 15% 0",
        }}
      >
        <FlexboxGrid.Item colspan={24}>
          <h1>Page Could Not Be Found</h1>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
  );
};
