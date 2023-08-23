import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const RenderInput = ({ formik, label, type, placeholder, name }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  if (!formik) {
    return <div>Formik is not defined</div>;
  }

  const renderErrorMessage = (field) => {
    if (formik.touched[field] && formik.errors[field]) {
      return (
        <div className="text-red-400 text-[13px] font-semibold w-[94%]">
          <p>{formik.errors[field]}</p>
        </div>
      );
    }
    return null;
  };

  const handleVisibilityClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="mt-[22px]">
      <p className="text-[#181818] text-base font-medium mb-1">{label}</p>
      <div className="relative">
        <input
          className={`border-[1px] rounded-[4px] outline-none SmartphonesSm:w-[300px] SmartphonesSm:h-[40px] Smartphones:w-[384px] Smartphones:h-[40px] px-4 py-2 text-[#181818] text-sm hover:shadow-sm hover:shadow-[#f7bec4] ${
            isFocused ? "border-[#f7bec4]" : "border-zinc-300"
          }`}
          type={isVisible ? "text" : type}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={(event) => formik.setFieldValue(name, event.target.value)}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          name={name}
        />
        {name === "password" && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={handleVisibilityClick}
          >
            {isVisible ? <BiSolidShow /> : <BiSolidHide />}
          </div>
        )}
      </div>
      {renderErrorMessage(name)}
    </div>
  );
};

export default RenderInput;
