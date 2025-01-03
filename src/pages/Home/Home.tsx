import { Image } from "../../common/types/types";
import Hero from "./Hero/Hero";
import MainSection from "./MainSection/MainSection";

const Home = ({ images }: { images: Image[] }) => {
  return (
    <div>
      <Hero />
      <MainSection images={images} />
    </div>
  );
};

export default Home;
