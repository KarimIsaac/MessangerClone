import { useState } from "react";
import { useAuthContext } from "../context/authContext";




const logoutHook = () => {
    const { setAuthUser } = useAuthContext();
    const logout = async() => {
        try {
            const res = await fetch("http://localhost:8000/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: authUser._id }),
                
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setAuthUser(null);
            localStorage.removeItem("chat-user");
        } catch (error) {
            
        }
  }
  return { logout };
}

export default logoutHook;
