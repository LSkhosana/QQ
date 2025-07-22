import { Link } from "react-router-dom"

function Test() {

  return (
    <div className="test-container">
        <h1>Test Component</h1>
        <p>This is a test component to verify the setup.</p>
        <button><Link to="/login">Logout</Link></button>
        {/* p tags that displays the loged in users first name, lastname and email */}
    </div>
  )
}

export default Test