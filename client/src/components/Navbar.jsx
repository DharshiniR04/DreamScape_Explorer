import React from "react";
import '../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


function Navbar({ onAddDream, onViewDreams }){
    const navigate=useNavigate();
    function handleHome(){
        navigate('../');
    }
    return(
        <div>
            <div id="Nav">
                 <h1>DreamScape Explorer</h1>
                 <button onClick={onAddDream}><FontAwesomeIcon icon={faPlus} /></button>
                 <button onClick={onViewDreams}>View Dreams</button>
                 <button onClick={handleHome}>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;