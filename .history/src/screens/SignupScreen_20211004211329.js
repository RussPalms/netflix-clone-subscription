function SignupScreen() {
	return (
		<div className="signupScreen">
			<form>
				<input type="email" placeholder="Email Address" />
				<button
					className="loginScreen__getStarted"
					onClick={() => setSignIn(true)}
				>
					GET STARTED
				</button>
			</form>
		</div>
	);
}

export default SignupScreen;
