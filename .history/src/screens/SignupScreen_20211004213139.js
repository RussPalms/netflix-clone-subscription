import "./SignupScreen.css";

function SignupScreen() {
	return (
		<div className="signupScreen">
			<form>
				<h1>Sign In</h1>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Sign In</button>

				<h4>
					<span className="signupScreen__gray">New to Netflix? </span>
					<span className="signupScreen__">Sign up now.</span>
				</h4>
			</form>
		</div>
	);
}

export default SignupScreen;
