"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { countries } from "@/lib/countries";
import style from "./styles.module.css";
import "swiper/css";
import "./sliderRule.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Tooltip } from "reactstrap";
import { useState } from "react";

const FlagSlider = () => {
	const extendedCountries = [...countries];
	const [tooltipOpen, setTooltipOpen]: any = useState({});

	while (extendedCountries.length < 100) {
		extendedCountries.push(...countries);
	}

	const finalCountries = extendedCountries.slice(0, extendedCountries.length);

	const toggle = (index: any) => {
		setTooltipOpen((prev: any) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	return (
		<section className={style.heroBottomFlagSlider}>
			<div>
				<Swiper
					navigation={false}
					pagination={{ type: "fraction" }}
					loop={true}
					slidesPerView={20}
					spaceBetween={30}
					className="swiper-slide-active"
					modules={[Navigation, Pagination, Autoplay]}
					autoplay={{
						delay: 3000,
						disableOnInteraction: true,
					}}>
					{finalCountries.map((country, index) => (
						<SwiperSlide className="test" key={index}>
							<div
								id={`Tooltip-${index}`}
								className={`${style.heroBottomSliderBar} swiper-slide-active`}>
								<div className={style.heroBottomSlider}>
									<Image
										src={country.src}
										alt={country.alt}
										className={style.roundedFull}
									/>
								</div>
							</div>
							<Tooltip
								isOpen={tooltipOpen[index] || false}
								target={`Tooltip-${index}`}
								toggle={() => toggle(index)}
								className={style.tooltipCustom}>
								{country.name} {country.power}
							</Tooltip>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default FlagSlider;
