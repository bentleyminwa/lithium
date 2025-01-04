import { motion } from "framer-motion";
import Hero from "./Hero/Hero";
import MainSection from "./MainSection/MainSection";

const PageVariants = {
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <motion.div variants={PageVariants} exit="exit">
      <Hero />
      <MainSection />
    </motion.div>
  );
};

export default Home;
