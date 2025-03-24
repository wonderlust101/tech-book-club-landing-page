import { HTMLMotionProps, motion } from "motion/react";
import Button from "@/component/Button";
import DownArrowIcon from "@/component/Icon/DownArrowIcon";
import avatarImage from "@/assets/images/image-avatars.webp";
import StarRow from "@/component/StarRow";
import "./ViewMembershipSection.scss";
import UpArrowIcon from "@/component/Icon/UpArrowIcon";

type ViewMembershipSectionProps = HTMLMotionProps<"div">&{
    arrowDirection: "up"|"down";
    color: "white"|"black";
}

export default function ViewMembershipSection({arrowDirection, color, ...props}: ViewMembershipSectionProps) {
    return (
        <motion.div className="view-membership-section" {...props}>
            <Button size="md" color={`${color === "black" ? "black" : "white"}-outline`} icon={arrowDirection === "down" ? <DownArrowIcon/> : <UpArrowIcon/>}>
                REVIEW MEMBERSHIP OPTIONS
            </Button>

            <div className="view-membership-section__avatar">
                <img className="view-membership-section__avatar-image" src={avatarImage} alt="A row of avatars of developers"/>

                <div className="view-membership-section__ratings">
                    <StarRow numberOfStars={5} size={1.5}/>

                    <p className={`text-xs ${color === "black" ? "text-black-700" : "text-white-100"}`}>
                        200+ developers joined already
                    </p>
                </div>
            </div>
        </motion.div>
    );
}