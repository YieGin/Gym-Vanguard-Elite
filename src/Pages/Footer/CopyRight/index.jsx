import React from "react";

const CopyRight = () => {
  return (
    <div className="border-t-[0.5px] mt-8 border-zinc-700">
      <div className="TabletSm:px-8 Tablet:px-[112px] PC:px-[360px]">
        <div className="flex SmartphonesSm:flex-wrap SmartphonesSm:gap-y-6 TabletSm:flex-nowrap gap-x-8 mt-5">
          <p className="font-Roboto w-full text-sm text-[#D7D7D7]">
            Copyright © 2022 - 2023 by Yie
          </p>
          <ul className="flex flex-wrap SmartphonesSm:gap-y-1 TabletSm:gap-y-4 gap-x-4 w-full font-Roboto text-sm text-[#D7D7D7]">
            <li className="underline underline-offset-2">Privacy Policy</li>
            <li className="underline underline-offset-2">T&C</li>
            <li className="underline underline-offset-2">EULA</li>
            <li className="underline underline-offset-2">Cookie Policy</li>
            <li className="underline underline-offset-2">Security</li>
            <li className="underline underline-offset-2">
              Accessibility Statement
            </li>
            <li className="underline underline-offset-2">2257</li>
          </ul>
        </div>
        <p className="font-Roboto text-sm text-[#D7D7D7] my-4">
          Age Disclaimer
        </p>
        <p className="font-Roboto text-[#D7D7D7] text-sm mt-2">
          At Gym Vanguard Elite, we are dedicated to providing a safe and
          responsible online environment for adults and young kids. We take our
          responsibility seriously and comply with all relevant regulations and
          guidelines. All models featured on our website are 15 years or older.
          By accessing and using our site, you confirm that you are at least 15
          years old and understand and accept the content on our site, If you
          experience any Issues with our site, email our team at
          support@service.lovense.com.
        </p>
        <p className="font-Roboto text-[#D7D7D7] text-sm mt-4">
          For information on the Custadian of Records required, plesse refer to
          our U,S.C. 53345 Compliance Notice
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
