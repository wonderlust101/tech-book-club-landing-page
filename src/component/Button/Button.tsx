import { ButtonHTMLAttributes, JSX, ReactNode } from "react";
import './Button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>&{
    children: ReactNode;
    color: string;
    size: string;
    icon?: JSX.Element;
}

export default function Button({children, color, size, icon, ...props}: ButtonProps) {
    return (
        <button
            className={`button button--${color} button--${size}`}
            {...props}
        >
            {children}
            {icon}
        </button>
    );
}