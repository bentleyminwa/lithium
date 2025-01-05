import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import NavLinks from "./NavLinks/NavLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 px-10 md:px-20 absolute top-0 left-0 w-full z-10 bg-transparent">
      <div>
        <Logo />
      </div>
      <div className="flex justify-between items-center gap-10">
        <div className="hidden sm:flex">
          <NavLinks />
        </div>
        <div className="sm:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
