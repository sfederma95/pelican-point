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
            We create awesome experiences
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
          as={Col}
          colspan={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            padding: "5% 0 2% 0 ",
            color: "black",
            backgroundColor: "white",
          }}
        >
          <h2 style={{ fontFamily: "cursive" }}>Testimonials</h2>
          <Carousel
            key={`${placement}.${shape}`}
            placement={placement}
            shape={shape}
            className="custom-slider"
            autoplay
            style={{
              margin: "5% 0 5% 0",
              padding: "5% 0 5% 0",
            }}
          >
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                style={{ height: "25%" }}
              />
              <p>Name</p>
              <p>Date</p>
              <p>Description</p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                style={{ height: "25%" }}
              />
              <p>Name</p>
              <p>Date</p>
              <p>Description</p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                style={{ height: "25%" }}
              />
              <p>Name</p>
              <p>Date</p>
              <p>Description</p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                style={{ height: "25%" }}
              />
              <p>Name</p>
              <p>Date</p>
              <p>Description</p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                style={{ height: "25%" }}
              />
              <p>Name</p>
              <p>Date</p>
              <p>Description</p>
            </div>
          </Carousel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={24}
          as={Col}
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5% 2% 5% 2%",
            overflowY: "hidden",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontFamily: "cursive", zIndex: "5" }}>
            These are just some of our testimonials...
          </h2>
          <Button
            href="www.google.com"
            style={{ fontFamily: "arial", zIndex: "5", marginTop: "3%" }}
            size="lg"
          >
            View More
          </Button>
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
      </FlexboxGrid>
    </Content>
  );
};
