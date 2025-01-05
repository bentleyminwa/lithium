import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const linkVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
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
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/search", label: "Explore" },
];

const NavLinks = () => {
  return (
    <motion.nav
      variants={linkVariants}
      initial="hidden"
      animate="visible"
      className="w-full font-semibold text-base"
    >
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
    </motion.nav>
  );
};

export default NavLinks;
