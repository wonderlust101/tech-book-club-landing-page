import { HTMLMotionProps, motion } from "motion/react";
import { ReactNode } from "react";
import "./Picture.scss";

type PictureProps = HTMLMotionProps<"picture">&{
    children?: ReactNode;
    baseName: string;
};

export default function Picture({children, baseName, ...props}: PictureProps) {
    return (
        <div className="picture">
            {children}

            <motion.picture {...props}>
                <source media="(min-width: 48rem)" srcSet={`./images/${baseName}-desktop.webp`}/>
                <source media="(min-width: 36rem)" srcSet={`./images/${baseName}-tablet.webp`}/>
                <img src={`./images/${baseName}-mobile.webp`} alt=""/>
            </motion.picture>
        </div>
    );
}