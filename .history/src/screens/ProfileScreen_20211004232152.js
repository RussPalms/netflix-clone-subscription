import Nav from "../components/Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img
						// src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
						src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
						alt=""
					/>
                    <div className="profileScreen__details">
                        <h2></h2>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
