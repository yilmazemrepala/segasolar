import React from "react";
import urfa from "@/images/1689257056_urfa-hava-05-01.jpg";
import Image from "next/image";
import Header from "@/components/Header/Navbar";

function Page() {
	return (
		<div>
			<Header />
			<div style={{ position: "absolute", height: "100vh", width: "100%" }}>
				<Image
					src={urfa}
					layout="fill" // Resmi alanı tamamen kaplamasını sağlamak için
					objectFit="cover" // Resmin kapsanmasını sağlamak için
					alt="Urfa Hava"
				/>
			</div>
			<div style={{ height: "3000px" }}>s</div>
		</div>
	);
}

export default Page;
