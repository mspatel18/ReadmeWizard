import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";
export default function Landing() {
    const navigate = useNavigate();
    return(
        <>
            <div className="landing">
                <header>
                    <h2>ReadmeWizard</h2>
                    <div>
                        <a href="http://github.com/mspatel18" target="_blank">Github</a>
                        <a href="" onClick={()=>navigate("/create-readme")}>Create</a>
                    </div>
                </header>            
                <div className="landing-center">
                    <div className="landing-left">

                    <div className="main-title">
                        Creating Profile Readme is now easy
                    </div>
                    <p>
                        ReadmeWizard is a tool to create readme for your profile. It is easy to use and you can create readme in just few clicks.
                    </p>
                <button id="start" onClick={()=>navigate("/create-readme")}>Create Readme</button>
                    </div>
                    
                        <img src="Landing.jpg" alt="landing" />
                    
                </div>
            </div>
        </>
    )
}