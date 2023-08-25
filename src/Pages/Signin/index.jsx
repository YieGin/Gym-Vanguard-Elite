import React, { useLayoutEffect, useState } from "react";
import { Image1 } from "../../Assets/Images";
import { BiLogoFacebook, BiLogoInstagram, BiLogoGoogle } from "react-icons/bi";
import "./style.css";
import SignUp from "./SignUp";
import { Button } from "./Button";
import { useFormik } from "formik";
import RenderInput from "./RenderInput";
import validationSchemaSignIn from "./validationSchemaSignIn";
const Signin = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isRegistration, setIsRegistration] = useState(true);

  const toggleRegistration = () => {
    setIsRegistration(!isRegistration);
  };

  const ActiveButtonStyle = "bg-black text-white";
  const InactiveButtonStyle = "bg-white text-[#D7D7D7]";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaSignIn,
    onSubmit: async (values) => {
      if (formik.isValid && formik.touched) {
        try {
          console.log(values);
        } catch (error) {
          console.error(error);
        }
      }
    },
  });

  return (
    <div className="flex w-full font-Roboto PC:h-[100vh] PC:mb-0 TabletSm:mb-5">
      <div className="flex flex-col items-center SmartphonesSm:w-[100%] Tablet:w-[50%] bg-[#FFFFFF] h-full border-t-[1px] border-zinc-200">
        <div className="flex border-[1px] px-1 rounded-xl border-zinc-200 SmartphonesSm:w-[280px] Smartphones:w-[384px] h-[44px] items-center justify-center mt-14">
          <div
            onClick={toggleRegistration}
            className={`cursor-pointer duration-100 SmartphonesSm:w-[140px] Smartphones:w-[190px] h-[36px] bg-[#181818] rounded-lg px-4 flex items-center justify-center ${
              isRegistration ? ActiveButtonStyle : InactiveButtonStyle
            }`}
          >
            <p className="font-Roboto font-semibold text-sm">Log In</p>
          </div>
          <div
            onClick={toggleRegistration}
            className={`cursor-pointer duration-100 SmartphonesSm:w-[140px] Smartphones:w-[190px] h-[36px] bg-[#181818] rounded-lg px-4 flex items-center justify-center ${
              isRegistration ? InactiveButtonStyle : ActiveButtonStyle
            }`}
          >
            <p className="font-Roboto font-semibold text-sm">Sign Up</p>
          </div>
        </div>
        {isRegistration && (
          <div className="flex flex-col items-center">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-center"
            >
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
              <Button
                Width="w-[300px] mt-8"
                bgColor="bg-[#ff4655]"
                buttonText="Continue"
              />
            </form>
            <p className="text-[#181818] font-bold text-sm mt-0 mb-5">or</p>
            <div className="SmartphonesSm:flex PC:hidden TabletSm:flex-row SmartphonesSm:flex-col">
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
        )}
        {!isRegistration && <SignUp isRegistration={isRegistration} />}
      </div>
      <div className="Tablet:flex SmartphonesSm:hidden w-[50%] bg-[#D7D7D7]">
        <img className="w-full h-full object-cover" src={Image1} alt="Login" />
      </div>
    </div>
  );
};

export default Signin;
