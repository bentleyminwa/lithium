// import { motion } from "framer-motion";
import Search from "../../../components/SearchComponent/Search";

// const heroVariants = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } },
// };

// const textVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { delay: 1.8, duration: 0.5, ease: "easeInOut" },
//   },
// };

const Hero = () => {
  return (
    <div className="flex flex-col items-center pt-20 bg-hero-pattern h-[50vh] bg-cover bg-center bg-no-repeat text-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center mb-3">
          The Lithium Gallery
        </h1>
        <p className="mb-10 text-sm text-gray-300">
          Wander often. Wander always
        </p>
      </div>
      <Search />
    </div>
  );
};

export default Hero;
