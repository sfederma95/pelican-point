import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  ButtonToolbar,
  Col,
  Content,
  DateRangePicker,
  FlexboxGrid,
  Form,
  Panel,
  SelectPicker,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import ReCAPTCHA from "react-google-recaptcha";
import { forwardRef } from "react";
import { PickerInstance } from "rsuite/esm/Picker";
import Background_1 from "./img/background1.jpg";

export const Home2 = () => {
  const [reCaptcha, setReCaptcha] = useState(
    <ReCAPTCHA
      sitekey="6Lfs2A4gAAAAALNUUsbQQiXqNIysLq0Ijpq6akRq"
      onChange={onChange}
      size="normal"
      className="g-recaptcha"
    />
  );
  useEffect(() => {
    if (window.innerWidth < 500) {
      setReCaptcha(
        <ReCAPTCHA
          sitekey="6Lfs2A4gAAAAALNUUsbQQiXqNIysLq0Ijpq6akRq"
          onChange={onChange}
          size="compact"
          className="g-recaptcha"
        />
      );
    }
  });
  const propertyPicker = forwardRef(
    (props, ref?: React.Ref<PickerInstance>) => (
      <SelectPicker
        {...props}
        ref={ref}
        data={[
          { label: "Puerto Penasco - Sonoran Sun", value: "sonoran-sun" },
          { label: "Puerto Penasco - Sonoran Spa", value: "sonoran-spa" },
          { label: "Tulum", value: "tulum" },
        ]}
        searchable={false}
        block
      />
    )
  );
  const datePicker = forwardRef((props, ref?: React.Ref<PickerInstance>) => (
    <DateRangePicker
      {...props}
      showOneCalendar
      block
      placeholder="Select Date Range"
      ref={ref}
    />
  ));
  function onChange(value: string | null) {
    console.log("Captcha value:", value);
  }
  return (
    <Content
      style={{
        width: "100vw",
        color: "white",
        overflow: "hidden",
        background: `url(${Background_1}) no-repeat 0 0`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <FlexboxGrid style={{ width: "100%" }}>
        <FlexboxGrid.Item
          lg={6}
          md={6}
          smHidden
          xsHidden
          as={Col}
          style={{
            backgroundColor: "cyan",
            opacity: "0.3",
            minHeight: "100vh",
          }}
        />
        <FlexboxGrid.Item
          lg={18}
          md={18}
          sm={24}
          xs={24}
          as={Col}
          style={{
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh",
            paddingBottom: "1%",
          }}
        >
          <FlexboxGrid
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              maxWidth: "95%",
              alignItems: "center",
            }}
          >
            <FlexboxGrid.Item
              colspan={24}
              as={Col}
              style={{
                maxWidth: "90%",
                display: "inline-block",
                margin: "5% 0 5% 0",
              }}
            >
              <h2 className="title">To Travel is to Live</h2>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              colspan={24}
              as={Col}
              style={{
                maxWidth: "90%",
                display: "inline-block",
                margin: "5% 0 5% 0",
              }}
            >
              <p className="subtext">
                Vacation Homes in the Riviera Maya and Puerto Penasco offered by
                Cece
              </p>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              colspan={24}
              as={Col}
              style={{ display: "inline-block" }}
            >
              <FlexboxGrid>
                <FlexboxGrid.Item colspan={24}>
                  <Panel
                    shaded
                    bordered
                    style={{
                      backgroundColor: "white",
                      color: "gray",
                    }}
                  >
                    <Form
                      fluid
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "1.3em",
                      }}
                    >
                      <Form.Group controlId="email">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" />
                      </Form.Group>
                      <Form.Group>
                        <Form.ControlLabel>
                          Check-in & Check-Out:
                        </Form.ControlLabel>
                        <Form.Control
                          name="dates"
                          accepter={datePicker}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <Form.ControlLabel>Location:</Form.ControlLabel>
                        <Form.Control
                          name="properties"
                          accepter={propertyPicker}
                        ></Form.Control>
                      </Form.Group>
                      <div style={{ textAlign: "center", margin: "2% 0 2% 0" }}>
                        {reCaptcha}
                      </div>
                      <ButtonToolbar>
                        <Button
                          appearance="primary"
                          type="submit"
                          size="lg"
                          block
                        >
                          Submit
                        </Button>
                      </ButtonToolbar>
                    </Form>
                  </Panel>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
  );
};
