import { motion } from "framer-motion";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 2, duration: 1, type: "spring", stiffness: 80 },
      }}
      className="flex justify-center items-center"
    >
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-l-full h-10 w-full px-5 outline-none text-gray-600"
      />
      <button className="border border-gray-300 rounded-r-full h-10 w-14 flex justify-center items-center group">
        <GoSearch className="text-xl font-bold group-hover:transform group-hover:scale-125 transition duration-150 ease-in-out" />
      </button>
    </motion.div>
  );
};

export default Search;
