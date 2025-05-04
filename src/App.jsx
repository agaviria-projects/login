import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";

function App() {

  
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
