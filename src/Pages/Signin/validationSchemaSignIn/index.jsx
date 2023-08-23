import * as Yup from "yup";

const validationSchemaSignIn = Yup.object({
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

export default validationSchemaSignIn;
