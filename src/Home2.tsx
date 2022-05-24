import React from "react";
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
        display: "flex",
        backgroundColor: "cyan",
        color: "white",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "hidden",
        overflowX: "hidden",
        height: "calc(100vh - 150px)",
      }}
    >
      <img
        src={Background_1}
        style={{
          objectFit: "cover",
          opacity: "0.8",
          width: "100%",
          position: "absolute",
          height: "100%",
          top: "0px",
          left: "0px",
        }}
      />
      <FlexboxGrid
        style={{ backgroundColor: "black", width: "25%", height: "100%" }}
      />
      <FlexboxGrid
        style={{
          display: "flex",
          flexDirection: "column",
          width: "75%",
          textAlign: "center",
        }}
      >
        <FlexboxGrid.Item colspan={24} as={Col}>
          <h2>To Travel is to Live</h2>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24} as={Col}>
          <p>
            Vacation Homes in the Riviera Maya and Puerto Penasco offered by
            Cece
          </p>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={24}
          as={Col}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={24}>
              <Form layout="horizontal">
                <Form.Group controlId="email">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="email" type="email" />
                  <Form.HelpText tooltip>Email is required</Form.HelpText>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Check-in & Check-Out:</Form.ControlLabel>
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
                <ReCAPTCHA
                  sitekey="6Lfs2A4gAAAAALNUUsbQQiXqNIysLq0Ijpq6akRq"
                  onChange={onChange}
                />
                <ButtonToolbar>
                  <Button appearance="primary" type="submit">
                    Submit
                  </Button>
                </ButtonToolbar>
              </Form>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
  );
};
