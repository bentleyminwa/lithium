// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// const logoVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { delay:0.5, type: "spring", stiffness: 120 } },
// };

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src="./images/lithium.png" alt="" className="w-14" />
      </Link>
    </div>
  );
};

export default Logo;
