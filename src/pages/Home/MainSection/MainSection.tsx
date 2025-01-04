import { useState } from "react";
import ImageList from "../../../common/components/ImageList/ImageList";
import VideoList from "../../../common/components/VideoList/VideoList";

const MainSection = () => {
  const [filter, setFilter] = useState("photos");

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="mt-20 px-10 md:px-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl capitalize font-semibold">
          free stock {filter}
        </h1>
        <div className="">
          <select
            id="filter"
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="text-[#ff5b0a] text-lg font-bold px-2 py-1 border border-gray-600 bg-gray-600 rounded-full cursor-pointer outline-none hover:border-[#ff5b0a]"
          >
            <option value="photos" className="text-green-500 bg-none">
              Photos
            </option>
            <option value="videos">Videos</option>
          </select>
        </div>
      </div>
      {filter === "photos" && <ImageList />}
      {filter === "videos" && <VideoList />}
    </div>
  );
};

export default MainSection;
