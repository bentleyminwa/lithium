import { motion } from "framer-motion";

const PageVariants = {
  hidden: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Login = () => {
  return (
    <motion.div
      variants={PageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Login Page
    </motion.div>
  );
};

export default Login;
