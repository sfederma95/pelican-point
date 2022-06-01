import React from "react";
import {
  Col,
  Container,
  Content,
  FlexboxGrid,
  Panel,
  Row,
  Divider,
} from "rsuite";
import { Card } from "./Card";
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
            padding: "5% 0 5% 0",
            overflowY: "hidden",
            background: `url(${Background_1}) no-repeat 0 0`,
            backgroundSize: "cover",
          }}
        >
          <h1 style={{ fontFamily: "cursive", maxWidth: "90%" }}>
            About Our Properties
          </h1>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          as={Col}
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
              maxWidth: "90%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quidem
            earum fugiat quasi accusamus repellendus fugit neque alias
            accusantium placeat porro voluptatem ad, vero id at obcaecati hic,
            explicabo tempore!
          </p>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Divider
            style={{
              borderBottom: "1px solid gray",
              marginBottom: "5%",
              width: "85%",
            }}
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          as={Col}
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
          <h2 style={{ fontFamily: "cursive", marginBottom: "2%" }}>
            Our Team
          </h2>
          <p
            style={{
              fontSize: "1.8em",
              fontFamily: "Arial, Helvetica, sans-serif",
              marginBottom: "4%",
            }}
          >
            We love to make sure you have a great experience.
          </p>
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
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          className="bottom-img"
          style={{
            overflowY: "hidden",
            background: `url(${Background_1}) no-repeat 0 0`,
            backgroundSize: "cover",
          }}
        ></FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
  );
};
