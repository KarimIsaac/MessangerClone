
import { useAuthContext } from "../context/authContext";

const logoutHook = () => {
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include', 
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            
            setAuthUser(null);
            localStorage.removeItem("chat-user");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return { logout };
};

export default logoutHook;
