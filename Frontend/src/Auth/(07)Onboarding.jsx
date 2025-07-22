function Onboarding() {

  return (
    <>
      <div className="container">
        <p className="header3" style={{maxWidth: "100%"}}>We’re almost done just need a few more details to get started</p>

        <form className="onboard-form">
          <div className="input-row">
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">Surname</label>
              <input type="text" id="name" name="name" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-wrapper">
              <label htmlFor="email">Business emali (optional)</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">Team</label>
              <select name="team" id="1">
                <option value="1">It's just Me</option>
                <option value="2">2-10 Members</option>
                <option value="3">10-50 Members</option>
                <option value="4">50+ Members</option>

              </select>
            </div>
          </div>

           <div className="input-row">
            <div className="input-wrapper">
              <label htmlFor="text">Brand/Company name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="text">Industry</label>
              <select name="industry" id="1">
                <option value="1">Industry 1</option>
                <option value="2">Industry 2</option>
                <option value="3">Industry 3</option>
                <option value="4">Industry 4</option>

              </select>
            </div>
          </div>

          <div className="input-wrapper2">
              <label htmlFor="text">How did you hear about QuickQuote?</label>
              <select className="select" name="industry" id="1">
                <option value="1">Instagram</option>
                <option value="2">Youtube</option>
                <option value="3">X</option>
                <option value="4">Ads</option>

              </select>         
           </div>
          <div className="btn-wrapper">
          <button className="Done-btn">Done</button></div>

        </form>
      </div>
    </>
  )
}

export default Onboarding