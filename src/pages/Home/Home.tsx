import { Image, Video } from "../../common/types/types";
import Hero from "./Hero/Hero";
import MainSection from "./MainSection/MainSection";

type HomeProps = {
  images: Image[];
  videos: Video[];
};

const Home = ({ images, videos }: HomeProps) => {
  return (
    <div>
      <Hero />
      <MainSection images={images} videos={videos} />
    </div>
  );
};

export default Home;
