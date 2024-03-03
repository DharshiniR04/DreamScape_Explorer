import React, { useEffect, useState } from "react";
import DreamForm from "./DreamForm";
import DreamList from "./DreamList";
import Navbar from "./Navbar";
import Footer from "./Footer";

function List(email) {
    const [viewDreams, setViewDreams] = useState(false); 

    const handleButtonClick = () => {
        setViewDreams(false);
    };

    const handleViewDreams = () => {
        setViewDreams(true); 
    };


    useEffect(()=>{
       console.log("list",email);
    },[]);
    return (
        <div>
            <Navbar onAddDream={handleButtonClick} onViewDreams={handleViewDreams} />
            {!viewDreams && (
                <DreamForm Email={email}/>
            )}
            {viewDreams && <DreamList Email={email}/>}
            <Footer />
        </div>
    );
}

export default List;
