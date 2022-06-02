import { Schema } from "rsuite";

const { StringType, ArrayType, NumberType } = Schema.Types;
export const ReservationModel = Schema.Model({
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
