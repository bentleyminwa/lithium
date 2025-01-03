import { Video } from "../../types/types";

type VideoProps = {
  videos: Video[];
};

const VideoList = ({ videos }: VideoProps) => {
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
