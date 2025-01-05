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
      {isOpen && <MenuPanel />}
    </div>
  );
};

export default Menu;
