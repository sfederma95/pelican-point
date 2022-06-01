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
  Schema,
  SelectPicker,
} from "rsuite";
import { forwardRef } from "react";
import Background_1 from "./img/background1.jpg";

export const Home = () => {
  const { StringType, ArrayType, NumberType } = Schema.Types;
  const _form = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    dates: [],
    properties: "",
    guests: null,
  });
  const model = Schema.Model({
    email: StringType()
      .isEmail("Please enter a valid email address")
      .isRequired("This field is required."),
    properties: StringType().isRequired("This field is required"),
    dates: ArrayType().isRequired("This field is required"),
    name: StringType(),
    guests: NumberType()
      .isRequired("A number is required greater than 0")
      .min(1, "Must be greater than 0"),
  });
  const handleSubmit = () => {
    if (_form.current && _form.current.check()) {
      if (!formData.name) console.log("Good");
    }
  };
  const handlePropertiesChange = (value) => {
    setFormData({ ...formData, properties: value });
  };
  const handleDatesChange = (value) => {
    setFormData({ ...formData, dates: value });
  };
  const handleFormChange = (object, value) => {
    const key = value.target.id;
    setFormData({ ...formData, [key]: object[key] });
  };
  const propertyPicker = forwardRef(() => (
    <SelectPicker
      data={[
        { label: "Puerto Penasco - Sonoran Sun", value: "sonoran-sun" },
        { label: "Puerto Penasco - Sonoran Spa", value: "sonoran-spa" },
        { label: "Tulum", value: "tulum" },
      ]}
      searchable={false}
      block
      name="properties"
      onChange={handlePropertiesChange}
      value={formData.properties}
    />
  ));
  const datePicker = forwardRef(() => (
    <DateRangePicker
      showOneCalendar
      block
      placeholder="Select Date Range"
      value={formData.dates}
      onChange={handleDatesChange}
    />
  ));
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
                      ref={_form}
                      onSubmit={handleSubmit}
                      formValue={formData}
                      onChange={handleFormChange}
                      model={model}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "1.3em",
                      }}
                    >
                      <Form.Group controlId="email">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control
                          name="email"
                          placeholder="Your e-mail here"
                          value={formData.email || ""}
                          type="text"
                        />
                      </Form.Group>
                      <Form.Group controlId="guests">
                        <Form.ControlLabel>Guests</Form.ControlLabel>
                        <Form.Control
                          name="guests"
                          placeholder="# of Guests"
                          value={formData.guests || ""}
                          type="number"
                        />
                      </Form.Group>
                      <Form.Group controlId="dates">
                        <Form.ControlLabel>
                          Check-in & Check-Out:
                        </Form.ControlLabel>
                        <Form.Control name="dates" accepter={datePicker} />
                      </Form.Group>
                      <Form.Group controlId="properties">
                        <Form.ControlLabel>Location:</Form.ControlLabel>
                        <Form.Control
                          name="properties"
                          accepter={propertyPicker}
                        />
                      </Form.Group>
                      <Form.Group controlId="name" className="name-input">
                        <Form.ControlLabel>Name</Form.ControlLabel>
                        <Form.Control
                          name="name"
                          autoComplete="off"
                          type="text"
                          placeholder="Your name here"
                          value={formData.name || ""}
                        />
                      </Form.Group>
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
