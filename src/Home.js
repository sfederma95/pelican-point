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
  Loader,
} from "rsuite";
import { forwardRef } from "react";
import Background_1 from "./img/background1.jpg";
import emailjs from "@emailjs/browser";
import { ReservationModel } from "./schemas/reservation";

export const Home = () => {
  const _form = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    dates: [],
    properties: "",
    guests: null,
  });
  const [successMessage, setSuccessMessage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailSentOutcome, setEmailSentOutcome] = useState(false);
  const handleSubmit = () => {
    if (_form.current && _form.current.check()) {
      if (!formData.name) {
        setEmailSubmitted(true);
        setLoading(true);
        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID_RESERVATION,
            {
              dates: formatDates(),
              property: formData.properties,
              guests: formData.guests,
              email: formData.email,
            },
            process.env.REACT_APP_USER_ID
          )
          .then(
            (res) => {
              console.log(res);
              setLoading(false);
              setEmailSentOutcome(true);
              setTimeout(() => setSuccessMessage(false), 1500);
            },
            (error) => {
              console.log(error);
              setLoading(false);
              setEmailSentOutcome(false);
            }
          );
        setFormData({
          email: "",
          subject: "",
          content: "",
        });
      }
    }
  };
  const formatDates = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const [checkIn, checkOut] = formData.dates;
    return `${new Date(checkIn).toLocaleDateString(
      "en-US",
      options
    )} - ${new Date(checkOut).toLocaleDateString("en-US", options)}`;
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
  const _propertyPicker = forwardRef(() => (
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
  const _datePicker = forwardRef(() => (
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
                maxWidth: "70%",
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
                  {loading ? (
                    <Panel
                      shaded
                      bordered
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        padding: "5% 0 5% 0",
                      }}
                    >
                      <Loader center size="md" content="Sending..." />
                    </Panel>
                  ) : !emailSubmitted ? (
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
                        model={ReservationModel}
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
                          <Form.Control name="dates" accepter={_datePicker} />
                        </Form.Group>
                        <Form.Group controlId="properties">
                          <Form.ControlLabel>Location:</Form.ControlLabel>
                          <Form.Control
                            name="properties"
                            accepter={_propertyPicker}
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
                  ) : (
                    <Panel
                      shaded
                      style={{
                        backgroundColor: emailSentOutcome
                          ? "lightgreen"
                          : "orange",
                        color: "black",
                        fontSize: "1.4em",
                      }}
                      as="button"
                      onClick={() => {
                        setEmailSubmitted(false);
                        setSuccessMessage(true);
                      }}
                    >
                      {emailSentOutcome ? (
                        successMessage ? (
                          <p>Request Sent Successfully!</p>
                        ) : (
                          <p style={{ fontSize: "0.9em" }}>
                            A response will be sent to your e-mail shortly.
                          </p>
                        )
                      ) : (
                        <p>Try Again</p>
                      )}
                    </Panel>
                  )}
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
  );
};
