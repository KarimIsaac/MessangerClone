import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signupHook from '../../hooks/signupHook';
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    gender: ''
  });

  const { loading, signup, error } = signupHook();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Full Name:</label>
        <input 
          type="text" 
          value={inputs.fullName} 
          onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          required 
        />
      </div>
      <div>
        <label>User Name:</label>
        <input 
          type="text" 
          value={inputs.userName} 
          onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={inputs.password} 
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          required 
        />
      </div>
      <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
      <Link to={"/login"}>
        Already have an account?
      </Link>
    </form>
  );
};

export default Signup;
