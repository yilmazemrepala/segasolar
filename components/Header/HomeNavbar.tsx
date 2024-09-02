"use client";

import React, { useEffect, useState } from "react";
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import style from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import DropdownButton from "@/components/ui/dropdown/DropdownButton";
import ButtonComponent from "@/components/ui/button/ButtonComponent";
import useScroll from "@/hooks/useScroll";
import HamburgerMenu from "@/components/ui/hamburgerMenu/HamburgerMenu";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { isVisible, isAtTop } = useScroll();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [isOpen]);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const corporate = [
		{ label: "About Us", link: "#" },
		{ label: "Companies", link: "#" },
		{ label: "Policies", link: "#" },
		{ label: "Why Sega Solar", link: "#" },
	];

	const services = [
		{ label: "Turnkey Facility Setup", link: "#" },
		{ label: "Project & Engineering Service", link: "#" },
		{ label: "Scada / Automation Systems", link: "#" },
		{ label: "Mid Voltage System", link: "#" },
		{ label: "Low Voltage Panel", link: "#" },
		{ label: "Energy Transfer Lines", link: "#" },
		{ label: "Maintenance and Service", link: "#" },
	];

	return (
		<div>
			<Navbar
				expand="xl"
				className={`p-4 ${style.navbarDefault} 
                ${isVisible ? style.visible : style.hidden} 
                ${isAtTop ? style.navbarTop : ""}
				${isOpen ? style.navbarOpen : ""}`}>
				<NavbarBrand tag={Link} href="/">
					<Image
						src="https://yilmazbackend.online/wordpress/wp-content/uploads/2024/08/sega-logo%20(1).svg"
						width={300}
						height={isAtTop ? 100 : 50}
						alt="sega solar"
						color="white"
						className={`${style.segaSolar} ${
							isAtTop && !isOpen ? style.segaSolarFilter : ""
						}`}
					/>
				</NavbarBrand>
				<HamburgerMenu onClick={toggle} className={`${style.hamburgerMenu}`} />
				<Collapse
					isOpen={isOpen}
					navbar
					className={`${style.mobileMenu} ${isOpen ? style.open : ""}`}
					id="">
					<Nav className={`${style.navItems} ms-auto`}>
						<NavItem>
							<DropdownButton
								name="Corporate"
								className={`${style.dropdownMenu}  ${
									style.hoverUnderlineAnimation
								} ${isVisible ? "text-dark" : ""}
                                ${isAtTop && !isOpen ? "text-white" : ""}`}
								items={corporate}
							/>

							<DropdownButton
								name="Services"
								className={`${style.dropdownMenu} ${
									style.hoverUnderlineAnimation
								} ${isVisible ? "text-dark" : ""}
                                  ${isAtTop && !isOpen ? "text-white" : ""}`}
								items={services}
							/>

							<Link
								href="/projects"
								className={`nav-link ${style.navLink} ${
									style.hoverUnderlineAnimation
								} ${isVisible ? "text-dark" : ""}
                                  ${isAtTop && !isOpen ? "text-white" : ""}`}>
								Projects
							</Link>
							<Link
								href="#"
								className={`nav-link ${style.navLink} ${
									style.hoverUnderlineAnimation
								} ${isVisible ? "text-dark" : ""}
                                  ${isAtTop && !isOpen ? "text-white" : ""}
                                `}>
								Media
							</Link>

							<Link
								href="#"
								className={`nav-link ${style.navLink} ${
									style.hoverUnderlineAnimation
								} ${isVisible ? "text-dark" : ""}
                                  ${isAtTop && !isOpen ? "text-white" : ""}
                                `}>
								Contact
							</Link>
							<ButtonComponent
								className="ms-3 d-inline-block"
								text="Get An Offer"
								dataHover="Get An Offer"
								href="/get-an-offer"
							/>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
