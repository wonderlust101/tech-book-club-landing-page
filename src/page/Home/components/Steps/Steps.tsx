import { motion } from "motion/react";
import arrow from "@/assets/images/pattern-arrow.svg";
import "./Steps.scss";
import { childVariants, containerVariants, halfViewportTrigger, sectionVariants } from "@/utils/motionVariants";

const steps = [
    "Choose your membership tier",
    "Get your monthly book selection",
    "Join our discussion forums",
    "Attend exclusive meetups"
];

export default function Steps() {
    return (
        <motion.section
            className="steps"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={halfViewportTrigger}
        >
            <h2 className="heading-lg text-black-900 steps__header">Your tech reading journey</h2>

            <motion.ul
                className="steps__steps"
                variants={containerVariants}
            >
                {steps.map((item, index) => (
                    <motion.li
                        className="steps__step" key={index}
                        variants={childVariants}
                    >
                        <p className="steps__number text-sm semi-bold">{index + 1}</p>
                        <p className="text-sm semi-bold text-black-700">{item}</p>
                        {index !== steps.length - 1 && <img className="steps__arrow" src={arrow} alt="" role="presentation"/>}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    );
}