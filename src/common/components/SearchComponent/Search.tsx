import { useContext, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import StoreContext from "../../../context/Store";

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
    navigate(`/search?term=${text}`);
    searchText(text);
    setText(text);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center">
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
    </form>
  );
};

export default Search;
