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

  const { images, isLoading, fetchData } = context;

  useEffect(() => {
    fetchData(2, 20);
  }, [fetchData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (images.length === 0) {
    return <h1>No images found</h1>;
  }

  return (
    <div className="bg-gray-100 min-h-screen font-nunito">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
      </Routes>
    </div>
  );
};

export default App;
