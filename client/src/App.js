import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dream from "./components/Dream";
import Login from './components/Login';
import Signup from './components/Signup';
import List from "./components/List";
import DreamForm from "./components/DreamForm";
import DreamList from "./components/DreamList";

function App() {
   const [email,setEmail]=useState("");

   useEffect(() => {
    console.log("Email changed:", email);
   }, [email]);

   const handleEmail =  (data) => {
    setEmail(data);
    console.log("email",email);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dream />} />
        <Route path="/login" element={<Login onGetEmail={handleEmail} />} />
        <Route path="/signup" element={<Signup />} />
        { email && (<Route path="/list" element={<List email={email} />} />)}
        <Route path="/dreamform" element={<DreamForm />} />
        <Route path="/dreamlist" element={<DreamList />} />
      </Routes>
    </Router>
  );
}

export default App;
