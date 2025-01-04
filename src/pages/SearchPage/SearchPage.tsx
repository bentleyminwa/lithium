import Search from "../../common/components/SearchComponent/Search";
import MainSection from "../Home/MainSection/MainSection";

const SearchPage = () => {
  return (
    <>
      <div className="pt-32 bg-search-pattern bg-cover bg-center bg-no-repeat h-[30vh] text-gray-100">
        <div className="w-1/2 mx-auto">
          <Search />
        </div>
      </div>
      <MainSection />
    </>
  );
};

export default SearchPage;
