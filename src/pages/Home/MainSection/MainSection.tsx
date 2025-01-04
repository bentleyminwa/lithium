import { useState } from "react";
import Dropdown from "../../../common/components/Dropdown/Dropdown";
import ImageList from "../../../common/components/ImageList/ImageList";
import VideoList from "../../../common/components/VideoList/VideoList";

const MainSection = () => {
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleOptionChange = (
    option: { label: string; value: string } | null
  ) => {
    setSelectedOption(option);
  };

  const dropdownOptions = [
    { label: "Photos", value: "photos" },
    { label: "Videos", value: "videos" },
  ];

  return (
    <div className="mt-20 px-10 md:px-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl capitalize font-semibold">
          free stock {selectedOption?.value === "videos" ? "videos" : "photos"}
        </h1>
        <Dropdown
          options={dropdownOptions}
          value={selectedOption}
          onChange={handleOptionChange}
        />
      </div>
      {selectedOption?.value === "videos" ? <VideoList /> : <ImageList />}
    </div>
  );
};

export default MainSection;
