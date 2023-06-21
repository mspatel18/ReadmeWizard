import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Creating Github Profile never made so easy </h1>
          <p>
            Readme Wizard helps you to create a readme file for your github
            profile easily and quickly.
          </p>
          <button onClick={() => navigate("/create")}>Create Profile</button>
        </div>
      </div>
    </>
  );
}
