import { useContext, useEffect } from "react";
import StoreContext from "../../../context/Store";

const VideoList = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("ImageList must be used within a StoreProvider");
  }

  const { videos, isLoading, fetchVideos } = context;

  useEffect(() => {
    fetchVideos(1, 20);
  }, [fetchVideos]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (videos.length === 0) {
    return <h1>No images found</h1>;
  }

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id} className="col-span-1 row-span-1">
          <video
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
