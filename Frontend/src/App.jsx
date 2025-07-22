import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Auth/(01)Signup'
import Verify from './Auth/(02)Verify';
import Login from './Auth/(06)Login';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
