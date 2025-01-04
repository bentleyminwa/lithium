import { Route, Routes } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen font-nunito text-[#eaeaea]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
