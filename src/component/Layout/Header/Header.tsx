import { motion } from "motion/react";
import logo from "@/assets/images/logo.svg";
import "./Header.scss";
import { headerVariants } from "@/utils/motionVariants";

export default function Header() {
    return (
        <motion.header
            className="header grid-bleed"
            variants={headerVariants}
            initial="initial"
            animate="animate"
        >
            <div className="header__content">
                <img className="header__logo" src={logo} alt="Tech Book Club Logo"/>
            </div>
        </motion.header>
    );
}