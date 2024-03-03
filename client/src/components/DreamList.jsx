import React, { useEffect, useState } from "react";
import '../css/DreamList.css';
import axios from "axios";

function DreamList(Email) {
    const [dreams, setDreams] = useState([]);
    const [loading, setLoading] = useState(true);
    const[email,setEmail]=useState('');
    useEffect(()=>{
      setEmail(Email.Email.email);
    },[email]);

    useEffect(() => {
      const fetchDreams = async () => {
        try {
          console.log("Email:", email);  
          const response = await axios.post("http://localhost:5000/dreams", { email });
          console.log(response);
          setDreams(response.data);
        } catch (error) {
          console.error("Error fetching dreams:", error);
        } finally {
          setLoading(false);
        }
      };
    
      if (email) {
        fetchDreams();
      }
    }, [email]);
  
    return (
        <div id="dreamlist">
        <h2>Your Dreams</h2>
        {loading ? (
          <p>Loading dreams...</p>
        ) : dreams.length === 0 ? (
          <p>No dreams found.</p>
        ) : (
          <ul>
            {dreams.map((dream) => (
              <li key={dream._id}>
                <p>Name: {dream.name}</p>
                <p>Date: {dream.date}</p>
                <p>Dream: {dream.dream}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default DreamList;
