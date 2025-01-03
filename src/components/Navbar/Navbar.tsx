import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 border shadow-lg sticky top-0 left-0 w-full">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
