import { Link } from 'react-router-dom';
import google from '../assets/google.png';
import microsoft from '../assets/microsoft.png';


function Login() {

  return (
    <>
      <div className="container">
              <h1>Welcome back</h1>
              

              <form className="signup-form">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />

                  <label htmlFor="email">Password</label>
                  <input type="password" id="password" name="password" required />
                  <button className="signup-btn">Continue</button>
              </form>

              <p className="switch">
              Don't have an account yet{' '}
              <Link to="/" style={{color: 'rgb(134, 82, 255)'}}>
                  Sign up
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
                      Login with Microsoft Account
                  </button>
                  <button className="google-btn"> 
                      <img src={google} alt="Google Icon" />
                      Login with Google Account
                  </button>
              </div>
          </div>
    </>
  )
}

export default Login