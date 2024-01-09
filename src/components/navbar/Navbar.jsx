import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Portfolio Website
        </motion.span>
        <div className="social">
          <motion.a
            href="#About"
            animate={{ x: -200, opacity: 1, transition: { duration: 1 } }}
          >
            {/* <img src="../../../public/facebook.png" alt="" /> */}
            About
          </motion.a>
          <motion.a
            href="#Portfolio"
            animate={{ x: -200, opacity: 1, transition: { duration: 1 } }}
          >
            {/* <img src="../../../public/facebook.png" alt="" /> */}
            Portfolio
          </motion.a>
          <motion.a
            href="#Contact"
            animate={{ x: -200, opacity: 1, transition: { duration: 1 } }}
          >
            {/* <img src="../../../public/facebook.png" alt="" /> */}
            Contact
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
