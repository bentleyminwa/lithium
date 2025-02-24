import { motion } from "framer-motion";
import { FaWpexplorer } from "react-icons/fa6";
import { HiOutlineHome, HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

interface MenuPanelProps {
  onToggle: () => void;
}

const panelVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const links = [
  {
    path: "/",
    label: "Home",
    icon: <HiOutlineHome className=" text-2xl text-gray-400" />,
  },
  {
    path: "/about",
    label: "About",
    icon: <HiOutlineInformationCircle className=" text-2xl text-gray-400" />,
  },
  {
    path: "/search",
    label: "Explore",
    icon: <FaWpexplorer className=" text-2xl text-gray-400" />,
  },
];

export const MenuPanel = ({ onToggle }: MenuPanelProps) => {
  return (
    <motion.div
      variants={panelVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="absolute top-full right-0 text-white bg-[#121212] p-4 rounded shadow-lg w-full"
    >
      <ul className="w-full py-5 px-5 flex flex-col gap-7 text-lg font-semibold">
        {links.map((link) => (
          <li key={link.label} className="" onClick={onToggle}>
            <Link to={link.path} className="flex items-center gap-2">
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
