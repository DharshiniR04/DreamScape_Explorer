import React,{ useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../css/Signup.css';
import Video from '../assets/Dream.mp4';


function Signup() {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const[phone,setPhone]=useState("");
  const [pass, setPass] = useState("");

  axios.defaults.withCredentials = true;

  const handleAccount=async(event)=> {
    event.preventDefault();
    try {
      const response = await axios.post("https://dreamscape-explorer-server.vercel.app/signup", {
        name:name,
        dob:dob,
        phone:phone,
        email: email,
        password: pass,
      });
      if (response.status === 200) {
        navigate("../login");
        console.log("Success");
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Authentication failed", error);
    }
  }


  return (
    <div>
        <video autoPlay muted loop>
                <source src={Video} />
            </video>
      <form id="box">
        <label id="name">Name</label> <br />
        <input placeholder="Enter Your Name" type="text" id="nameInput" value={name}
              onChange={(e) => setName(e.target.value)} required /> <br />
        <label id="dob">Date of Birth</label> <br />
        <input placeholder="DD/MM/YYYY" id="dobInput" type='date' value={dob}
              onChange={(e) => setDOB(e.target.value)} required /> <br />
        <label id="phone">Mobile Number</label> <br />
        <input id="phoneInput" placeholder="Mobile Number"value={phone}
              onChange={(e) => setPhone(e.target.value)} required /> <br />
        <label id="email">Email</label> <br />
        <input placeholder="xyz@gmail.com" id="emailInput" value={email}
              onChange={(e) => setEmail(e.target.value)} required /> <br />
        <label id="pass">Password</label> <br />
        <input placeholder="8-characters" id="passInput" type="password" value={pass}
              onChange={(e) => setPass(e.target.value)} required /> <br />
        <label id="re-pass">Confirm Password</label> <br />
        <input placeholder="8-characters" id="rePassInput" type="password" required /> <br />
        <button type="submit" onClick={handleAccount}>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
