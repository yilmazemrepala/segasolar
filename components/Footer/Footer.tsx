// components/Footer.tsx

import React from "react";
import styles from "./styles.module.css";

interface FooterProps {
	// Eğer dinamik verileriniz varsa buraya ekleyebilirsiniz
	// Örneğin: socialLinks: { facebook: string, instagram: string, ... }
}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src="/logo.svg" alt="Sega Solar Logo" />
				</div>
				<div className={styles.links}>
					<a href="#">Corporate</a>
					<a href="#">Projects</a>
					<a href="#">Services</a>
					<a href="#">Media</a>
					<a href="#">Contact</a>
				</div>
				<div className={styles.newsletter}>
					<input type="email" placeholder="Email Address" />
					<button>Join Newsletter</button>
				</div>
				<div className={styles.social}>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-facebook-f"></i>
					</a>
					{/* Diğer sosyal medya ikonları */}
				</div>
				<div className={styles.copyright}>
					&copy; Copyright 2023 Sega Solar. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
