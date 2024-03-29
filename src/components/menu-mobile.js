import React from 'react';
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation.js";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at right -30px)`,
        transition: {
            type: "tween",
            duration: 0.3
        }
    }),
    closed: {
        clipPath: "circle(30px at right -30px)",
        transition: {
            type: "tween",
            duration: 0.3
        }
    }
};

const MenuMobile = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = React.useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className='absolute w-[300px] top-0 right-0 bottom-0 z-50 block sm:hidden'
        >
            <motion.div className="background-menu-mobile" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};

export default MenuMobile;