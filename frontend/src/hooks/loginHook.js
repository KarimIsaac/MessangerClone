import { useState } from "react";
import { useAuthContext } from "../context/authContext";

const loginHook = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthContext} = setAuthContext();

  const login = async ({ userName, password }) => {
    
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({  userName, password }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthContext(data);
      
    } catch (error) {
      setError(error.message);
    } 
  };

  return { loading };
};

export default signupHook;


