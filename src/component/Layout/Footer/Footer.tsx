import { motion } from "motion/react";
import ViewMembershipSection from "@/page/Home/components/ViewMembershipSection";
import blueSkyIcon from "@/assets/images/logo-bluesky.svg";
import linkedInIcon from "@/assets/images/logo-linkedin.svg";
import "./Footer.scss";
import { childVariants, containerVariants, halfViewportTrigger } from "@/utils/motionVariants";

export default function Footer() {
    return (
        <motion.footer
            className="footer grid-bleed"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={halfViewportTrigger}
        >
            <motion.div
                className="footer__content"
                variants={containerVariants}
            >
                <motion.div
                    className="footer__main-content"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-white-100 heading-lg text-center"
                        variants={childVariants}
                    >
                        Ready to debug your reading list?
                    </motion.h2>

                    <ViewMembershipSection
                        arrowDirection="up"
                        color="white"
                        style={{justifySelf: "center"}}
                        variants={childVariants}
                    />
                </motion.div>

                <motion.div
                    className="footer__sub-content"
                    variants={containerVariants}
                >
                    <motion.p
                        className="text-white-100 text-xs text-center"
                        variants={childVariants}
                    >
                        © 2024 – Tech Book Club
                    </motion.p>

                    <motion.ul
                        className="footer__links"
                        variants={childVariants}
                    >
                        <li>
                            <a href="#">
                                <img className="footer__links-icon" src={blueSkyIcon} alt="" role="presentation"/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img className="footer__links-icon" src={linkedInIcon} alt="" role="presentation"/>
                            </a>
                        </li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.footer>
    );
}