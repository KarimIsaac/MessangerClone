import { useState } from "react";

const signupHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signup = async ({ fullName, userName, password, gender }) => {
    const successSignUp = handleInputErrors({ fullName, userName, password, gender });
    if (!successSignUp) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, userName, password, gender }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default signupHook;

function handleInputErrors({ fullName, userName, password, gender }) {
  if (!fullName || !userName || !password || !gender) {
    console.log("All fields must be filled out");
    return false;
  }
  if (password.length < 8) {
    console.log("Password must be at least 8 characters");
    return false;
  }
  return true;
}
