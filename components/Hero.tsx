import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center h-screen w-full bg-fixed bg-center bg-cover landing-img"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gray-900/70 z-10 w-full" />
      {/* text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="max-w-[85%] z-10 space-y-8 lg:space-y-12 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold uppercase tracking-wider">
          Reach Fitness Goals <br />
          <span className=" text-orange-500 font-extrabold font-averia">
            at FITNESS
          </span>
        </h1>
        <p className="max-w-[1000px] font-normal text-base lg:text-xl 2xl:text-2xl tracking-wide">
          We offers a variety of resources and community support to help
          individuals of all fitness levels succeed in their fitness journey.
          Whether you&apos;re a beginner or an experienced fitness enthusiast,
          we&apos;re here to support and inspire you on your fitness journey.
        </p>
        <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-lg font-semibold px-7 py-3 tracking-wider hover:scale-105 transition duration-300">
          JOIN NOW
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
