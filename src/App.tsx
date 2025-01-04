import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-[#121212] min-h-screen font-nunito text-[#eaeaea]">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
