// hooks/useScroll.tsx
"use client";

import { useState, useEffect } from "react";

const useScroll = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isAtTop, setIsAtTop] = useState(true);
	let lastScrollY = 0;

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window !== "undefined") {
				if (window.scrollY === 0) {
					setIsAtTop(true);
					setIsVisible(true);
				} else {
					setIsAtTop(false);
					if (window.scrollY > lastScrollY) {
						setIsVisible(false);
					} else {
						setIsVisible(true);
					}
				}
				lastScrollY = window.scrollY;
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return { isVisible, isAtTop };
};

export default useScroll;
