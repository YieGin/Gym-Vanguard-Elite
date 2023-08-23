import * as Yup from "yup";

const ValidationSchemaOrdering = Yup.object({
  firstName: Yup.string()
    .required("Your first name is required.")
    .test(
      "uppercase",
      "Your first name must contain at least one uppercase letter.",
      (value) => {
        if (!value) {
          return true;
        }

        const uppercaseRe = /[A-Z]/g;
        return uppercaseRe.test(value);
      }
    ),
  lastName: Yup.string()
    .required("Your Last name is required.")
    .test(
      "uppercase",
      "Your Last name must contain at least one uppercase letter.",
      (value) => {
        if (!value) {
          return true;
        }

        const uppercaseRe = /[A-Z]/g;
        return uppercaseRe.test(value);
      }
    ),

  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("Email is required."),
  country: Yup.string()
    .notOneOf(["Select a country"], "Please select a country.")
    .required("Country selection is required."),
  state: Yup.string()
    .min(2, "State name should be at least 2 characters long.")
    .required("State selection is required."),
  zipCode: Yup.string()
    .matches(
      /^\d{5}$|^\d{5}-\d{4}$/,
      "Please enter a 5-digit or a 9-digit ZIP+4 code."
    )
    .required("Zip Code is required."),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Please enter a valid 16-digit card number.")
    .required("Card Number is required."),
  month: Yup.string()
    .notOneOf(["Month"], "Please select a month.")
    .required("Month selection is required."),
  year: Yup.string()
    .notOneOf(["Year"], "Please select a year.")
    .required("Year selection is required."),
  securityCode: Yup.string()
    .matches(/^\d{3,4}$/, "Security code should consist of 3 to 4 digits.")
    .required("Security code is required."),
  address: Yup.string()
    .trim()
    .min(5, "Address must be at least 5 characters long.")
    .max(100, "Address cannot exceed 100 characters.")
    .required("Address is required. Please provide a valid address."),

  city: Yup.string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "City can only contain letters.")
    .min(2, "City must be at least 2 characters long.")
    .max(50, "City cannot exceed 50 characters.")
    .required("City is required. Please provide a valid city."),
});
export default ValidationSchemaOrdering;
