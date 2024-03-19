import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <MenuItem text="Home" />
    <MenuItem href="/" text="Unidades" />
    <MenuItem href="/" text="Serviços" />
    <MenuItem href="/" text="Contatos" />
    <MenuItem href="/" text="Sobre nós" />
  </motion.ul>
);
