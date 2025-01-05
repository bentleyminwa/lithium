import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";
import Search from "../../../common/components/SearchComponent/Search";

const containerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Hero = () => {
  // const location = useLocation();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center pt-52 bg-hero-pattern h-[70vh] bg-cover bg-center bg-no-repeat text-gray-100"
    >
      <motion.div variants={textVariants} className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#eaeaea] mb-3 tracking-wide">
          The Lithium Gallery
        </h1>
        <p className="mb-10 text-sm text-gray-300">
          Wonder often. Wonder always
        </p>
      </motion.div>
      <Search />
    </motion.div>
  );
};

export default Hero;
