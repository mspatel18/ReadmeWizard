import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
import "../styles/CreateReadme.css";
export default function CreateReadme() {
    const [name, setName] = useState("");
    const [subtitle,setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [portfolioLink, setPortfolioLink] = useState("https://");
    const [currentlyWorking, setCurrentlyWorking] = useState("");
    const [currentlyWorkingLink, setCurrentlyWorkingLink] = useState("https://");
    const [email, setEmail] = useState("");
    const [currentlyLearning, setCurrentlyLearning] = useState("");
    const [collaborateOn, setCollaborateOn] = useState("");
    const [funFact, setFunFact] = useState("");
    const [badgeStyle, setBadgeStyle] = useState("badge");  
    const [githubUsername, setGithubUsername] = useState("");
    const [twitterUsername, setTwitterUsername] = useState("");
    const [linkedinUsername, setLinkedinUsername] = useState("");
    const [instagramUsername, setInstagramUsername] = useState("");
    const [leetcodeUsername, setLeetcodeUsername] = useState("");
    
    const markdowntext = `${name ? `# Hi 👋 I am ${name}` : ""}
${subtitle ? `## ${subtitle}`: ""}
${description ? `${description}`: ""}
${location ? `* 🌍  I'm based in ${location}`:""}
${portfolio && portfolioLink ? `* 🖥️  See my portfolio at [${portfolio}](${portfolioLink})`:""}
${currentlyWorking && currentlyWorkingLink ? `* 👨‍💻  I'm currently working on [${currentlyWorking}](${currentlyWorkingLink})`:""}
${email ? `* ✉️  You can reach me at [${email}](mailto:${email})`:""}
${currentlyLearning ? `* 🧠  I'm currently learning ${currentlyLearning}`:""}
${collaborateOn ? `* 🤝  I'm open to collaborating on ${collaborateOn}`:""}
${funFact ? `* ⚡ Fun fact: ${funFact}`:""}


${githubUsername ? `[![GitHub Follow](https://img.shields.io/github/followers/${githubUsername}?label=Github&style=${badgeStyle}&logo=github)](https://github.com/${githubUsername})`:""}
${twitterUsername ? `[![Twitter Follow](https://img.shields.io/badge/Twitter-grey?style=${badgeStyle}&logo=twitter)](https://twitter.com/${twitterUsername})`:""}
${linkedinUsername ? `[![Linkedin](https://img.shields.io/badge/-Linkedin-blue?style=${badgeStyle}&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/${linkedinUsername}/)`:""}
${instagramUsername ? `[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=${badgeStyle}&logo=instagram&logoColor=white)](https://instagram.com/${instagramUsername})`:""}
${leetcodeUsername ? `[![Leetcode](https://img.shields.io/badge/-LeetCode-FFA116?style=${badgeStyle}&logo=LeetCode&logoColor=black)](https://leetcode.com/${leetcodeUsername}/)`:""}
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
      <div className="wrapper">
        <div  className="input-container">
          <div className="section-title">Introduction</div>
          <div className="input-title">Hi 👋 I am:</div>
          <input placeholder="Name"  onChange={(e) => setName(e.target.value)}  style={{width:"50",display:"inline"}}/>
          <div className="input-title">🔉Subtitle:</div>
          <input placeholder="Web Developer and Designer" onChange={(e) => setSubtitle(e.target.value)}/>
          <div className="input-title">Description</div>  
          <input placeholder="eg. I'm in my 2nd year of college trying my hands at coding, graphic design, and 3d modeling" onChange={(e) => setDescription(e.target.value)}/>
          <div className="section-title">About Me</div>
          <div className="input-title">🌍 I'm based in:</div>
          <input placeholder="India " onChange={(e) => setLocation(e.target.value)}/>
          <div className="input-title">🖥️ See my portfolio at:</div>
          <input placeholder="MyPortfolio " onChange={(e) => setPortfolio(e.target.value)}/>
          <input placeholder="https://myportfolio.com" value={portfolioLink}  onChange={(e) => setPortfolioLink(e.target.value)}/>
          <div className="input-title">🚀 I'm currently working on:</div>
          <input type="url" placeholder="E-commerce web-app" onChange={(e) => setCurrentlyWorking(e.target.value)}/>
          <input placeholder="https://projectlink.com" value={currentlyWorkingLink} onChange={(e)=>setCurrentlyWorkingLink(e.target.value)}/>
          <div className="input-title">✉️ How to reach me at:</div>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <div className="input-title">🧠 I'm currently learning:</div>
          <input placeholder="React" onChange={(e) => setCurrentlyLearning(e.target.value)}/>
          <div className="input-title">👨‍💻 I'm looking to collaborate on:</div>
          <input placeholder="intersting projects" onChange={(e) => setCollaborateOn(e.target.value)}/>
          <div className="input-title">⚡ Fun Fact</div>
          <input placeholder="I think I am funny" onChange={(e) => setFunFact(e.target.value)}/>
          <div className="section-title">Socials
          <select name="Style" onChange={(e)=> setBadgeStyle(e.target.value)} style={{display:"inline",marginLeft:"10px"}} id="">
              <option value="flat">Flat</option>
              <option value="flat-square">Flat Square</option>
              <option value="plastic">Plastic</option>
              <option value="for-the-badge">For the Badge</option>
            </select>
          </div>
            
          <div className="socials">
            <div className="input-title social-desc"><img className="social-img" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="Github" /> Github: <input placeholder="username" onChange={(e)=>setGithubUsername(e.target.value)}/></div>
            <div className="input-title social-desc"><img className="social-img" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="Instagram" /> Instagram: <input placeholder="username" onChange={(e)=>setInstagramUsername(e.target.value)}/></div>
            <div className="input-title social-desc"><img className="social-img" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="Twitter" /> Twitter: <input placeholder="username" onChange={(e)=>setTwitterUsername(e.target.value)}/></div>
            <div className="input-title social-desc"><img className="social-img" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="Linkedin" /> Linkedin: <input placeholder="username" onChange={(e)=>setLinkedinUsername(e.target.value)}/></div>
            <div className="input-title social-desc"><img className="social-img" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/leetcode.svg" alt="Leetcode" /> Leetcode: <input placeholder="username" onChange={(e)=>setLeetcodeUsername(e.target.value)}/></div>
          </div>
        </div>
        <div className="markdown-container">
          <MarkdownView markdown={markdowntext} options={{ tables: true, emoji: true }} />
        </div>
      </div>
    </>
    )
}