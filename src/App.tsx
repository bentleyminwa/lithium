import { Route, Routes } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen font-nunito text-[#eaeaea]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
};

export default App;
