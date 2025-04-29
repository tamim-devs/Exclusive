import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const OurService = () => {
  const service = [
    {
      id: 1,
      icon:  <TbTruckDelivery />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon:  <TfiHeadphoneAlt />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon:  <IoShieldCheckmark />,
      title: "MONEY BACK GUARANTEE ",
      description: "We reurn money within 30 days",
    },
  ];
  return (
    <section className="mb-36">
      <div className="container">
        <div className="flex justify-evenly items-center">

            {service?.map((item)=>(
                <div className="main_wrapper  flex flex-col gap-6 items-center justify-center" key={item.id}>
                <div className="icon">
                    <div className="w-20 h-20 bg-text-7d8 rounded-full flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-button-black flex items-center justify-center text-4xl text-primary-fff">
                        {item.icon}
                    </span>
                    </div>
                </div>
                <div className="text flex flex-col gap-2 items-center">
                    <div className="heading">
                    <h4 className="font-poppins text-button-black text-xl font-semibold leading-7 uppercase">
                        {item.title}
                    </h4>
                    </div>
                    <div className="font-poppins text-button-black text-sm font-normal leading-5">
                    <p>{item.description}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
