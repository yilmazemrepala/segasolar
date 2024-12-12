// Breadcrumb.tsx
import React from "react";
import { Col, Container, Row } from "reactstrap";
import style from "./style.module.css";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface BreadcrumbProps {
	slug: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ slug }) => {
	return (
		<div>
			<Container>
				<Row className={style.breadcrumb}>
					<Col md={12}>
						<div className={style.gradientTitle}>
							<h2>
								{slug
									? slug.charAt(0).toUpperCase() + slug.slice(1)
									: "Projects"}
							</h2>
						</div>
					</Col>
					<Col md={12} className={style.breadcrumbStructre}>
						<div className={style.breadcrumbItems}>
							<Link href="/">Home</Link>
							<IoIosArrowForward />
							<Link
								href="/projects"
								style={{ pointerEvents: "none", cursor: "notAllowed" }}>
								{slug}
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Breadcrumb; // Default export
