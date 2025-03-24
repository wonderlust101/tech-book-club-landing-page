import { motion } from "motion/react";
import StarRow from "@/component/StarRow";
import "./Testimonial.scss";
import { childVariants, containerVariants, halfViewportTrigger } from "@/utils/motionVariants";

export default function Testimonial() {
    return (
        <motion.section
            className="testimonial"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={halfViewportTrigger}
        >
            <StarRow numberOfStars={5} size={1.75} variants={childVariants}/>

            <motion.p
                className="heading-md text-black-900 semi-bold"
                variants={childVariants}
            >
                "This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"
            </motion.p>

            <motion.p
                className="text-md text-black-700"
                variants={childVariants}
            >
                Sarah Chen, Software Architect
            </motion.p>
        </motion.section>
    );
}