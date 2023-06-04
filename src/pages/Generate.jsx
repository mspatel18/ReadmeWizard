import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CForm,
  CFormInput,
  CButton,
  CNavGroupItems,
  CCard,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import MarkdownView from "react-showdown";
import TechStackForm from "./TechStackForm";
import "../styles/Generate.css";

export default function Generate() {
  const [name, setName] = useState("Hello");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectedOptions = (options) => {
    setSelectedOptions(options);
  };

  const generateBadgeUrl = (techStack) => {
    const { name, logo } = techStack;
    return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo}/${logo}-original.svg" alt="${name}" width="36" height="36"/>`;
  };

  const generateTechStackBadges = () => {
    return selectedOptions.map((option) => {
      const techStack = techStackOptions.find((stack) => stack.name === option);
      if (techStack) {
        return generateBadgeUrl(techStack);
      }
      return null;
    }).filter((badge) => badge !== null);
  };

  const techStackOptions = [
    { name: "React", logo: "react" },
    { name: "Angular", logo: "angularjs" },
    { name: "Vue.js", logo: "vuejs" },
    { name: "Node.js", logo: "nodejs" },
    { name: "Express.js", logo: "express" },
    { name: "MongoDB", logo: "mongodb" },
    // Add more tech stack options here
  ];

  const techStackBadges = generateTechStackBadges();

  const markdowntext = `
# ${name}
[![Twitter Follow](https://img.shields.io/twitter/follow/Mspatel_18?label=Follow)](https://twitter.com/Mspatel_18)
Tech Stack:

${techStackBadges.join(" ")}
  `;

  const navigate = useNavigate();

  return (
    <>
      <CNavbar colorScheme="dark" className="bg-black">
        <CContainer fluid>
          <CNavbarBrand href="#">ReadmeWizard</CNavbarBrand>
        </CContainer>
      </CNavbar>
      <TechStackForm
        handleSelectedOptions={handleSelectedOptions}
        techStackOptions={techStackOptions}
      />
      
      <div className="result">
        <MarkdownView markdown={markdowntext} options={{ tables: true, emoji: true }} />
      </div>
    </>
  );
}
