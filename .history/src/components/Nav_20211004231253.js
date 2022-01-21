import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../styles/Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);
	const history = useHistory();

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img
				onClick={() =>history.push}
					className="nav__logo"
					src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-700x394.png"
					alt=""
				/>
				<img
					onClick={() => history.push("/profile")}
					className="nav__avatar"
					src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Nav;
