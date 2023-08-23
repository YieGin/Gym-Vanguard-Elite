import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

const FAQ_DATA = [
  {
    id: 1,
    description:
      "Once your purchase has been verified, an order confirmation will be sent to your email. This confirmation will contain an order number. Click here to proceed.",
    details: "How do I track my order?",
  },
  {
    id: 2,
    description:
      "If you need to change the delivery address, please contact us as soon as possible. Once the order has been shipped, we are unable to modify the address. Please reach out to our Customer Service team immediately by calling or emailing support@kevin.com.",
    details: "Can I cancel my order or make a change of address?",
  },
  {
    id: 3,
    description:
      "Shipping Policy: We offer free shipping for orders over $65 (after applying the coupon code). For orders below this amount, a shipping fee of $7 will be charged. Please note the following: Additional charges may apply for remote areas. Special products may have different shipping standards.",
    details: "How much is shipping?",
  },
  {
    id: 4,
    description:
      "Shipping and Delivery Information: When the purchased product is in stock, it will be shipped within 24-48 hours from Monday to Friday. If the purchase is made on the weekend, the product will be shipped on Monday. Shipping and Delivery Information: When the purchased product is in stock, it will be shipped within 24-48 hours from Monday to Friday. If the purchase is made on the weekend, the product will be shipped on Monday. In the event that a product suddenly goes out of stock or is a pre-sale item, we will make urgent arrangements to restock the product. However, please note that there may be a delay of at least one week. If you require the product urgently, please contact our customer service for more information regarding the delay. Please be aware that during holidays such as Christmas and Chinese New Year, our operations may be affected. There might be a slight delay of approximately 2-3 days in delivery. Additionally, our customer service responses may also experience delays. We kindly ask for your patience and understanding during these times.",
    details: "When will my order shipped?",
  },
  {
    id: 5,
    description: "EMAIL: support@kevin.com",
    details: "How can I contact you?",
  },
  {
    id: 6,
    description: "EMAIL: support@kevin.com",
    details: "What is your return policy?",
  },
  {
    id: 7,
    description:
      "Enjoy risk-free shopping with our generous return policy. You have up to 120 days from the date of your order to return unopened products for a refund, and we provide a 180-day warranty for any possible defects in materials and workmanship.",
    details: "How to apply for a toy evaluation？",
  },
  {
    id: 8,
    description:
      "To access the points system, click on Rewards in the LandingPage bar or follow this link: https://shopx.com/.rewards",
    details: "Where can I locate information about the points system?",
  },
  {
    id: 9,
    description:
      "Our points program rewards you for shopping, engaging with our website, and more. Earn points for orders ($20 spent = 100 points), signing up (500 points), celebrating your birthday (1000 points), and subscribing to our newsletter (500 points).",
    details: "What is the points program like?",
  },
  {
    id: 10,
    description:
      "Once you've accumulated enough points, you can redeem them for discounts on future purchases. Points levels: 500 points = $5.00 off coupon, 1000 points = $10.00 off coupon or Free Shipping, 1500 points = $15.00 off coupon, 2000 points = $20.00 off coupon or 20.00% off coupon. Enjoy earning and using your points! Contact us for any further questions.",
    details: "What can the points be exchanged for?",
  },
];

const Faq = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openItemId, setOpenItemId] = useState(null);

  const handleArrowClick = (itemId) => {
    setOpenItemId((prevOpenItemId) =>
      prevOpenItemId === itemId ? null : itemId
    );
  };

  return (
    <div className="h-[100%] bg-[#F0F0F0] flex items-center flex-col">
      <h1 className="text-[#ABABAB] text-[64px] font-Roboto font-semibold my-4">
        FAQ
      </h1>
      <div className="flex flex-col items-center gap-y-4 mb-[72px]">
        {FAQ_DATA.map((item) => (
          <div key={item.id}>
            <div
              onClick={() => handleArrowClick(item.id)}
              className="bg-white cursor-pointer Smartphones:gap-x-2 TabletSm:gap-x-6 SmartphonesSm:w-[95vw] Smartphones:w-[384px] TabletSm:w-[592px] Tablet:w-[864px] PC:w-[1216px] z-10 Smartphones:h-[55px] SmartphonesSm:h-[45px] TabletSm:h-[72px] rounded-2xl flex items-center SmartphonesSm:px-2 TabletSm:px-8"
            >
              <motion.div
                className={`arrow-icon ${openItemId === item.id ? "open" : ""}`}
                initial={{ rotate: 0 }}
                animate={{ rotate: openItemId === item.id ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <MdKeyboardArrowRight
                  size={24}
                  color="#ABABAB"
                  className="cursor-pointer"
                />
              </motion.div>
              <p className="select-none font-bold SmartphonesSm:text-[12px] Smartphones:text-[14px] z-10 TabletSm:text-base text-[#181818]">
                {item.details}
              </p>
            </div>
            {openItemId === item.id && (
              <motion.div
                className="popup"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <div className="bg-white gap-x-6 SmartphonesSm:w-[95vw] Smartphones:w-[384px] TabletSm:w-[592px] Tablet:w-[864px] PC:w-[1216px] relative rounded-b-2xl SmartphonesSm:bottom-4 Smartphones:bottom-3 TabletSm:bottom-5 h-full py-5 flex items-center SmartphonesSm:px-2 TabletSm:px-8 transform">
                  <p className="font-Roboto leading-6 text-sm text-[#ABABAB]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
