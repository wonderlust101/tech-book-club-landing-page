import { motion, HTMLMotionProps } from "motion/react";
import ratingStarImage from "@/assets/images/icon-star.svg";
import "./StarRow.scss";

type StarRowProps = HTMLMotionProps<"div">&{
    numberOfStars: number;
    size: number;
}

export default function StarRow({numberOfStars, size = 1.5, ...props}: StarRowProps) {
    return (
        <motion.div className="star-row" {...props}>
            {Array.from({length: numberOfStars}).map((_, index) => (
                <img
                    key={index}
                    src={ratingStarImage}
                    alt=""
                    role="presentation"
                    style={{height: `${size}rem`, width: `${size}rem`}}
                />
            ))}
        </motion.div>
    );
}