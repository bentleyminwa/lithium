import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const logoVariants = {
  hidden: { opacity: 0, rotate: -180 },
  visible: { opacity: 1, rotate: 0, transition: { delay: 0.5, duration: 1 } },
};

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <motion.img
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          src="./images/lithium.png"
          alt=""
          className="w-14"
        />
      </Link>
    </div>
  );
};

export default Logo;
