import { Route, Routes } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-nunito">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
