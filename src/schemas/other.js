import { Schema } from "rsuite";

const { StringType } = Schema.Types;
export const ContactModel = Schema.Model({
  email: StringType()
    .isEmail("Please enter a valid email address")
    .isRequired("This field is required."),
  subject: StringType().isRequired("This field is required"),
  content: StringType().isRequired("This field is required"),
  name: StringType(),
});
