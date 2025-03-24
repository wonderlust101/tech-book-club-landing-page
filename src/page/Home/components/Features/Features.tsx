import { motion } from "motion/react";
import Picture from "@/component/Picture";
import checkmarkIcon from "/src/assets/images/icon-check.svg";
import techLogos from "/src/assets/images/logos-tech.svg";
import "./Features.scss";
import { sectionVariants, containerVariants, childVariants, halfViewportTrigger } from "@/utils/motionVariants";

const featuresList = [
    "Monthly curated tech reads selected by industry experts",
    "Virtual and in-person meetups for deep-dive discussions",
    "Early access to new tech book releases",
    "Author Q&A sessions with tech thought leaders"
];

export default function Features() {
    return (
        <>
            <motion.section
                className="features"
                variants={sectionVariants}
                initial="initial"
                whileInView="animate"
                viewport={halfViewportTrigger}
            >
                <motion.div
                    className="features__text"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="heading-lg text-black-900"
                        variants={childVariants}
                    >
                        Read together, grow together
                    </motion.h2>

                    <motion.ul
                        className="features__list"
                        variants={containerVariants}
                    >
                        {featuresList.map((item, index) => (
                            <motion.li
                                className="features__list-item"
                                key={index}
                                variants={childVariants}
                            >
                                <img src={checkmarkIcon} alt="" role="presentation"/>
                                <p className="text-md text-black-700">{item}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                <Picture baseName="image-read-together"/>
            </motion.section>

            <motion.section
                className="features"
                variants={sectionVariants}
                initial="initial"
                whileInView="animate"
                viewport={halfViewportTrigger}
            >
                <motion.div
                    className="features__text"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="heading-lg text-black-900"
                        variants={childVariants}
                    >
                        Not your average book <span className="features__club">club</span>
                    </motion.h2>

                    <motion.p
                        className="text-md text-black-700"
                        variants={childVariants}
                    >
                        Connect with a community that speaks your language - from <span className="semi-bold">Python</span> to <span
                        className="semi-bold">TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications.
                    </motion.p>
                </motion.div>

                <Picture baseName="image-not-average" className="features__book-club-image">
                    <img className="features__tech-logos" src={techLogos} alt="" role="presentation"/>
                </Picture>
            </motion.section>
        </>
    );
}