import React, { useLayoutEffect } from "react";
import { useFormik } from "formik";

import { BsDot } from "react-icons/bs";
import { Cards, Paypal } from "../../../Assets/Images";

import CartSummary from "./CartSummary";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import ValidationSchemaOrdering from "./ValidationSchemaOrdering";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, index) => currentYear + index);
const months = Array.from({ length: 12 }, (_, index) => index + 1);
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
];

const Ordering = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      state: "",
      zipCode: "",
      cardNumber: "",
      month: "",
      year: "",
      securityCode: "",
      address: "",
      city: "",
    },
    validationSchema: ValidationSchemaOrdering,
    onSubmit: async (values, { setSubmitting }) => {
      if (formik.isValid && formik.touched) {
        try {
          console.log(values);
        } catch (error) {
          console.error(error);
        }
      }
      setSubmitting(false);
    },
  });
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-[100vh] bg-[#F0F0F0]">
      <form
        onSubmit={formik.handleSubmit}
        className="font-Roboto SmartphonesSm:pb-[30px] TabletSm:pb-[72px]"
      >
        <h1 className="py-6 font-bold text-center text-[24px] text-[#D7D7D7]">
          Billing details
        </h1>
        <div className="w-full h-full flex Tablet:flex-row SmartphonesSm:flex-col TabletSm:items-center Tablet:items-start justify-center gap-x-8">
          <div className="bg-[#fff] PC:w-[904px] TabletSm:w-[552px] h-full rounded-[34px] SmartphonesSm:px-5 TabletSm:px-12 TabletSm:py-[38px]">
            <div className="flex gap-x-[72px] PC:flex-row SmartphonesSm:flex-col">
              {/* Left side */}
              <div className="flex flex-col gap-y-[22px] TabletSm:w-[50%]">
                <div className="flex PC:flex-col SmartphonesSm:flex-col SmartphonesSm:gap-y-[22px] PC:gap-y-[22px] Smartphones:flex-row Smartphones:gap-x-10">
                  <InputField
                    formik={formik}
                    label="First name"
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                  />
                  <InputField
                    formik={formik}
                    label="Last name"
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                  />
                </div>
                <div className="flex PC:flex-col SmartphonesSm:flex-col SmartphonesSm:gap-y-[22px] PC:gap-y-[22px] Smartphones:flex-row Smartphones:gap-x-10">
                  <InputField
                    formik={formik}
                    label="Email address"
                    type="text"
                    placeholder="Enter your email adress"
                    name="email"
                  />
                  <div className="flex flex-col gap-x-8">
                    <Dropdown
                      formik={formik}
                      options={countries}
                      defaultOption="Select a country"
                      name="country"
                      label="Country"
                    />
                  </div>
                </div>
                <div className="flex TabletSm:justify-between gap-x-10 SmartphonesSm:flex-col Smartphones:flex-row gap-y-[22px]">
                  <InputField
                    formik={formik}
                    label="address"
                    type="text"
                    placeholder="address"
                    name="address"
                  />
                  <InputField
                    formik={formik}
                    label="city"
                    type="text"
                    placeholder="city"
                    name="city"
                  />
                </div>
                <div className="flex TabletSm:justify-between gap-x-10 SmartphonesSm:flex-col Smartphones:flex-row gap-y-[22px]">
                  <InputField
                    formik={formik}
                    label="State"
                    type="text"
                    placeholder="State"
                    name="state"
                  />
                  <InputField
                    formik={formik}
                    label="Zip / postal code"
                    type="text"
                    placeholder="Code"
                    name="zipCode"
                  />
                </div>
              </div>
              {/* Right side */}
              <div className="TabletSm:w-[50%] SmartphonesSm:mt-[22px] PC:mt-0">
                <InputField
                  formik={formik}
                  label="Card Number"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  name="cardNumber"
                />
                <div className="flex Smartphones:flex-row SmartphonesSm:flex-col gap-y-[22px] mt-[22px] mb-[22px]">
                  <div>
                    <Dropdown
                      formik={formik}
                      options={months}
                      defaultOption="Month"
                      name="month"
                      label="Expiration Month"
                    />
                  </div>
                  <div>
                    <Dropdown
                      formik={formik}
                      options={years}
                      defaultOption="Year"
                      name="year"
                      label="Expiration Year"
                    />
                  </div>
                </div>
                <div>
                  <InputField
                    formik={formik}
                    label="Security code"
                    type="text"
                    placeholder="CVV"
                    name="securityCode"
                  />
                </div>
                <div className="text-[#181818] text-[16px] SmartphonesSm:mt-[22px] PC:mt-[22px]">
                  Payment method
                </div>
                <div className="flex justify-between items-center mb-[22px] PC:w-full TabletSm:w-[488px] h-[72px] rounded-xl px-4 border-[1px] border-zinc-200">
                  <div className="flex items-center">
                    <BsDot size={35} />
                    <span className="text-[#181818] text-[14px]">
                      Credit card
                    </span>
                  </div>
                  <img
                    className="SmartphonesSm:w-[130px] Smartphones:w-[170px]"
                    src={Cards}
                    alt="Cards"
                  />
                </div>
                <div className="flex justify-between mt-4 items-center  PC:w-full TabletSm:w-[488px] h-[72px] rounded-xl px-4 border-[1px] border-zinc-200">
                  <p className="text-[#181818] text-[14px]">PayPal</p>
                  <img className="w-[170px]" src={Paypal} alt="Paypal" />
                </div>
              </div>
            </div>
            <div className="TabletSm:flex SmartphonesSm:hidden items-center gap-x-2 SmartphonesSm:mt-[22px] PC:mt-[22px]">
              <input type="checkbox" />
              <p className="text-[#898989] text-[14px]">
                I agree to the{" "}
                <span className="text-[#FBB03B] underline underline-offset-2 cursor-pointer">
                  terms and conditions
                </span>
              </p>
            </div>

            <div className="TabletSm:flex SmartphonesSm:hidden justify-end mt-8">
              <button
                type="submit"
                className="bg-[#FBB03B] Tablet:px-[50px] Tablet:h-[72px]  TabletSm:px-[30px] TabletSm:h-[52px] SmartphonesSm:px-[30px] SmartphonesSm:h-[50px] text-[#fff] text-[16px] rounded-xl"
              >
                Continue to checkout
              </button>
            </div>
          </div>
          <CartSummary />
          <p className="text-[12px] text-[#ABABAB] text-center mt-6 mb-4 SmartphonesSm:grid TabletSm:hidden">
            By clicking the button, you agree to the{" "}
            <span className="text-[#FBB03B]"> Terms and Conditions</span>
          </p>
          <div className="TabletSm:hidden SmartphonesSm:flex justify-center">
            <button
              type="submit"
              className="bg-[#FBB03B] Tablet:px-[50px] Tablet:h-[72px]  TabletSm:px-[30px] TabletSm:h-[52px] SmartphonesSm:px-[30px] SmartphonesSm:h-[50px] text-[#fff] text-[16px] rounded-xl"
            >
              Continue to checkout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Ordering;
