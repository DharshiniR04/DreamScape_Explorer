import React, { useState } from 'react';
import axios from 'axios';
import '../css/Login.css';
import Video from '../assets/Dream.mp4';
import { useNavigate } from 'react-router-dom';

function Login({ onGetEmail }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.defaults.withCredentials = true;

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.data === "Success") {
        alert("Authentication success");
        onGetEmail(email);
        
        navigate("../list");
      } else {
        alert('Invalid');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <video autoPlay muted loop>
        <source src={Video} />
      </video>
      <form id="signbox">
        <label id="email">Email</label> <br />
        <input
          placeholder="xyz@gmail.com"
          id="emailInput"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br />
        <label id="pass">Password</label> <br />
        <input
          placeholder="8-characters"
          id="passInput"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br />
        <button type="submit" onClick={handleLogin}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
