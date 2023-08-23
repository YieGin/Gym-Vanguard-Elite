import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Your first name is required.")
    .test(
      "uppercase",
      "Your first name must contain at least one uppercase letter.",
      (value) => /[A-Z]/g.test(value || "")
    ),
  lastName: Yup.string()
    .required("Your last name is required.")
    .test(
      "uppercase",
      "Your last name must contain at least one uppercase letter.",
      (value) => /[A-Z]/g.test(value || "")
    ),
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("Email is required."),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z]).{10,}$/,
      "Must Contain 10 Characters and One Uppercase Letter"
    ),
});

export default validationSchema;
