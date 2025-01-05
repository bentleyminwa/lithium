import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const linkVariants = {
  hover: {
    scale: 1.1,
    color: "#ff5b0a",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const links = [
  { path: "/about", label: "About" },
  { path: "/search", label: "Explore" },
  { path: "/journal", label: "Journal" },
  { path: "/login", label: "Login" },
];

const NavLinks = () => {
  return (
    <nav className="w-full font-semibold text-base">
      <ul className="flex justify-between items-center gap-10">
        {links.map((link) => (
          <motion.li
            variants={linkVariants}
            whileHover="hover"
            key={link.path}
            className=""
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive ? "bg-gray-900 text-primary" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
