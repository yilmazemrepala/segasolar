import Link from "next/link";
import React from "react";
import style from "./styles.module.css";

interface SlideButtonProps {
	href: string;
	buttonText: string;
	className?: string;
}

const SlideButton: React.FC<SlideButtonProps> = ({
	href,
	buttonText,
	className = "",
}) => {
	return (
		<div>
			<Link href={href} className={`${style.slideButton} ${className}`}>
				<span className={style.btnText}>{buttonText}</span>
			</Link>
		</div>
	);
};

export default SlideButton;
