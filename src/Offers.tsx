import React from "react";
import { Col, Container, Content, FlexboxGrid, Panel, Row } from "rsuite";
import Background_1 from "./img/background1.jpg";
import "rsuite/dist/rsuite.min.css";

export const Offers = () => {
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
          colspan={24}
          as={Col}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5% 2% 5% 2%",
            overflowY: "hidden",
          }}
        >
          <h1 style={{ fontFamily: "cursive", zIndex: "5" }}>
            Make Memories With Us
          </h1>
          <img
            src={Background_1}
            style={{
              objectFit: "cover",
              objectPosition: "middle left",
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
          <h2 style={{ fontFamily: "cursive", marginBottom: "4%" }}>
            Specials
          </h2>
          <Row style={{ marginBottom: "1%" }}>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
          </Row>
          <Row style={{ margin: "1% 0 2% 0" }}>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
          </Row>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "5% 2% 5% 2%",
            overflowY: "hidden",
          }}
        >
          <img
            src={Background_1}
            style={{
              objectFit: "cover",
              objectPosition: "top left",
              opacity: "0.8",
              width: "100%",
              position: "absolute",
              top: "0px",
              left: "0px",
            }}
          />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
  );
};
