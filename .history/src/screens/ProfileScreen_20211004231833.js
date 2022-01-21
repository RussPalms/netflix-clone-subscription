import Nav from "../components/Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
	return (
		<div className="profileScreen">
			<Nav>
				<div className="profileScreen__body">
					<h1>Edit Profile</h1>
					<div className="profileScreen__info">
						<img
							src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
							alt=""
						/>
					</div>
				</div>
			</Nav>
		</div>
	);
}

export default ProfileScreen;
