import React, { forwardRef, useEffect, useRef } from "react";
import {
  Button,
  ButtonToolbar,
  Col,
  Container,
  Content,
  FlexboxGrid,
  Form,
  Input,
  Panel,
  Row,
  Loader,
} from "rsuite";
import Background_1 from "./img/background1.jpg";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";
import { ContactModel } from "./schemas/other";
import emailjs from "@emailjs/browser";

const _textArea = forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));
export const Contact = () => {
  const _form = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    content: "",
  });
  const handleFormChange = (object, value) => {
    const key = value.target.id;
    setFormData({ ...formData, [key]: object[key] });
  };
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
            process.env.REACT_APP_TEMPLATE_ID_GENERAL,
            formData,
            process.env.REACT_APP_USER_ID
          )
          .then(
            (res) => {
              console.log(res);
              setLoading(false);
              setEmailSentOutcome(true);
              setTimeout(() => setSuccessMessage(false), 1800);
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
          colspan={24}
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
              minWidth: "40%",
              alignItems: "center",
              maxWidth: "95%",
            }}
          >
            <FlexboxGrid.Item
              colspan={24}
              as={Col}
              style={{
                display: "inline-block",
                margin: "5% 0 8% 0",
              }}
            >
              <h2 className="title">Contact Us</h2>
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
                        formValue={formData}
                        onChange={handleFormChange}
                        model={ContactModel}
                        onSubmit={handleSubmit}
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
                        <Form.Group controlId="subject">
                          <Form.ControlLabel>Subject</Form.ControlLabel>
                          <Form.Control
                            name="subject"
                            placeholder="Message Subject"
                            value={formData.subject || ""}
                            type="text"
                          />
                        </Form.Group>
                        <Form.Group controlId="content">
                          <Form.ControlLabel>Content</Form.ControlLabel>
                          <Form.Control
                            name="content"
                            placeholder="Message Content"
                            value={formData.content || ""}
                            type="text"
                            accepter={_textArea}
                            rows={6}
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
