import React from "react";
import { Col, Container, Content, FlexboxGrid, Panel, Row } from "rsuite";
import { Card } from "./Card";
import "rsuite/dist/rsuite.min.css";
import Background_1 from "./img/background1.jpg";

export const About = () => {
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
            About Our Properties
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5% 0 5% 0 ",
            color: "gray",
            backgroundColor: "white",
          }}
        >
          <p
            style={{
              fontSize: "1.8em",
              fontFamily: "Arial, Helvetica, sans-serif",
              width: "60%",
              marginBottom: "5%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quidem
            earum fugiat quasi accusamus repellendus fugit neque alias
            accusantium placeat porro voluptatem ad, vero id at obcaecati hic,
            explicabo tempore!
          </p>
          <Row>
            <Col lg={8} md={8} smHidden>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={8} md={8} smHidden>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={8} md={8} smHidden>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} smHidden>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={8} md={8} smHidden>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={8} md={8} smHidden>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} smHidden>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={8} md={8} smHidden>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
            <Col lg={8} md={8} smHidden>
              <Panel shaded>
                <img src="https://via.placeholder.com/240x240" />
              </Panel>
            </Col>
          </Row>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={24}
          as={Col}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "3% 2% 3% 2%",
            overflowY: "hidden",
          }}
        >
          <h2
            style={{ fontFamily: "cursive", marginBottom: "2%", zIndex: "5" }}
          >
            Our Team
          </h2>
          <p
            style={{
              fontSize: "1.8em",
              fontFamily: "Arial, Helvetica, sans-serif",
              marginBottom: "2%",
              color: "white",
              zIndex: "5",
            }}
          >
            We love to make sure you have a great experience.
          </p>
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
        <FlexboxGrid.Item
          colspan={24}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "3% 0 3% 0 ",
            color: "gray",
            backgroundColor: "white",
          }}
        >
          <Row
            style={{
              fontSize: "1.3em",
            }}
          >
            <Col sm={24} md={8} lg={8} xs={24}>
              <Card
                name="Cece"
                title="Owner & Host"
                contact="+1 (760) 902-9623"
                imgSrc="https://via.placeholder.com/240x240"
              />
            </Col>
            <Col sm={24} md={8} lg={8} xs={24}>
              <Card
                name="Mika"
                title="Host"
                contact="Whatsapp +52 984 807 9102"
                imgSrc="https://via.placeholder.com/240x240"
              />
            </Col>
            <Col sm={24} md={8} lg={8} xs={24}>
              <Card
                name="Ignacio"
                title="Host"
                contact="+1 (818) 731-7024"
                imgSrc="https://via.placeholder.com/240x240"
              />
            </Col>
          </Row>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
  );
};
