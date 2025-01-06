import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./common/components/Footer/Footer";
import Navbar from "./common/components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-[#121212] min-h-screen font-nunito text-[#eaeaea] overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
