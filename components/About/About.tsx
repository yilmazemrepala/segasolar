import React from "react";
import style from "./style.module.css";
import aboutPng from "@/public/images/about-bg.png";
import aboutMap from "@/public/images/about-map.png";
import Image from "next/image";
import SlideButton from "@/components/ui/slideButton/SlideButton";

const About = () => {
	return (
		<div className={style.indexAbout}>
			<div className={style.aboutBg}>
				<Image
					src={aboutPng}
					alt="sega-solar"
					layout="responsive"
					objectFit="cover"
					priority
				/>
			</div>
			<div className="about-content container d-flex flex-column  align-items-center">
				<h2 className={`${style.gradientTitle} ${style.gradientTitleH2}`}>
					463 MW
				</h2>
				<h3 className={`${style.gradientTitle} ${style.gradientTitleH3}`}>
					Worldwide Solar Energy
				</h3>
				<p className={style.aboutParagraph}>
					Solar energy is recognized as one of the most popular and sustainable
					solutions of renewable energy sources. Operating in this field, Sega
					Solar is one of the leading and strongest companies in the solar power
					plant installation sector.
				</p>
				<SlideButton href="/corporate/about-us" buttonText="About Us" />
			</div>
			<div className={style.aboutMap}>
				<Image
					src={aboutMap}
					alt="sega-solar-world"
					layout="responsive"
					objectFit="cover"
					priority
				/>
			</div>
		</div>
	);
};

export default About;
