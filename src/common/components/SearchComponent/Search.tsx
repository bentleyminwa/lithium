import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import StoreContext from "../../../context/Store";

const searchVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Search = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  // context
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("StoreProvider is missing");
  }

  const { searchText } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim() !== "") {
      searchText(text);
      setText(text);
      navigate(`/search?term=${text}`);
    }
    return;
  };

  return (
    <motion.form
      variants={searchVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="flex justify-center items-center"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-l-full h-10 w-full px-5 outline-none text-gray-600"
      />
      <button
        type="submit"
        className="border border-gray-300 rounded-r-full h-10 w-14 flex justify-center items-center group"
      >
        <GoSearch className="text-xl text-[#ff5b0a] font-bold group-hover:transform group-hover:scale-125 transition duration-150 ease-in-out" />
      </button>
    </motion.form>
  );
};

export default Search;
