"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header/NavbarAccommodation";
import Footer from "@/components/Footer/Footer";

export default function projectslayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				style={{
					margin: 0,
					padding: 0,
					fontFamily: "Neue Haas Grotesk Display Pro, sans-serif",
				}}>
				<Header isAtTop={false} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
