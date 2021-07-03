import { PAGE_VARIANTS } from "constants/config"
import { motion } from "framer-motion"
import { Props } from "./PageTransition.types"

export const PageTransition = ({ variants = PAGE_VARIANTS, children }: Props) => (
  <motion.div initial="exit" animate="enter" exit="exit" variants={variants}>
    {children}
  </motion.div>
)
