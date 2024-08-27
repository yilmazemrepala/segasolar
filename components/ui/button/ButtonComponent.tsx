import Link from "next/link";
import style from "./styles.module.css";
import React from "react";

interface ButtonComponentProps {
	href: string;
	text: string;
	dataHover: string;
	className?: string; // Opsiyonel className prop'u
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
	href,
	text,
	dataHover,
	className,
}) => {
	return (
		<div className={`button ${className}`}>
			<Link href={href} className={style.compBtn} data-hover={dataHover}>
				<div className={style.compBtnTxt}>{text}</div>
			</Link>
		</div>
	);
};

export default ButtonComponent;
