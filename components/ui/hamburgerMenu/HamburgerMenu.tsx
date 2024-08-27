import React, { useState } from "react";
import styles from "./styles.module.css";
import useScroll from "@/hooks/useScroll";

interface HamburgerMenuProps {
	onClick: () => void;
	className?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
	onClick,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const { isVisible, isAtTop } = useScroll();

	const handleToggle = () => {
		setIsOpen((prev) => !prev); // isOpen değerini tersine çevir
		onClick(); // dışarıdan gelen onClick fonksiyonunu çağır
	};

	const getSpanClassName = () => {
		if (isAtTop && isOpen) {
			return styles.spanUnpinned;
		} else if (isAtTop && !isOpen) {
			return styles.spanPinned;
		}
		return styles.spanUnpinned;
	};

	return (
		<label
			htmlFor="hamburger-toggle"
			className={`${styles.label} ${className}`}>
			<input
				type="checkbox"
				id="hamburger-toggle"
				className={styles.checkbox}
				onClick={handleToggle} // toggle fonksiyonunu kullan
			/>
			<span className={getSpanClassName()}></span>
			<span className={getSpanClassName()}></span>
			<span className={getSpanClassName()}></span>
		</label>
	);
};

export default HamburgerMenu;
