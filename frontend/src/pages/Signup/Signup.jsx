import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ onRegister }) => {
  const [fullName, setfullName] = useState('');
  const [userName, setuserName] = useState('');

  const [password, setPassword] = useState('');
  const [gender, setgender] = useState('');
    const [inputs, setInputs]= useState({
      fullName:'',
      userName:'',
      email:'',
      password:'',
      gender:''
    })
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ fullName, userName, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>fullName:</label>
        <input 
          type="text" 
          value={inputs.fullName} 
          onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
          required 
        />
      </div>
      <div>
        <label>userName:</label>
        <input 
          type="userName" 
          value={inputs.userName} 
          onChange={(e) => setInputs({...inputs, userName: e.target.value})}
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={inputs.password} 
          onChange={(e) => setInputs({...inputs, password: e.target.value})}
          required 
        />
      </div>
      <button type="submit">Register</button>
      <Link to={"/login"}>
        Already have an account?
      </Link>
    </form>
  );
};

export default Signup;