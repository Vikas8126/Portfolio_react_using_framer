import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const SideMenu = ({ setOpen }) => {
  const items = ["HomePage", "About", "Skills", "Portfolio", "Contact"];
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <motion.div className="sideMenu" variants={variants}>
      {items?.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SideMenu;
