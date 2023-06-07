import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
import "../styles/CreateReadme.css";
export default function CreateReadme() {
  const [introductionData, setIntroductionData] = useState({
    name: "",
    subtitle: "",
    description: "",
  });
  const [aboutData, setAboutData] = useState({
    location: "",
    portfolio: "",
    portfolioLink: "https://",
    currentlyWorking: "",
    currentlyWorkingLink: "https://",
    email: "",
    currentlyLearning: "",
    collaborateOn: "",
    funFact: "",
  })
    const [badgeStyle, setBadgeStyle] = useState("badge");  
    const [social, setSocial] = useState({
      githubUsername: "",
      twitterUsername: "",
      codepenUsername: "",
      instagramUsername: "",
      linkedinUsername: "",
      leetcodeUsername: "",
      codechefUsername: "",
      codesandboxUsername: "",
      stackoverflowUsername: "",
      kaggleUsername: "",
      dribbbleUsername: "",
      behanceUsername: "",
      mediumUsername: "",
      devdottoUsername: "",
      youtubeUsername: "",
      hackerrankUsername: "",
      codeforcesUsername: "",
      hackerearthUsername: "",
      geeksforgeeksUsername: "",
    });
    
    const markdowntext = `${introductionData.name ? `# Hi 👋 I am ${introductionData.name}\n` : ""}${introductionData.subtitle ? `## ${introductionData.subtitle}\n`: ""}${introductionData.description ? `${introductionData.description}\n`: ""}${aboutData.location ? `* 🌍  I'm based in ${aboutData.location}\n`:""}${aboutData.portfolio && aboutData.portfolioLink ? `* 🖥️  See my portfolio at [${aboutData.portfolio}](${aboutData.portfolioLink})\n`:""}${aboutData.currentlyWorking && aboutData.currentlyWorkingLink ? `* 👨‍💻  I'm currently working on [${aboutData.currentlyWorking}](${aboutData.currentlyWorkingLink})\n`:""}${aboutData.email ? `* ✉️  You can reach me at [${aboutData.email}](mailto:${aboutData.email})\n`:""}${aboutData.currentlyLearning ? `* 🧠  I'm currently learning ${aboutData.currentlyLearning}\n`:""}${aboutData.collaborateOn ? `* 🤝  I'm open to collaborating on ${aboutData.collaborateOn}\n`:""}${aboutData.funFact ? `* ⚡ Fun fact: ${aboutData.funFact}`:""}

${social.githubUsername ? `[![GitHub Follow](https://img.shields.io/badge/GitHub-100000?style=${badgeStyle}&logo=github&logoColor=white)](https://github.com/${social.githubUsername})`:""}
${social.twitterUsername ? `[![Twitter Follow](https://img.shields.io/badge/Twitter-1DA1F2?style=${badgeStyle}&logo=twitter&logoColor=white)](https://twitter.com/${social.twitterUsername})`:""}
${social.codepenUsername ? `[![Codepen](https://img.shields.io/badge/Codepen-000000?style=${badgeStyle}&logo=codepen&logoColor=white)](https://codepen.io/${social.codepenUsername})`:""}
${social.stackoverflowUsername ? `[![Stackoverflow](https://img.shields.io/badge/Stackoverflow-FE7A16?style=${badgeStyle}&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/${social.stackoverflowUsername})`:""}
${social.codesandboxUsername ? `[![Codesandbox](https://img.shields.io/badge/Codesandbox-000000?style=${badgeStyle}&logo=codesandbox&logoColor=white)](https://codesandbox.io/${social.codesandboxUsername})`:""}
${social.kaggleUsername ? `[![Kaggle](https://img.shields.io/badge/Kaggle-20BEFF?style=${badgeStyle}&logo=kaggle&logoColor=white)](https://kaggle.com/${social.kaggleUsername})`:""}
${social.linkedinUsername ? `[![Linkedin](https://img.shields.io/badge/-Linkedin-blue?style=${badgeStyle}&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/${social.linkedinUsername}/)`:""}
${social.instagramUsername ? `[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=${badgeStyle}&logo=instagram&logoColor=white)](https://instagram.com/${social.instagramUsername})`:""}
${social.dribbbleUsername ? `[![Dribble](https://img.shields.io/badge/Dribbble-EA4C89?style=${badgeStyle}&logo=dribbble&logoColor=white)](https://dribbble.com/${social.dribbbleUsername})`:""}
${social.behanceUsername ? `[![Behance](https://img.shields.io/badge/Behance-1769FF?style=${badgeStyle}&logo=behance&logoColor=white)](https://behance.net/${social.behanceUsername})`:""}
${social.mediumUsername ? `[![Medium](https://img.shields.io/badge/Medium-12100E?style=${badgeStyle}&logo=medium&logoColor=white)](https://medium.com/${social.mediumUsername})`:""}
${social.devdottoUsername ? `[![Dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?style=${badgeStyle}&logo=devdotto&logoColor=white)](https://dev.to/${social.devdottoUsername})`:""}
${social.youtubeUsername ? `[![Youtube](https://img.shields.io/badge/Youtube-FF0000?style=${badgeStyle}&logo=youtube&logoColor=white)](https://youtube.com/@${social.youtubeUsername})`:""}
${social.leetcodeUsername ? `[![Leetcode](https://img.shields.io/badge/-LeetCode-FFA116?style=${badgeStyle}&logo=LeetCode&logoColor=black)](https://leetcode.com/${social.leetcodeUsername}/)`:""}
${social.codechefUsername ? `[![Codechef](https://img.shields.io/badge/Codechef-%23B92B27.svg?&style=${badgeStyle}&logo=Codechef&logoColor=white)](https://www.codechef.com/users/${social.codechefUsername})`:""}
${social.hackerrankUsername ? `[![Hackerrank](https://img.shields.io/badge/Hackerrank-2EC866?style=${badgeStyle}&logo=Hackerrank&logoColor=white)](https://www.hackerrank.com/${social.hackerrankUsername})`:""}
${social.codeforcesUsername ? `[![Codeforces](https://img.shields.io/badge/Codeforces-445f9d?style=${badgeStyle}&logo=Codeforces&logoColor=white)](https://codeforces.com/profile/${social.codeforcesUsername})`:""}
${social.hackerearthUsername ? `[![Hackerearth](https://img.shields.io/badge/HackerEarth-%232C3454.svg?&style=${badgeStyle}&logo=HackerEarth&logoColor=Blue)](https://www.hackerearth.com/${social.hackerearthUsername})`:""}
${social.geeksforgeeksUsername ? `[![Geeksforgeeks](https://img.shields.io/badge/GeeksforGeeks-298D46?&style=${badgeStyle}&logo=GeeksforGeeks&logoColor=white)](https://auth.geeksforgeeks.org/user/${social.geeksforgeeksUsername})`:""}


`

const introductionFields=[
  { label: "Hi 👋 I am:", name: "name", placeholder: "Name" },
  { label: "🔉 Subtitle:", name: "subtitle", placeholder: "Web Developer and Designer" },
  { label: "Description:", name: "description", placeholder: "eg. I'm in my 2nd year of college trying my hands at coding, graphic design, and 3D modeling" },
]
const aboutFields = [
  { label: "🌍 I'm based in:", name: "location", placeholder: "India" },
  { label: "🖥️ See my portfolio at:", name: "portfolio", placeholder: "My Portfolio" },
  { label: "Portfolio link:", name: "portfolioLink", placeholder: "https://myportfolio.com" },
  { label: "🚀 I'm currently working on:", name: "currentlyWorking", placeholder: "E-commerce web-app" },
  { label: "Current project link:", name: "currentlyWorkingLink", placeholder: "https://projectlink.com" },
  { label: "✉️ How to reach me at:", name: "email", placeholder: "Email" },
  { label: "🧠 I'm currently learning:", name: "currentlyLearning", placeholder: "React" },
  { label: "👨‍💻 I'm looking to collaborate on:", name: "collaborateOn", placeholder: "interesting projects" },
  { label: "⚡ Fun Fact:", name: "funFact", placeholder: "I think I am funny" },
  // Add more fields as needed...
];
const socialMediaPlatforms = [
  { name: "Github", icon: "github", key: "githubUsername" },
  { name: "Twitter", icon: "twitter", key: "twitterUsername" },
  { name: "Codepen", icon: "codepen", key: "codepenUsername" },
  { name: "Stackoverflow", icon: "stackoverflow", key: "stackoverflowUsername" },
  { name: "Codesandbox", icon: "codesandbox", key: "codesandboxUsername" },
  { name: "Kaggle", icon: "kaggle", key: "kaggleUsername" },
  { name: "Linkedin", icon: "linkedin", key: "linkedinUsername" },
  { name: "Instagram", icon: "instagram", key: "instagramUsername" },
  { name: "Dribbble", icon: "dribbble", key: "dribbbleUsername" },
  { name: "Behance", icon: "behance", key: "behanceUsername" },
  { name: "Medium", icon: "medium", key: "mediumUsername" },
  { name: "LeetCode", icon: "leetcode", key: "leetcodeUsername" },
  { name: "Codechef", icon: "codechef", key: "codechefUsername" },
  { name: "Dev.to", icon: "devdotto", key: "devdottoUsername"},
  { name: "Youtube", icon: "youtube", key: "youtubeUsername" },
  { name: "Hackerrank", icon: "hackerrank", key: "hackerrankUsername" },
  { name: "Codeforces", icon: "codeforces", key: "codeforcesUsername" },
  { name: "Hackerearth", icon: "hackerearth", key: "hackerearthUsername" },
  { name: "GeeksForGeeks", icon: "geeksforgeeks", key: "geeksforgeeksUsername" },
];
const renderIntroductionFields = () => {
  return introductionFields.map((field) => (
    <>
    <div className="input-title" key={field.name}>
      {field.label}
      </div>
      <input
        name={field.name}
        placeholder={field.placeholder}
        value={aboutData[field.name]}
        onChange={handleInputChange}
      />
    </>
  ));
};
const renderAboutFields = () => {
  return aboutFields.map((field) => (
    <>
    <div className="input-title" key={field.name}>
      {field.label}
      </div>
      <input
        name={field.name}
        placeholder={field.placeholder}
        value={aboutData[field.name]}
        onChange={handleAboutInputChange}
      />
    </>
  ));
};

const renderSocialInputs = () => {
  return socialMediaPlatforms.map((platform) => (
    <div className="input-title social-desc" key={platform.key}>
      <img className="social-img" src={`https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/${platform.icon}.svg`} alt={platform.name} />
      {`${platform.name}: `}
      <input
        placeholder="username"
        name={platform.key}
        value={social[platform.key]}
        onChange={(e) => handleSocialInputChange(e, platform.key)}
      />
    </div>
  ));
};
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setIntroductionData((prevData) => ({ ...prevData, [name]: value }));
};
const handleAboutInputChange = (e) => {
  const { name, value } = e.target;
  setAboutData((prevData) => ({ ...prevData, [name]: value }));
};
const handleSocialInputChange = (event) => {
  const { name, value } = event.target;
  setSocial((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
    const navigate = useNavigate();
    return(
    <>
      <div className="wrapper">
        <div  className="input-container">
          <div className="section-title">Introduction</div>
          {renderIntroductionFields()}
          <div className="section-title">About Me</div>
          {renderAboutFields()}
          <div className="section-title">Socials
          <select name="Style" onChange={(e)=> setBadgeStyle(e.target.value)} className="badge-select">
              <option value="flat">Flat</option>
              <option value="flat-square">Flat Square</option>
              <option value="plastic">Plastic</option>
              <option value="for-the-badge">For the Badge</option>
            </select>
          </div>
          <div className="socials">
            {renderSocialInputs()}
          </div>  
        <div className="section-title">Skills</div>
        <button className="skill-button"><img src="https://cdn.simpleicons.org/angularjs/E23237" alt="" /></button>
        </div>
        <div className="markdown-container">
          <MarkdownView markdown={markdowntext} options={{ tables: true, emoji: true }} />
          {/* <textarea name="" id="" cols="30" rows="10">{markdowntext}</textarea> */}
        </div>
      </div>
    </>
    )
}