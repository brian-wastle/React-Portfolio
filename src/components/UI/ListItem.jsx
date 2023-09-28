import { motion } from "framer-motion";

export default function Project({ children, ...props }) {
  return (
    <motion.li
      {...props}
    >
      {children}
    </motion.li>
  );
}
