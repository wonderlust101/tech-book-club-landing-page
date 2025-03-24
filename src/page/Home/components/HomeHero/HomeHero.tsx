import { motion } from "motion/react";
import ViewMembershipSection from "@/page/Home/components/ViewMembershipSection";
import Picture from "@/component/Picture";
import "./HomeHero.scss";
import { childVariants, containerVariants, halfViewportTrigger, stationarySectionVariants } from "@/utils/motionVariants";

export default function HomeHero() {
    return (
        <motion.section
            className="home-hero grid-bleed"
            variants={stationarySectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={halfViewportTrigger}
        >
            <motion.div
                className="home-hero__content"
                variants={containerVariants}
            >
                <motion.div
                    className="home-hero__main-content"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="heading-xl text-gradient"
                        variants={childVariants}
                    >
                        Join the ultimate tech book club
                    </motion.h1>

                    <motion.p
                        className="text-md text-black-700"
                        variants={childVariants}
                    >
                        Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level
                        up your skills one chapter at a time.
                    </motion.p>

                    <motion.div variants={childVariants}>
                        <ViewMembershipSection arrowDirection="down" color="black"/>
                    </motion.div>
                </motion.div>

                <Picture baseName="image-hero" variants={childVariants}/>
            </motion.div>
        </motion.section>
    );
}