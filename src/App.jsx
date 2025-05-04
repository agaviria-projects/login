import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <>
      <Routes>
        <Route path="/Login" element={ isAuthenticated ? <Navigate to="/Dashboard"/> : <Login/>}/>
        <Route path="/Register" element={ isAuthenticated ? <Navigate to="/Dashboard"/> : <Register/>}/>
        <Route path="/Dashboard" element={ isAuthenticated ? <Dashboard/> : <Navigate to="/Login"/> }/>
        <Route path="*" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
