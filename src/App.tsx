import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import StoreContext from "./context/Store";
import Home from "./pages/Home/Home";

const App = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("MainSection must be used within a StoreProvider");
  }

  const { images, videos, isLoading, fetchImages, fetchVideos } = context;

  useEffect(() => {
    fetchImages(2, 200);
  }, [fetchImages]);

  useEffect(() => {
    fetchVideos(1, 20);
  }, [fetchVideos]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (images.length === 0) {
    return <h1>No images found</h1>;
  }

  if (videos.length === 0) {
    return <h1>No videos found</h1>;
  }

  return (
    <div className="bg-[#121212] min-h-screen font-nunito text-[#eaeaea]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home images={images} videos={videos} />} />
      </Routes>
    </div>
  );
};

export default App;
