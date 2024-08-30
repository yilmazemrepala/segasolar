import React from "react";
import style from "./styles.module.css";

const MouseScrollAnimation = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className={style.mouseIcon}>
				<div className={style.mouseScroll}></div>
			</div>
		</div>
	);
};

export default MouseScrollAnimation;
