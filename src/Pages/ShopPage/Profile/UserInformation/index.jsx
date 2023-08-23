import React, { useState } from "react";
import ProfileData from "../ProfileData";
import Slider from "../Slider";

const InputField = ({ label, value, onChange }) => (
  <div>
    <p>{label}</p>
    <input
      className="SmartphonesSm:w-[300px] TabletSm:w-[340px] PC:w-[384px] h-[40px] px-4 py-2 text-[#181818] text-[14px] border-[1px] border-zinc-300 rounded-xl"
      value={value}
      onChange={onChange}
    />
  </div>
);

const UserInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  return (
    <div className="SmartphonesSm:bg-[#fff] TabletSm:bg-[#F5F5F5] flex flex-col items-center font-Roboto pb-[72px]">
      <h1 className="text-[#ABABAB] text-center font-bold text-[24px] my-7">
        Profile
      </h1>
      <div className="flexSmartphonesSm:w-full TabletSm:pr-[24px] TabletSm:pl-[24px] Tablet:pr-[72px] Tablet:pl-[24px] PC:pr-[71px] PC:pl-[24px] PC:w-[1200px] PC:h-[650px] bg-white flex TabletSm:rounded-[34px]">
        <Slider />
        <div className="Flex Tablet:w-full PC:w-[991px] TabletSm:py-[32px] Tablet:py-[72px]">
          {ProfileData.map((item) => (
            <div key={item.id}>
              <div className="flex gap-x-4 items-center mb-8">
                <h1 className="text-[32px] font-bold">Hi,{item.FirstName}!</h1>
                <p className="text-red-400 text-[14px]">(Not User? Log out)</p>
              </div>
              <div className="flex flex-col SmartphonesSm:gap-y-2 TabletSm:gap-y-6">
                <div className="grid PC:grid-cols-2 gap-y-[22px] Tablet:grid-cols-1 w-full gap-x-20">
                  <InputField
                    label="First name"
                    value={item.FirstName}
                    onChange={handleFirstNameChange}
                    type="text"
                  />
                  <InputField
                    label="Last name"
                    value={item.LastName}
                    onChange={handleLastNameChange}
                    type="text"
                  />
                </div>
                <div className="grid PC:grid-cols-2 gap-y-[22px] Tablet:grid-cols-1 w-full gap-x-20">
                  <InputField
                    label="Email"
                    value={item.email}
                    onChange={handleEmailChange}
                    type="text"
                  />
                  <InputField
                    label="Phone number"
                    value={item.phone}
                    onChange={handlePhoneChange}
                    type="text"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
