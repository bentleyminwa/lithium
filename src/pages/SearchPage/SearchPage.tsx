import { motion } from "framer-motion";
import Search from "../../common/components/SearchComponent/Search";
import MainSection from "../Home/MainSection/MainSection";

const PageVariants = {
  hidden: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const SearchPage = () => {
  return (
    <motion.div
      variants={PageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pt-32 bg-search-pattern bg-cover bg-center bg-no-repeat h-[30vh] text-gray-100">
        <div className="w-1/2 mx-auto">
          <Search />
        </div>
      </div>
      <MainSection />
    </motion.div>
  );
};

export default SearchPage;
