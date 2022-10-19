import React from 'react'
import './Signup.css'

// import PasswordStrengthChecker from './PasswordStrengthChecker';
// import PasswordInputField from "./PasswordInputField";
// import StrengthMeter from "./StrengthMeter";
// import PasswordStrengthChecker from './PasswordStrengthChecker';

<helmet>

<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" ></link>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" ></link>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

</helmet>
const Signup = () => {
    
    return (
    
<div class="signup-form">
    <form >
		<h2>Register</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			<div class="row">
				<div class="col"><input  type="text" class="form-control" name="first_name" placeholder="First Name" required="required"/></div>
				<div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
			</div>        	
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
        </div>
		<div class="form-group">
       
            <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
            <div className="row">
       </div>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>        
        <div class="form-group">
			<label class="form-check-label">
        <input type="checkbox" required="required"/> I accept the <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a>
        </label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <a href="/">Sign in</a></div>
</div>

    );
};
export default Signup;