import React from "react";
import { Col, FlexboxGrid, Footer } from "rsuite";
import { createIconFont } from "@rsuite/icons";

export const Footer2 = () => {
  const IconFont = createIconFont({
    scriptUrl: "//at.alicdn.com/t/font_2144422_r174s9i1orl.js",
    commonProps: {
      style: { color: "white", fontSize: "1.5em", marginBottom: "5%" },
    },
    onLoaded: () => {
      console.log("onLoaded");
    },
  });
  return (
    <Footer
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundImage:
          "linear-gradient( rgba(42, 147, 182, 0.837) 0%, rgb(53, 191, 238) 15%, rgb(53, 191, 238) 85%, rgba(42, 147, 182, 0.837) 100%)",
      }}
    >
      <FlexboxGrid
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FlexboxGrid.Item as={Col} colspan={6} style={{ padding: "1% 0 1% 0" }}>
          <p
            style={{
              fontSize: "1.2em",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            cebeehomes@gmail.com
          </p>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={6} style={{ padding: "1% 0 1% 0" }}>
          <p
            style={{
              fontSize: "1.2em",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            +1 (760) 219-3781
          </p>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={6} style={{ padding: "1% 0 1% 0" }}>
          <p
            style={{
              fontSize: "1.2em",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            1440 Beaumont Ave. Ste 2A-173 Beaumont, CA 92223
          </p>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          as={Col}
          colspan={6}
          style={{
            backgroundImage:
              "linear-gradient(rgba(31, 106, 131, 0.487) 0%, rgba(42, 147, 182, 0.837) 15%, rgba(42, 147, 182, 0.837) 85%, rgba(31, 106, 131, 0.487) 100%)",
            padding: "1% 0 1% 0",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FlexboxGrid>
            <FlexboxGrid.Item
              as={Col}
              colspan={8}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconFont icon="rs-iconreload" />
              <span>TBA</span>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              as={Col}
              colspan={8}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconFont icon="rs-iconreload" />
              <span>TBA</span>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              as={Col}
              colspan={8}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconFont icon="rs-iconreload" />
              <span>TBA</span>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Footer>
  );
};
