import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 px-10 md:px-20 absolute top-0 left-0 w-full z-10 bg-transparent">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
