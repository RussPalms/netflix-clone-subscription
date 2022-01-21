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
                            src='https://pbs.twimg.com/profile_images/1240'    
                     />
                    </div>
				</div>
			</Nav>
		</div>
	);
}

export default ProfileScreen;
