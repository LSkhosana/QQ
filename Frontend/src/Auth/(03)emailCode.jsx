function Emailcode() {

  return (
   <>
      <div className="container">
            <p className="header3">
              A Verification code was sent to your email address please enter that code below             
            </p>
             <form className="signup-form">
              <label htmlFor="number">Code</label>
              <input type="number" id="number" name="number" required />
            </form>
              <button className="code-btn">Continue</button>
              <button className="code-btn2">Resend Code</button>
      </div>
    </>
  )
}

export default Emailcode