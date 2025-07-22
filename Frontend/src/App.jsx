import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Auth/(01)Signup'
import Verify from './Auth/(02)Verify';
import Emailcode from './Auth/(03)emailCode';
import Password from './Auth/(05)Password';
import Login from './Auth/(06)Login';
import Onboarding from './Auth/(07)Onboarding';
import Test from './Main/Test';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/emailcode" element={<Emailcode />} />
        <Route path="/password" element={<Password />} />
        <Route path="/onboarding" element={<Onboarding />} />
        {/* Add a test route to verify the setup */}
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
