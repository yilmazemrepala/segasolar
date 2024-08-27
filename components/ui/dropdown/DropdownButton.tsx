import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import style from "./styles.module.css";

interface DropdownItem {
	label: string;
	link: string;
}

interface DropdownButtonProps {
	name: string;
	items: DropdownItem[];
	className?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
	name,
	items = [],
	className = "",
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	const handleItemClick = (item: DropdownItem) => {
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="d-inline-block position-relative" ref={dropdownRef}>
			<button
				type="button"
				onClick={toggleDropdown}
				className={`${className} ${style.dropDownButton}`}>
				{name}
			</button>

			{isOpen && (
				<div className={`${style.dropdownMenu} ${isOpen ? "show" : ""}`}>
					<div
						className="py-1 d-flex flex-column"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu">
						<ul className={style.listStyle}>
							{items.length > 0 ? (
								items.map((item, index) => (
									<li key={index} className={style.listItems}>
										<Link
											href={item.link}
											onClick={() => handleItemClick(item)}
											role="menuitem">
											{item.label}
										</Link>
									</li>
								))
							) : (
								<li className={style.listItems}> There is nothing! </li>
							)}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default DropdownButton;
