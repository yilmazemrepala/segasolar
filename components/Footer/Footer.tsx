import React, { useState } from "react";
import { Container, Row, Col, Nav, NavItem, Input } from "reactstrap";
import style from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { sendNewsletter } from "@/backend/mail";
import "./newCSSRule.css";

const Footer = () => {
	const [email, setEmail] = useState("");

	const handleSendEmail = async (e: any) => {
		e.preventDefault(); // Prevent default form submission

		try {
			await sendNewsletter(email);
			alert("You have successfully signed up for the newsletter!");
		} catch (error) {
			alert("An error has occurred. Please try again.");
		} finally {
			setEmail(""); // Clear the email input after sending
		}
	};

	const corporate = [
		{ label: "Corporate", link: "#" },
		{ label: "PROJECTS", link: "/projects" },
		{ label: "SERVICES", link: "#" },
		{ label: "MEDIA", link: "#" },
		{ label: "CONTACT", link: "#" },
	];

	return (
		<footer className="">
			<div>
				<Row>
					<Col md="6" className={style.footerLeft}>
						<Row>
							<div className={style.footerLeftItems}>
								<Col md="6" className={style.footerLogo}>
									<Image
										src="https://yilmazbackend.online/wordpress/wp-content/uploads/2024/08/sega-logo%20(1).svg"
										width={200}
										height={100}
										alt="sega solar"
									/>
								</Col>
								<Col md="6">
									<Nav className="d-flex flex-column justify-content-center mt-4">
										{corporate.map((item, index) => (
											<NavItem key={index}>
												<Link className={style.navItem} href={item.link}>
													{item.label}
												</Link>
											</NavItem>
										))}
									</Nav>
								</Col>
							</div>
						</Row>
					</Col>
					<Col md="6" className={style.footerRight}>
						<div>
							<div className={style.footerRightItems}>
								<div className={style.footerTop}>
									<div className={style.newsletterTitle}>
										Join
										<span className={style.newsletterSpan}> Newsletter</span>
									</div>
									<div className={style.socialMedia}>
										<FaFacebookF style={{ fontSize: "23px !important" }} />
										<FaYoutube />
										<IoLogoInstagram />
										<FaLinkedinIn />
									</div>
								</div>
								<form>
									<div className="d-flex flex-row">
										<Input
											type="email"
											name="email"
											placeholder="email address"
											className={style.emailInput}
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
										<button
											type="button" // Button type changed to 'button'
											className={style.emailBtn}
											onClick={handleSendEmail} // Added onClick handler
										>
											<GrSend />
										</button>
									</div>
								</form>
								<div className={style.footerInfo}>
									<Link
										className={`${style.footerStyle} ${style.map}`}
										href={
											"https://www.google.com/maps/place/sega+solar/@39.8697037,32.6905286,15z/data=!4m2!3m1!1s0x0:0x1a7f6596c252d352?sa=X&ved=2ahUKEwi32O_Jo6eAAxX2cfEDHcd4BPIQ_BJ6BAhYEAA&ved=2ahUKEwi32O_Jo6eAAxX2cfEDHcd4BPIQ_BJ6BAhoEAg"
										}>
										Prof. Dr. Ahmet Taner Kışlalı Mah. 2820. Sok. No:6Çayyolu -
										Çankaya / Ankara / TÜRKİYE
									</Link>

									<Link
										href="tel:+90 312 241 17 06"
										className={style.footerStyle}
										style={{ fontWeight: 600 }}>
										+90 312 241 17 06 (pbx)
									</Link>

									<Link
										className={style.footerStyle}
										href="mailto:info@segasolar.com"
										style={{ fontWeight: 600 }}>
										info@segasolar.com
									</Link>
								</div>
							</div>
						</div>
					</Col>
					<hr style={{ margin: "0", padding: "0" }} />
				</Row>
				<Row>
					<Col md={6} className={style.copyright}>
						<p className={`${style.copyrightStyle} ${style.footerStyle}`}>
							&copy; Copyright 2023 Sega Solar, all rights reserved.
						</p>
					</Col>
					<Col md={6} className={style.footerPolicies}>
						<Link
							className={`${style.footerStyle}`}
							href={"https://babel.com.tr"}>
							web design Babel
						</Link>
					</Col>
				</Row>
			</div>
		</footer>
	);
};

export default Footer;
