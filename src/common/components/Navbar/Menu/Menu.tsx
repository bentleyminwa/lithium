import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { MenuPanel } from "./MenuPanel";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

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
