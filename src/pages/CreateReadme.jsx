import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
import "../styles/CreateReadme.css";
import {
    CNavbar,
    CContainer,
    CNavbarBrand,
    CNavbarNav,
    CFormInput,
    CFormText,
} from "@coreui/react";
export default function CreateReadme() {
    const [name, setName] = useState("");
    const [subtitle,setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [portfolioLink, setPortfolioLink] = useState("");
    const markdowntext = `
    
${name ? `
Hi 👋 I am ${name}
===========================` : ""}

${subtitle ? `
${subtitle}
--------------------------------------------`: ""}
${description ? `
${description}` : ""}
${location ? `* 🌍  I'm based in ${location}`:""}
${portfolio && portfolioLink ? `* 🖥️  See my portfolio at [${portfolio}](${portfolioLink})`:""}
* ✉️  You can contact me at [mannpatel3118@gmail.com](mailto:mannpatel3118@gmail.com)
* 🧠  I'm currently learning DSA & React
* 🤝  I'm open to collaborating on interesting projects

[![Twitter Follow](https://img.shields.io/twitter/follow/Mspatel_18?label=Follow)](https://twitter.com/Mspatel_18)
[![GitHub Follow](https://img.shields.io/github/followers/mspatel18?label=Follow&style=social)](https://github.com/mspatel18)
[![Linkedin](https://img.shields.io/badge/-Linkedin-blue?style=badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mspatel18/)](https://www.linkedin.com/in/mspatel18/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=badge&logo=instagram&logoColor=white)](https://instagram.com/mspatel18)
[![Leetcode](https://img.shields.io/badge/-LeetCode-FFA116?style=badge&logo=LeetCode&logoColor=black)](https://leetcode.com/mspatel18/)
[![website](https://img.shields.io/badge/Portfolio-46a2f1.svg?&style=badge&logo=Google-Chrome&logoColor=black&link=https://mspatel18-threejs.netlify.app/)](https://mspatel18-threejs.netlify.app/)
### Skills


<p align="left">
<a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" width="36" height="36" alt="C" /></a>
<a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg" width="36" height="36" alt="C++" /></a>
<a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="36" height="36" alt="Java" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
<a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="36" height="36" /></a>
<a href="https://www.adobe.com/uk/products/illustrator.html" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="36" height="36" /></a>
<a href="https://www.adobe.com/uk/products/aftereffects.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aftereffects-colored-dark.svg" width="36" height="36" alt="After Effects" /></a>
<a href="https://www.adobe.com/uk/products/premiere.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/premierepro-colored-dark.svg" width="36" height="36" alt="Premiere Pro" /></a>
<a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a>
 <a href="https://www.blender.org/" target="_blank" rel="noreferrer"> <img src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="blender" width="36" height="36"/> </a>
</p>


### Badges

<b>My GitHub Stats</b>


<a href="http://www.github.com/mspatel18"><img src="https://github-readme-streak-stats.herokuapp.com/?user=mspatel18&stroke=ffffff&background=1c1917&ring=0891b2&fire=0891b2&currStreakNum=ffffff&currStreakLabel=0891b2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true" /></a>
<a href="https://github.com/mspatel18" align="right"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mspatel18&langs_count=3&title_color=0891b2&text_color=ffffff&icon_color=0891b2&area=true&bg_color=1c1917&hide_border=true&locale=en&custom_title=Top%20%Three%20%Languages%20%Used" alt="Top 3 Languages" /></a>

`
    const navigate = useNavigate();
    return(
        <>
        <CNavbar colorScheme="dark" style={{backgroundColor:"#19191B"}} >
        <CContainer fluid>
          <CNavbarBrand href="#">ReadmeWizard</CNavbarBrand>
          {/* profile */}
            <CNavbarNav>  
            <a target="_blank"  href="https://github.com/mspatel18">Github</a>
            </CNavbarNav>
        </CContainer >
      </CNavbar>
      <CContainer fluid className="wrapper">

      <CContainer  className="input-container">
        <div className="section-title">Introduction</div>
      <div className="input-title">Hi 👋 I am</div>
      <CFormInput placeholder="Name"  onChange={(e) => setName(e.target.value)}  style={{width:"50",display:"inline"}}/>
      <div className="input-title">🔉Subtitle</div>
      <CFormInput placeholder="Web Developer and Designer" onChange={(e) => setSubtitle(e.target.value)}/>
        <div className="input-title">Description</div>  
        <CFormInput placeholder="eg. I'm in my 2nd year of college trying my hands at coding, graphic design, and 3d modeling" onChange={(e) => setDescription(e.target.value)}/>
        <div className="section-title">About Me</div>
        <div className="input-title">🌍 I'm based in</div>
        <CFormInput placeholder="eg. India " onChange={(e) => setLocation(e.target.value)}/>
        <div className="input-title">🖥️ See my portfolio at</div>
        <CFormInput placeholder="MyPortfolio " onChange={(e) => setPortfolio(e.target.value)}/>
        <CFormInput placeholder="https://myportfolio.com"  onChange={(e) => setPortfolioLink(e.target.value)}/>
      </CContainer>
      <CContainer className="markdown-container">
      <MarkdownView markdown={markdowntext} options={{ tables: true, emoji: true }} />
    </CContainer>
      </CContainer>
        </>
    )
}