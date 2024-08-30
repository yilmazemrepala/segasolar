"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import style from "./styles.module.css";
import "swiper/css";
import "./newNavigationRule.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import useFetch from "@/hooks/useFetch";
import ButtonComponent from "@/components/ui/button/ButtonComponent";
import MouseScrollAnimation from "@/components/ui/mouseScroll/MouseScrollAnimation";
import FlagSlider from "@/components/ui/slider/FlagSlider";

const Hero = () => {
	const reqUrl: string =
		"https://yilmazbackend.online/wordpress/wp-json/wp/v2/projeler?acf_format=standard&_fields=id,title,acf";
	const { data }: any = useFetch(reqUrl);

	if (!data) return null;

	return (
		<section>
			<div>
				<Swiper
					navigation
					loop={true}
					effect={"fade"}
					pagination={{ type: "fraction" }}
					modules={[EffectFade, Navigation, Pagination]}
					onSwiper={(swiper) => console.log(swiper)}
					className={style.swiperBar}>
					{data.map((item: any) => (
						<SwiperSlide key={item.id}>
							<div className={style.swiperImageBar}>
								<Image
									src={item.acf.large_image}
									alt={item.title.rendered}
									layout="fill"
									objectFit="cover"
									priority
								/>
								<div className={style.overlay}></div>
								<div className={style.sliderContent}>
									<h3 className={style.sliderTitle}>{item.title.rendered}</h3>
									<ButtonComponent
										href={item.acf.link}
										text={item.acf.setup_power}
										dataHover={"View Project"}
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
					<div className="hero-slider-bottom">
						<MouseScrollAnimation />
					</div>
					<FlagSlider />
				</Swiper>
			</div>
		</section>
	);
};

export default Hero;
