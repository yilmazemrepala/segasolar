"use client";
import React from "react";
import Header from "@/components/Header/HomeNavbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

function Page() {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Projects limit={6} />
			<Footer />
		</div>
	);
}

export default Page;
