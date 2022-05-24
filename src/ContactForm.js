import React, { FormEvent, forwardRef, useRef } from "react";
import {
  Button,
  ButtonToolbar,
  FlexboxGrid,
  Form,
  Input,
  Modal,
  Panel,
  Schema,
} from "rsuite";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

export const ContactForm = () => {
  //   const errorStyles = errorVisible<Boolean> => {
  //       return { display: errorVisible ? 'block' : 'none', color: 'red', marginTop: 6 };
  //     };
  //       const [errorVisible, setErrorVisible] = useState(false);
  //   const [errorPlacement, setErrorPlacement] = useState('bottomStart');
  //   const errorMessage = errorVisible ? 'This field is required' : null;
  const [captcha, setCaptcha] = useState("");
  const contentRule = Schema.Types.StringType().isRequired(
    "This field is required."
  );
  const Textarea = forwardRef((props, ref) => (
    <Input {...props} rows={5} as="textarea" ref={ref} rule={contentRule} />
  ));
  function ContentField() {
    return (
      <Form.Group controlId="content">
        <Form.ControlLabel>Message:</Form.ControlLabel>
        <Form.Control name="content" accepter={Textarea} />
      </Form.Group>
    );
  }

  const emailRule = Schema.Types.StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required");
  function EmailField() {
    return (
      <Form.Group controlId="email">
        <Form.ControlLabel>Email:</Form.ControlLabel>
        <Form.Control
          name="email"
          rule={emailRule}
          errorPlacement={"bottomStart"}
          onChange={handleChange}
        />
      </Form.Group>
    );
  }

  const [formValue, setFormValue] = useState({
    email: "",
    subject: "",
    textarea: "",
  });

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((l) => ({ ...l, [name]: value }));
  };

  return (
    <Panel bordered shaded>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={24}>
          <Form
            layout="horizontal"
            formValue={formValue}
            onSubmit={handleSubmit}
          >
            <EmailField />
            <Form.Group controlId="subject">
              <Form.ControlLabel>Subject:</Form.ControlLabel>
              <Form.Control
                name="subject"
                rule={emailRule}
                onChange={handleChange}
              />
            </Form.Group>
            <ContentField />
            <ReCAPTCHA
              sitekey="6Lfs2A4gAAAAALNUUsbQQiXqNIysLq0Ijpq6akRq"
              onChange={onChange}
            />
            <ButtonToolbar>
              <Button
                appearance="primary"
                type="submit"
                // onSubmit={setErrorVisible}
                // checked={errorVisible}
              >
                Submit
              </Button>
            </ButtonToolbar>
          </Form>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Panel>
  );
};
