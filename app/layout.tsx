import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sega Solar",
	description:
		"Worldwide Solar Energy. Solar energy is recognized as one of the most popular and sustainable solutions of renewable energy sources. Operating in this field, Sega Solar is one of the leading and strongest companies in the solar power plant installation sector.",
};

export default function RootLayout({
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
				{children}
			</body>
		</html>
	);
}
