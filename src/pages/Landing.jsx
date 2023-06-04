import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Generate() {
    const navigate = useNavigate();
    return(
        <>
            <h2>Landing</h2>
            <button id="start" onClick={()=>navigate("/generate")}>Start New</button>
        </>
    )
}