import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuPanel } from "./MenuPanel";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  // close the hamburger menu when the route changes
  useEffect(() => {
    setOpen(false);
    onscroll = () => {
      setOpen(false);
    };
  }, [location]);

  function toggleMenu() {
    setOpen(!isOpen);
  }

  return (
    <div>
      <div className="text-white">
        <Hamburger size={28} toggled={isOpen} toggle={toggleMenu} />
      </div>
      <AnimatePresence mode="wait">
        {isOpen && <MenuPanel onToggle={toggleMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
