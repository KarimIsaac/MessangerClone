
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = ({ onLogin }) => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onLogin({  password, userName });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>userName:</label>
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setuserName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
        <Link to={"/signup"}>
        Don't have an account?
      </Link>
      </form>
    );
  };
  
export default Login;