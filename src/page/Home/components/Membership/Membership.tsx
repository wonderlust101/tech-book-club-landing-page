import { motion } from "motion/react";
import checkmarkIcon from "@/assets/images/icon-check.svg";
import Button from "@/component/Button";
import "./Membership.scss";
import { childVariants, containerVariants, halfViewportTrigger, sectionVariants } from "@/utils/motionVariants";

type MembershipOption = {
    tier: string;
    cost: number|null;
    features: String[];
}

type MembershipCardProps = {
    option: MembershipOption;
}

const membershipOptions: MembershipOption[] = [
    {
        tier    : "Starter",
        cost    : 19,
        features: [
            "1 book/month",
            "Online forums"
        ]
    },
    {
        tier    : "Pro",
        cost    : 29,
        features: [
            "2 book/month",
            "Virtual meetups"
        ]
    },
    {
        tier    : "Enterprise",
        cost    : null,
        features: [
            "Team access",
            "Private sessions"
        ]
    }
];

export default function Membership() {
    return (
        <motion.section
            className="membership"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={halfViewportTrigger}
        >
            <h2 className="heading-lg text-black-900">Membership option</h2>

            <motion.ul
                className="membership__cards"
                variants={containerVariants}
            >
                {membershipOptions.map((option: MembershipOption) => (
                    <MembershipCard key={option.tier} option={option}/>
                ))}
            </motion.ul>
        </motion.section>
    );
}

function MembershipCard({option}: MembershipCardProps) {
    return (
        <motion.li
            className="membership__card"
            variants={childVariants}
        >
            <div className="membership__card-main-content">
                <h3 className="heading-sm text-black-900">{option.tier}</h3>

                {option.cost ? (
                    <p className="text-black-700 text-sm membership__price">
                        <span className="text-black-900 heading-md semi-bold" style={{fontSize: "2.125rem"}}>${option.cost}</span> /month
                    </p>
                ) : (
                    <p className="text-black-900 heading-md semi-bold">Custom</p>
                )}

                <hr className="membership__divider"/>

                <ul className="membership__features">
                    {option.features.map((feature: String) => (
                        <li className="membership__feature">
                            <img className="membership__checkmark" src={checkmarkIcon} alt="" role="presentation"/>
                            <p className="text-md text-black-700">{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <Button size="md" color="black-outline">
                {option.cost ? "Subscribe Now" : "Talk to Us"}
            </Button>
        </motion.li>
    );
}