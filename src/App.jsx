import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated')=="true");
  let [userName, setUserName] = useState(localStorage.getItem('userNmae')||'');
  
  //console.log("usuario logueado: "+isAuthenticated);
  let handleLogin =()=>{
     setIsAuthenticated(true);//token de autorizacion
  };

  let handleLogout =()=>{
    setIsAuthenticated(false);
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={ isAuthenticated ? <Navigate to="/Dashboard"/> : <Login onLogin={handleLogin}/>}/>
        <Route path="/Register" element={ isAuthenticated ? <Navigate to="/Dashboard"/> : <Register />}/>
        <Route path="/Dashboard" element={ isAuthenticated ? <Dashboard/> : <Navigate to="/login"/> }/>
        <Route path="*" element={<Login onLogin={handleLogin}/>}/>
      </Routes>
    </>
  )
}

export default App
