import Image from "next/image";
import { motion } from "framer-motion";
import Avatar1Img from "public/images/testimonials/avatar-1.png";
import Avatar2Img from "public/images/testimonials/avatar-2.png";
import Avatar3Img from "public/images/testimonials/avatar-3.png";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const people = [
  {
    avatar: Avatar1Img,
    name: "Sarah Johnson",
    occupation: "Personal Trainer",
    message:
      "“I have been using this fitness program for the past year and it has transformed my body and my life. The workouts are challenging, but the trainers are so supportive and motivating. I've never felt better!”",
  },
  {
    avatar: Avatar2Img,
    name: "Jake Williams",
    occupation: "Fitness Enthusiast",
    message:
      "“I was skeptical at first, but after trying this program, I can honestly say it's the best fitness program out there. The workouts are intense, but the results speak for themselves. I've lost 20 pounds and gained so much strength and confidence.”",
  },
  {
    avatar: Avatar3Img,
    name: "Emily Lee",
    occupation: "Yoga Instructor",
    message:
      "“As a yoga instructor, I was looking for a program that would complement my practice and help me build strength. This program has exceeded my expectations. The combination of strength training and yoga has helped me achieve my fitness goals and feel more balanced overall.”",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPerson = people[currentIndex];

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? people.length - 1 : currentIndex - 1);
  };
  const handleNextClick = () => {
    setCurrentIndex(currentIndex === people.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      id="testimonials"
      className=" w-full h-full mx-auto justify-center items-center mt-32 py-24"
    >
      <div className="w-5/6 flex flex-col gap-10 mx-auto justify-center items-center">
        <h1 className="text-orange-600 text-3xl md:text-4xl xl:text-5xl font-bold uppercase tracking-wider font-averia">
          Testimonials
        </h1>
        <div className="flex flex-col justify-center items-center transition ease-in-out duration-500">
          <Image
            src={currentPerson.avatar}
            width={100}
            height={100}
            alt={currentPerson.name}
          />
          {/* description */}
          <div className="text-xl 2xl:text-2xl font-semibold">
            {currentPerson.name}
          </div>
          <div className="text-base text-gray-500 mb-8 2xl:mb-12">
            {currentPerson.occupation}
          </div>
          <div className="text-slate-300 text-xl 2xl:text-2xl tracking-wider lg:max-w-[700px] text-left mb-8">
            {currentPerson.message}
          </div>
          {/* Arrow left and right */}
          <div
            onClick={handlePrevClick}
            className=" translate-y-4 -translate-x-6 cursor-pointer text-gray-300 hover:text-orange-400"
          >
            <AiOutlineArrowLeft size={25} />
          </div>
          <div
            onClick={handleNextClick}
            className="-translate-y-2 translate-x-6 text-gray-300 hover:text-orange-400 cursor-pointer"
          >
            <AiOutlineArrowRight size={25} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
