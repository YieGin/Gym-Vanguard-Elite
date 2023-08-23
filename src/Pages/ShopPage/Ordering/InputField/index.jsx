import React, { useState } from "react";

const InputField = ({ formik, label, type, placeholder, name }) => {
  const [isFocused, setIsFocused] = useState(false);
  if (!formik) {
    return <div>Formik is not defined</div>;
  }
  const renderErrorMessage = (field) => {
    if (formik.touched[field] && formik.errors[field]) {
      return (
        <div className="text-red-400 text-[12px] font-semibold w-[100%] mt-[2px]">
          <p>{formik.errors[field]}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <p className="text-[#181818] text-base font-medium">{label}</p>
      <input
        className={`PC:w-full TabletSm:w-[220px] SmartphonesSm:w-full h-[40px] px-4 py-2 text-[#181818] text-[14px] border-[1px] outline-none rounded-[4px] hover:shadow-sm hover:shadow-[#f7bec4] ${
          isFocused ? "border-[#f7bec4]" : "border-zinc-300"
        }`}
        type={type}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={(event) => formik.setFieldValue(name, event.target.value)}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        name={name}
      />
      <div className="Smartphones:w-[150px] TabletSm:w-full PC:w-[150px]">
        {renderErrorMessage(name)}
      </div>
    </div>
  );
};

export default InputField;
