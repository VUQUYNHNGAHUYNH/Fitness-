import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiTwotoneFire } from "react-icons/ai";
import { motion } from "framer-motion";
const pricing = [
  {
    name: "Basic",
    price: "20",
    list: [
      { name: "unlimited gym access" },
      { name: "1 training programs" },
      { name: "free fitness consultation" },
    ],
  },
  {
    name: "Premium",
    price: "39",
    list: [
      { name: "unlimited gym access" },
      { name: "5 training programs" },
      { name: "free fitness consultation" },
      { name: "personal trainer" },
    ],
  },
  {
    name: "Elite",
    price: "49",
    list: [
      { name: "unlimited gym access" },
      { name: "all training programs" },
      { name: "free fitness consultation" },
      { name: "personal trainer" },
      { name: "50% off drinks" },
    ],
  },
];

export const Pricing = () => {
  const [index, setIndex] = useState(0);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      id="pricing"
      className="w-full h-full mx-auto flex flex-col justify-center items-center mt-32 py-24"
    >
      <div className="mb-12 flex flex-col gap-8 w-5/6 justify-center items-center">
        <h1 className=" text-orange-600 text-4xl md:text-5xl xl:text-6xl font-bold uppercase tracking-wider font-averia">
          Pricing Plan
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-10">
          {/*  card */}
          {pricing.map((plan, currentIndex) => (
            <div
              onClick={() => setIndex(currentIndex)}
              key={currentIndex}
              className={` ${
                currentIndex === index
                  ? " bg-gray-200 scale-105 text-orange-700"
                  : "text-gray-700 bg-gray-300"
              }  2xl:min-w-[390px] 2xl:text-lg flex flex-col justify-center items-center p-8 gap-10 mx-auto text-center cursor-pointer transition ease-in-out duration-300`}
            >
              <span className="px-3 py-1 bg-gray-700 text-white">
                {plan.name}
              </span>
              <div className="flex flex-col ">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="flex flex-col gap-y-4 mb-8">
                {plan.list.map((item, idx) => {
                  return (
                    <li className="flex items-center gap-x-[10px]" key={idx}>
                      <div>
                        <BsCheckCircleFill className="text-lg" />
                      </div>
                      <div>{item.name}</div>
                    </li>
                  );
                })}
              </ul>
              <button
                className={`${
                  currentIndex === index
                    ? " bg-gradient-to-r from-rose-500 to-orange-500 text-slate-100"
                    : "border border-gray-900"
                } text-base font-bold px-8 py-3 transition duration-500 hover:scale-105 shadow-xl shadow-gray-500`}
              >
                JOIN NOW
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Continuous Marquee Animation. */}
      <div className="flex overflow-x-hidden w-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="animate-marquee flex py-3 justify-center items-center whitespace-nowrap text-orange-500"
          >
            <span className="text-2xl mx-4 font-bold tracking-widest">
              Become A Member!
            </span>
            <AiTwotoneFire size={40} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
