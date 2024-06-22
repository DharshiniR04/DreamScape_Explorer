import React, { useState,useEffect } from "react";
import '../css/DreamForm.css';
import axios from "axios";

function DreamForm( Email ) {
  const [dreamInfo, setDreamInfo] = useState({ name: "", date: "", dream: "" });
 const[email,setEmail]=useState('');
  useEffect(()=>{
    setEmail(Email.Email.email);
 },[email]);

//  axios.defaults.withCredentials = true;

  const handleInputSubmit = async (event) => {
  event.preventDefault();
  console.log("hi");
    try {
      const response = await axios.post("https://dreamscape-explorer.vercel.app/dream", {
        email:email,
        name: dreamInfo.name,
        date: dreamInfo.date,
        dream: dreamInfo.dream,
      });
    
      console.log(response.data);
      setDreamInfo({ name: "", date: "", dream: "" });
    } catch (error) {
      console.error("Error submitting dream:", error);
    }
    
  };

  return (
    <div id="dream-form">
      <form onSubmit={handleInputSubmit}>
        <label>Name:</label>
        <input type="text" name="name" required value={dreamInfo.name} onChange={(e) => setDreamInfo({ ...dreamInfo, name: e.target.value })} />
        <label> Date:</label>
        <input type="date" name="date" required value={dreamInfo.date} onChange={(e) => setDreamInfo({ ...dreamInfo, date: e.target.value })} /><br />
        <label> Dream:</label><br />
        <textarea name="dream" required value={dreamInfo.dream} onChange={(e) => setDreamInfo({ ...dreamInfo, dream: e.target.value })} /><br />
        <button type="submit">Submit</button>
      </form>
      <button>Cancel</button>
    </div>
  );
}

export default DreamForm;
