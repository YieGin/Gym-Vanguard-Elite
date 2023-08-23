import React from "react";
import { useFormik } from "formik";
import { BiLogoFacebook, BiLogoInstagram, BiLogoGoogle } from "react-icons/bi";
import "../style.css";
import { Button } from "../Button";
import RenderInput from "../RenderInput";
import validationSchema from "../validationSchema";

const SignUp = ({ isRegistration }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
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
  return (
    <div
      className={`flex w-full font-Roboto ${
        isRegistration ? "hidden" : "flex items-center justify-center"
      }`}
    >
      <div className="flex flex-col Smartphones:items-start SmartphonesSm:items-center">
        <form onSubmit={formik.handleSubmit}>
          <RenderInput
            formik={formik}
            label="Email Address"
            type="text"
            placeholder="Enter email or phone number"
            name="email"
          />
          <RenderInput
            formik={formik}
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
          />
          <RenderInput
            formik={formik}
            label="First name"
            type="text"
            placeholder="Enter your first name"
            name="firstName"
          />
          <RenderInput
            formik={formik}
            label="Last name"
            type="text"
            placeholder="Enter your last name"
            name="lastName"
          />
          <div>
            <h1 className="SmartphonesSm:w-[300px] Smartphones:w-[380px] text-[14px] leading-[22px] text-[#181818] font-Roboto font-normal mt-5">
              Want to know more about how and why Gymshark uses your personal
              information? Read our{" "}
              <span className="font-bold font-Roboto underline underline-offset-2 cursor-pointer">
                Privacy Notice.
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center mx-auto">
            <Button
              Width="w-[300px] mt-8"
              bgColor="bg-[#ff4655]"
              buttonText="Continue"
            />
          </div>
        </form>
        <p className="text-[#181818] font-bold text-sm mt-0 mb-5 mx-auto">or</p>
        <div className="SmartphonesSm:flex PC:hidden TabletSm:flex-row SmartphonesSm:flex-col items-center mx-auto">
          <Button
            Width="SmartphonesSm:w-[300px] TabletSm:w-[130px] text-[11px]"
            bgColor="bg-[#0f1923]"
            buttonText="Facebook"
          />
          <Button
            Width="SmartphonesSm:w-[300px] TabletSm:w-[130px] text-[11px]"
            bgColor="bg-[#0f1923]"
            buttonText="Instagram"
          />
          <Button
            Width="SmartphonesSm:w-[300px] TabletSm:w-[130px] text-[11px]"
            bgColor="bg-[#0f1923]"
            buttonText="Google"
          />
        </div>
        <div className="SmartphonesSm:hidden PC:flex flex-col gap-x-5">
          <Button
            Width="w-[130px]"
            bgColor="bg-[#0f1923]"
            icon={<BiLogoFacebook className="z-10" size={24} />}
            buttonText="Facebook"
          />
          <Button
            Width="w-[130px]"
            bgColor="bg-[#0f1923]"
            icon={<BiLogoInstagram className="z-10" size={24} />}
            buttonText="Instagram"
          />
          <Button
            Width="w-[130px]"
            bgColor="bg-[#0f1923]"
            icon={<BiLogoGoogle className="z-10" size={24} />}
            buttonText="Google"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
