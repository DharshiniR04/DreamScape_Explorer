import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Dream.css';
import Audio from '../assets/dream-audio.mp3';
import Video from '../assets/Dream.mp4';

function Dream() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('./login');
    };

    const goToSignup = () => {
        navigate('./signup');
    };

    return (
        <div>
            <audio autoPlay>
                <source src={Audio} type="audio/mp3" />
            </audio>
            <video autoPlay muted loop>
                <source src={Video} />
            </video>
            <div id='Main'>
                <h2>DreamScape Explorer</h2>
                <div id='btn'>
                    <button onClick={goToLogin}>Login</button>
                    <button onClick={goToSignup}>Signup</button>
                </div>
            </div>
        </div>
    );
}

export default Dream;
