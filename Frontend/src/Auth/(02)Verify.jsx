import SMS from'../assets/SMS.png';
import Email from'../assets/Email.png';

function Verify() {

  return (
    <>
      <div className="container">
            <h1>Verify your account</h1>
            <p className="header2">
              Verify you account using your phone number or your email            
            </p>
            <button className="verify-btn">
              <img src={SMS} alt="" />
              Message
            </button>
            <button className="verify-btn">
              <img src={Email} alt="" />
              Email
            </button>
      </div>
    </>
  )
}

export default Verify