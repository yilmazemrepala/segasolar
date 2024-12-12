"use client";

import React from "react";
import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Projects from "@/components/Projects/Projects";

const Page = () => {
	return (
		<div>
			<Breadcrumb slug="Projects" />
			<Projects />
		</div>
	);
};
export default Page;
