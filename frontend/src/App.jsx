

import {Route, Routes,Navigate } from "react-router-dom"
import './App.css'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import { useAuthContext } from "./context/authContext";

function App() {
  const {authUser} = useAuthContext();
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={authUser ? <Navigate to ="/"/>: <Signup/>} />
    </Routes>
  )
    
  
}

export default App
