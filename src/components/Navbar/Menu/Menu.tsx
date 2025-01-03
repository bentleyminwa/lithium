import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { delay:0.5, type: "spring", stiffness: 120 } },
};

const Menu = () => {
  return <motion.div variants={logoVariants} initial="hidden" animate="visible">
    <Hamburger />
  </motion.div>;
};

export default Menu;
