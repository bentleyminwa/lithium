import ImageList from "../../../common/components/ImageList/ImageList";
import VideoList from "../../../common/components/VideoList/VideoList";
import { Image, Video } from "../../../common/types/types";

type MainSectionProps = {
  images: Image[];
  videos: Video[];
};

const MainSection = ({ images, videos }: MainSectionProps) => {
  return (
    <div className="mt-20 px-10 md:px-20">
      <h1 className="text-2xl text-[#ff5b0a] font-semibold mb-10">
        Free Stock Photos
      </h1>
      <ImageList images={images} />
      <VideoList videos={videos} />
    </div>
  );
};

export default MainSection;
