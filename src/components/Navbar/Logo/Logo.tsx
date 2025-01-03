import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const logoVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay:0.5, type: "spring", stiffness: 120 } },
};

const Logo = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={logoVariants}>
      <Link to="/">
        <img src="./images/logo.png" alt="" className="max-w-16" />
      </Link>
    </motion.div>
  );
};

export default Logo;
