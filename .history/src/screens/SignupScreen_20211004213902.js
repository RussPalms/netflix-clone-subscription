import { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();

        auth.createUserWithEmailAndPassword())
	};

	const signIn = (e) => {
		e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            
        )
	};

	return (
		<div className="signupScreen">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwordRef} type="password" placeholder="Password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>

				<h4>
					<span className="signupScreen__gray">New to Netflix? </span>
					<span className="signupScreen__link" onClick={register}>
						Sign up now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignupScreen;
