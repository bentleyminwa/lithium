import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import StoreContext from "../../../context/Store";
import Loader from "../Loader/Loader";

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const VideoList = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("ImageList must be used within a StoreProvider");
  }

  const { isLoading, videos, fetchVideos } = context;

  useEffect(() => {
    fetchVideos(1, 50);
  }, [fetchVideos]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${
              index % 5 === 0
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <Loader />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
      {videos?.map((video, index) => (
        <div
          key={video.id}
          className={`relative overflow-hidden ${
            index % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
          }`}
        >
          <motion.video
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            src={video.videos.tiny.url}
            controls
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
