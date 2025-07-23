import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

function Password() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="container">
        <h1>Create your password</h1>
        <p className="header">
            Use a strong password         
        </p>

        <form className="password-form">
          <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
            <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                name="password" 
                required 
            />
            <button 
                type="button"
                className="eye-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            </div>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-wrapper">
            <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirmPassword" 
                name="confirmPassword" 
                required 
            />
            <button 
                type="button"
                className="eye-toggle-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <button className="signup-btn">Confirm Password</button>
        </form>
    </div>
    </>
  )
}

export default Password