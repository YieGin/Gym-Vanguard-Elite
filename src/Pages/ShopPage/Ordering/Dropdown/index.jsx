import { MdKeyboardArrowDown } from "react-icons/md";
import React from "react";

const Dropdown = ({ formik, options, defaultOption, name, label }) => {
  const renderErrorMessage = (field) => {
    if (formik.touched[field] && formik.errors[field]) {
      return (
        <div className="text-red-400 text-[13px] font-semibold w-[100%] mt-[2px]">
          <p>{formik.errors[field]}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative w-full">
      <p className="text-[#181818] text-base font-medium">{label}</p>
      <div className="flex">
        <select
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="PC:w-[185px] pr-10 TabletSm:w-[220px] SmartphonesSm:w-full Smartphones:w-full h-[40px] px-4 py-2 text-[#181818] text-[14px] border-[1px] outline-none rounded-[4px] hover:shadow-sm hover:shadow-[#f7bec4] appearance-none"
        >
          <option className="text-[#ABABAB]">{defaultOption}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="arrow relative right-10 flex items-center px-2 pointer-events-none">
          <MdKeyboardArrowDown size={20} />
        </div>
      </div>
      <div className="Smartphones:w-[200px] TabletSm:w-full PC:w-[150px]">
        {renderErrorMessage(name)}
      </div>
    </div>
  );
};

export default Dropdown;
