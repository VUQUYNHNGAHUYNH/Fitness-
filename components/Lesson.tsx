import Image from "next/image";
import { BsArrowDownRight } from "react-icons/bs";
import image1 from "public/images/lessons/boxing.png";
import image2 from "public/images/lessons/battle-rope.png";
import image3 from "public/images/lessons/full-body.png";
import image4 from "public/images/lessons/yoga.png";
import image5 from "public/images/lessons/body-pump.png";

const classes = [
  {
    name: "Boxing",
    image: image1,
  },
  {
    name: "Battle rope",
    image: image2,
  },
  {
    name: "Full-body",
    image: image3,
  },
  {
    name: "Yoga",
    image: image4,
  },
  {
    name: "Body Pump",
    image: image5,
  },
];
const Lesson = () => {
  return (
    <div
      id="lessons"
      className="w-full h-screen mx-auto flex flex-col justify-center items-center"
    >
      <div className="relative flex flex-col gap-12 justify-center items-center w-4/5">
        <h1 className="text-orange-600 text-4xl md:text-5xl xl:text-6xl font-bold uppercase tracking-wider font-averia">
          Our Classes
        </h1>
        <div className="h-[420px] w-full overflow-y-hidden overflow-x-auto">
          <ul className="h-[2800px] whitespace-nowrap mx-4">
            {classes.map((item, index) => (
              <li key={index} className="relative inline-block mx-4">
                <div className="absolute -bottom-8 right-0 z-10 bg-gray-200 space-y-2 px-6 py-3">
                  <h1 className="text-start text-yellow-500 font-bold font-averia text-xl">
                    {item.name}
                  </h1>
                  <span className="flex justify-start cursor-pointer text-gray-700 hover:text-yellow-500 text-sm">
                    Check it out
                    <BsArrowDownRight size={15} />
                  </span>
                </div>
                <Image
                  src={item.image}
                  width={350}
                  height={330}
                  alt={item.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
