"use client";

import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";
import { Container, Row, Col } from "reactstrap";
import ButtonComponent from "@/components/ui/button/ButtonComponent";

interface ProjectsProps {
	limit?: number; // Gösterilecek proje sayısını belirten opsiyonel prop
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
	const reqUrl =
		"https://yilmazbackend.online/wordpress/wp-json/wp/v2/projeler?acf_format=standard&_fields=id,title,acf";
	const { data }: any = useFetch(reqUrl);

	if (!data || data.length === 0) return null;

	const projectsToShow = limit ? data.slice(0, limit) : data;

	return (
		<Container className={style.projects}>
			<Row>
				{projectsToShow.map((item: any, index: number) => {
					const isReversed = Math.floor(index / 3) % 2 !== 0;

					if (index % 3 === 0) {
						return (
							<React.Fragment key={index}>
								{isReversed ? (
									<>
										<Col md={6}>
											<Row>
												{index + 1 < projectsToShow.length && (
													<Col sm={12}>
														<div className={style.layoutItemNt0}>
															<Image
																alt={projectsToShow[index + 1].title.rendered}
																layout="responsive"
																width={300}
																height={500}
																className={style.image}
																src={projectsToShow[index + 1].acf.large_image}
															/>
														</div>
														<div className="position-relative">
															<h3 className={style.cardTitle}>
																{projectsToShow[index + 1].title.rendered}
															</h3>
															<ButtonComponent
																className={style.btnComponet}
																dataHover="View Project"
																text={projectsToShow[index + 1].acf.setup_power}
																href={`/projects/${
																	projectsToShow[index + 1].acf.large_image
																}`}
															/>
														</div>
													</Col>
												)}
												{index + 2 < projectsToShow.length && (
													<Col sm={12}>
														<div className={style.layoutItemNt1}>
															<Image
																alt={projectsToShow[index + 2].title.rendered}
																layout="responsive"
																width={100}
																height={100}
																className={style.image}
																src={projectsToShow[index + 2].acf.large_image}
															/>
														</div>
														<div className="position-relative">
															<h3 className={style.cardTitle}>
																{projectsToShow[index + 2].title.rendered}
															</h3>
															<ButtonComponent
																className={style.btnComponet}
																dataHover="View Project"
																text={projectsToShow[index + 2].acf.setup_power}
																href={`/projects/${
																	projectsToShow[index + 2].acf.large_image
																}`}
															/>
														</div>
													</Col>
												)}
											</Row>
										</Col>
										<Col md={6}>
											<div className={style.layoutItemNt2}>
												<Image
													className={style.image}
													alt={item.title.rendered}
													layout="responsive"
													width={100}
													height={100}
													src={item.acf.large_image}
												/>
											</div>
											<div className="position-relative">
												<h3 className={style.cardTitle}>
													{item.title.rendered}
												</h3>
												<ButtonComponent
													className={style.btnComponet}
													dataHover="View Project"
													text={item.acf.setup_power}
													href={`/projects/${item.acf.link}`}
												/>
											</div>
										</Col>
									</>
								) : (
									<>
										<Col md={6}>
											<div className={style.layoutItemNt2}>
												<Image
													alt={item.title.rendered}
													className={style.image}
													layout="responsive"
													objectFit="cover"
													width={100}
													height={100}
													src={item.acf.large_image}
												/>
											</div>
											<div className="position-relative">
												<h3 className={style.cardTitle}>
													{item.title.rendered}
												</h3>

												<ButtonComponent
													className={style.btnComponet}
													dataHover="View Project"
													text={item.acf.setup_power}
													href={`/projects/${item.acf.link}`}
												/>
											</div>
										</Col>
										<Col md={6}>
											<Row>
												{index + 1 < projectsToShow.length && (
													<Col sm={12}>
														<div className={style.layoutItemNt0}>
															<Image
																alt={projectsToShow[index + 1].title.rendered}
																layout="responsive"
																width={100}
																height={100}
																className={style.image}
																src={projectsToShow[index + 1].acf.large_image}
															/>
														</div>
														<div className="position-relative">
															<h3 className={style.cardTitle}>
																{projectsToShow[index + 1].title.rendered}
															</h3>
															<ButtonComponent
																className={style.btnComponet}
																dataHover="View Project"
																text={projectsToShow[index + 1].acf.setup_power}
																href={`/projects/${
																	projectsToShow[index + 1].acf.large_image
																}`}
															/>
														</div>
													</Col>
												)}
												{index + 2 < projectsToShow.length && (
													<Col sm={12}>
														<div className={style.layoutItemNt1}>
															<Image
																alt={projectsToShow[index + 2].title.rendered}
																layout="responsive"
																width={100}
																height={100}
																className={style.image}
																src={projectsToShow[index + 2].acf.large_image}
															/>
														</div>
														<div className="position-relative">
															<h3 className={style.cardTitle}>
																{projectsToShow[index + 2].title.rendered}
															</h3>{" "}
															<ButtonComponent
																className={style.btnComponet}
																dataHover="View Project"
																text={projectsToShow[index + 2].acf.setup_power}
																href={`/projects/${
																	projectsToShow[index + 2].acf.large_image
																}`}
															/>
														</div>
													</Col>
												)}
											</Row>
										</Col>
									</>
								)}
							</React.Fragment>
						);
					}
					return null;
				})}
			</Row>
		</Container>
	);
};

export default Projects;
