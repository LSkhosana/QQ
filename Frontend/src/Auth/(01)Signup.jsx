import './authStyles/Auth.css';
import { Link } from 'react-router-dom';
import google from '../assets/google.png';
import microsoft from '../assets/microsoft.png';


function Signup() {

  return (
    <>
      <div className="container">
        <h1>Create your account</h1>
        <p className="header">
            Please note that phone verification is required for signup. Your number or email will only be used to verify your identity for security purposes.
        </p>

        <form className="signup-form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <button className="signup-btn">Continue</button>
        </form>

        <p className="switch">
        Already have an account{' '}
        <Link to="/login" style={{color: 'rgb(134, 82, 255)'}}>
            Log in
        </Link>
        </p>     

        <div className="or-divider">
            <div className="line"></div>
            <p style={{margin: '10px', color: 'rgb(180, 180, 180)'}}>OR</p>
            <div className="line"></div>
        </div> 

        <div className="social-login">
            <button className="Microsoft-btn">
                <img src={microsoft} alt="Microsoft Icon" />
                Continue with Microsoft Account
            </button>
            <button className="google-btn"> 
                <img src={google} alt="Google Icon" />
                 Continue with Google Account
            </button>
        </div>
    </div>

    </>
  )
}

export default Signup