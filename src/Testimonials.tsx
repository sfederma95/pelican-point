import React from "react";
import {
  Container,
  Content,
  FlexboxGrid,
  Panel,
  Col,
  Carousel,
  Button,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Background_1 from "./img/background1.jpg";

export const Testimonials = () => {
  const placement = "bottom";
  const shape = "bar";
  return (
    <Content
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "cyan",
        color: "white",
        background: `url(${Background_1}) no-repeat 0 0`,
        backgroundSize: "cover",
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
            backgroundColor: "rgba(0, 255, 255, 0.3)",
          }}
        >
          <h1 style={{ fontFamily: "cursive", zIndex: "5" }}>
            We create awesome experiences
          </h1>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            padding: "2% 0 2% 0 ",
            color: "gray",
          }}
        >
          <h2 className="subtitle">Testimonials</h2>
          <Panel shaded className="car-panel">
            <Carousel
              key={`${placement}.${shape}`}
              placement={placement}
              shape={shape}
              className="custom-slider"
              autoplay
            >
              <div className="car-slide">
                <h4>Name</h4>
                <p>Date</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate beatae possimus id quis delectus incidunt adipisci,
                  aspernatur corporis odio excepturi vitae error amet
                  necessitatibus veritatis aperiam omnis, voluptatibus harum
                  fugit.
                </p>
              </div>
              <div className="car-slide">
                <p>Name</p>
                <p>Date</p>
                <p>Description</p>
              </div>
              <div className="car-slide">
                <p>Name</p>
                <p>Date</p>
                <p>Description</p>
              </div>
              <div className="car-slide">
                <p>Name</p>
                <p>Date</p>
                <p>Description</p>
              </div>
              <div className="car-slide">
                <p>Name</p>
                <p>Date</p>
                <p>Description</p>
              </div>
            </Carousel>
          </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={24}
          as={Col}
          style={{
            display: "flex",
            padding: "3% 0% 3% 0%",
            backgroundColor: "rgba(0, 255, 255, 0.3)",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontFamily: "cursive" }}>
            These are just some of our testimonials...
          </h2>
          <Button
            href="www.google.com"
            style={{ fontFamily: "arial", marginTop: "3%" }}
            size="lg"
          >
            View More
          </Button>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
  );
};
