import './authStyles/Auth.css';
import { Link } from 'react-router-dom';


function Signup() {

  return (
    <>
      <div className="signup-container">
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
    </div>

    </>
  )
}

export default Signup