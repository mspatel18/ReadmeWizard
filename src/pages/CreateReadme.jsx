import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
import "../styles/CreateReadme.css";
export default function CreateReadme() {
  const [activeSection, setActiveSection] = useState('preview');
  const [introductionData, setIntroductionData] = useState({});
  const [aboutData, setAboutData] = useState({})
    const [badgeStyle, setBadgeStyle] = useState("badge");  
    const [social, setSocial] = useState({});
    const [skills, setSkills] = useState({});
    const isAnySkillTrue = Object.values(skills).some((skill) => skill);
    const [githubStatsTheme, setGithubStatsTheme] = useState("tokyonight");
    const [markdowntext, setMarkdownText] = useState("")
    const introductionFields=[
      { label: "Hi 👋 I am:", name: "name", placeholder: "Name" },
      { label: "🔉 Subtitle:", name: "subtitle", placeholder: "Web Developer and Designer" },
      { label: "Description:", name: "description", placeholder: "Description" },
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
    ];
    const socialMediaPlatforms = [
      { name: "Github", icon: "github", key: "githubUsername", color: "100000", link: `https://github.com/${social.githubUsername}` },
      { name: "Twitter", icon: "twitter", key: "twitterUsername", color: "1DA1F2", link: `https://twitter.com/${social.twitterUsername}` },
      { name: "Codepen", icon: "codepen", key: "codepenUsername", color: "000000", link: `https://codepen.io/${social.codepenUsername}` },
      { name: "Stackoverflow", icon: "stackoverflow", key: "stackoverflowUsername", color: "FE7A16", link: `https://stackoverflow.com/users/${social.stackoverflowUsername}` },
      { name: "Codesandbox", icon: "codesandbox", key: "codesandboxUsername", color: "000000", link: `https://codesandbox.io/${social.codesandboxUsername}` },
      { name: "Kaggle", icon: "kaggle", key: "kaggleUsername", color: "20BEFF", link: `https://kaggle.com/${social.kaggleUsername}` },
      { name: "Linkedin", icon: "linkedin", key: "linkedinUsername", color: "0077B5", link: `https://www.linkedin.com/in/${social.linkedinUsername}/` },
      { name: "Instagram", icon: "instagram", key: "instagramUsername", color: "E4405F", link: `https://instagram.com/${social.instagramUsername}` },
      { name: "Dribbble", icon: "dribbble", key: "dribbbleUsername", color: "EA4C89", link: `https://dribbble.com/${social.dribbbleUsername}` },
      { name: "Behance", icon: "behance", key: "behanceUsername", color: "1769FF", link: `https://behance.net/${social.behanceUsername}` },
      { name: "Medium", icon: "medium", key: "mediumUsername", color: "12100E", link: `https://medium.com/${social.mediumUsername}` },
      { name: "LeetCode", icon: "leetcode", key: "leetcodeUsername", color: "FFA116", link: `https://leetcode.com/${social.leetcodeUsername}/` },
      { name: "Codechef", icon: "codechef", key: "codechefUsername", color: "B92B27", link: `https://www.codechef.com/users/${social.codechefUsername}` },
      { name: "Dev.to", icon: "devdotto", key: "devdottoUsername", color: "0A0A0A", link: `https://dev.to/${social.devdottoUsername}` },
      { name: "Youtube", icon: "youtube", key: "youtubeUsername", color: "FF0000", link: `https://youtube.com/@${social.youtubeUsername}` },
      { name: "Hackerrank", icon: "hackerrank", key: "hackerrankUsername", color: "2EC866", link: `https://www.hackerrank.com/${social.hackerrankUsername}` },
      { name: "Codeforces", icon: "codeforces", key: "codeforcesUsername", color: "445f9d", link: `https://codeforces.com/profile/${social.codeforcesUsername}` },
      { name: "Hackerearth", icon: "hackerearth", key: "hackerearthUsername", color: "2C3454", link: `https://www.hackerearth.com/${social.hackerearthUsername}` },
      { name: "GeeksForGeeks", icon: "geeksforgeeks", key: "geeksforgeeksUsername", color: "298D46", link: `https://auth.geeksforgeeks.org/user/${social.geeksforgeeksUsername}` },
    ];
    const coreSkillFields = [
      {name:"c",label:"C", icon:"c",iconStyle:"original",link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170"},
      {name:"cplus",label:"C++", icon:"cplusplus",iconStyle:"original",link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170"},
      {name:"csharp",label:"C#",icon:"csharp",iconStyle:"original",link: "https://docs.microsoft.com/en-us/dotnet/csharp/"},
      {name:"go",label:"Go", icon:"go",iconStyle:"original",link: "https://golang.org/doc/"},
      {name:"java",label:"Java", icon:"java",iconStyle:"original",link: "https://docs.oracle.com/en/java/"},
      {name:"javascript",label:"Javascript", icon:"javascript",iconStyle:"original",link: "https://www.javascript.com/",},
      {name:"typescript",label:"Typescript", icon:"typescript",iconStyle:"original",link: "https://www.typescriptlang.org/"},
      {name:"php",label:"PHP", icon:"php",iconStyle:"original",link: "https://www.php.net/"},
      {name:"perl",label:"Perl", icon:"perl",iconStyle:"original",link: "https://www.perl.org/"},
      {name:"ruby",label:"Ruby", icon:"ruby",iconStyle:"original",link: "https://www.ruby-lang.org/en/"},
      {name:"scala",label:"Scala", icon:"scala",iconStyle:"original",link: "https://www.scala-lang.org/"},
      {name:"swift",label:"Swift", icon:"swift",iconStyle:"original",link: "https://developer.apple.com/swift/"},
      {name:"python",label:"Python", icon:"python",iconStyle:"original",link: "https://www.python.org/"},
      {name:"rust",label:"Rust", icon:"rust",iconStyle:"plain",link: "https://www.rust-lang.org/"},
      {name:"haskell",label:"Haskell", icon:"haskell",iconStyle:"original",link: "https://www.haskell.org/"},
      {name:"coffeescript",label:"Coffeescript", icon:"coffeescript",iconStyle:"original",link: "https://coffeescript.org/"},
      {name:"elixir",label:"Elixir", icon:"elixir",iconStyle:"original",link: "https://elixir-lang.org/"},
      {name:"rlang",label:"R", icon:"r",iconStyle:"original",link: "https://www.r-project.org/"},
      {name:"kotlin",label:"Kotlin", icon:"kotlin",iconStyle:"original",link: "https://kotlinlang.org/"},
      {name:"dart",label:"Dart", icon:"dart",iconStyle:"original",link: "https://dart.dev/"},
    ]
    const frontendSkillFields = [
      { name: "html", label: "HTML", icon: "html5", iconStyle: "original", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "css", label: "CSS", icon: "css3", iconStyle: "original", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "sass", label: "Sass", icon: "sass", iconStyle: "original", link: "https://sass-lang.com/" },
      { name: "react", label: "React", icon: "react", iconStyle: "original", link: "https://reactjs.org/" },
      { name: "redux", label: "Redux", icon: "redux", iconStyle: "original", link: "https://redux.js.org/" },
      { name: "nextjs", label: "Next.js", icon: "nextjs", iconStyle: "original", link: "https://nextjs.org/" },
      { name: "vue", label: "Vue", icon: "vuejs", iconStyle: "original", link: "https://vuejs.org/" },
      { name: "angular", label: "Angular", icon: "angularjs", iconStyle: "original", link: "https://angular.io/" },
      { name: "tailwindcss", label: "Tailwind", icon: "tailwindcss", iconStyle: "plain", link: "https://tailwindcss.com/" },
      { name: "nuxtjs", label: "Nuxt.js", icon: "nuxtjs", iconStyle: "original", link: "https://nuxtjs.org/" },
      { name: "gatsby", label: "Gatsby", icon: "gatsby", iconStyle: "original", link: "https://www.gatsbyjs.com/" },
      { name: "svelte", label: "Svelte", icon: "svelte", iconStyle: "original", link: "https://svelte.dev/" },
      { name: "bootstrap", label: "Bootstrap", icon: "bootstrap", iconStyle: "original", link: "https://getbootstrap.com/" },
      { name: "materialui", label: "Material UI", icon: "materialui", iconStyle: "original", link: "https://material-ui.com/" },
      { name: "webpack", label: "Webpack", icon: "webpack", iconStyle: "original", link: "https://webpack.js.org/" },
      { name: "babel", label: "Babel", icon: "babel", iconStyle: "original", link: "https://babeljs.io/" }
    ];    
    const backendSkillFields = [
      {name:"nodejs",label:"Node.js", icon:"nodejs",iconStyle:"original",link: "https://nodejs.org/en/"},
      {name:"express",label:"Express", icon:"express",iconStyle:"original",link: "https://expressjs.com/"},
      {name:"spring",label:"Spring", icon:"spring",iconStyle:"original",link: "https://spring.io/"},
      {name:"graphql",label:"GraphQL", icon:"graphql",iconStyle:"plain",link: "https://graphql.org/"},
      {name:"fastapi",label:"FastAPI", icon:"fastapi",iconStyle:"original",link: "https://fastapi.tiangolo.com/"},
      {name:"mongodb",label:"MongoDB", icon:"mongodb",iconStyle:"original",link: "https://www.mongodb.com/"},
      {name:"mysql",label:"MySQL", icon:"mysql",iconStyle:"original",link: "https://www.mysql.com/"},
      {name:"postgresql",label:"PostgreSQL", icon:"postgresql",iconStyle:"original",link: "https://www.postgresql.org/"},
      {name:"firebase",label:"Firebase", icon:"firebase",iconStyle:"plain",link: "https://firebase.google.com/"},
      {name:"oracle",label:"Oracle", icon:"oracle",iconStyle:"original",link: "https://www.oracle.com/"},
      {name:"redis",label:"Redis", icon:"redis",iconStyle:"original",link: "https://redis.io/"},
      {name:"sqlite",label:"SQLite", icon:"sqlite",iconStyle:"original",link: "https://www.sqlite.org/index.html"},
    ]
    const frameworkSkillFields = [
      {name:"dotnet",label:".NET", icon:"dot-net",iconStyle:"original",link: "https://dotnet.microsoft.com/"},
      {name:"flask",label:"Flask", icon:"flask",iconStyle:"original",link: "https://flask.palletsprojects.com/"},
      {name:"django",label:"Django", icon:"django",iconStyle:"plain",link: "https://www.djangoproject.com/"},
      {name:"laravel",label:"Laravel", icon:"laravel",iconStyle:"plain",link: "https://laravel.com/"},
      {name:"rubyonrails",label:"Ruby on Rails", icon:"ruby",iconStyle:"original",link: "https://rubyonrails.org/"},
    ]
    const otherSkillFields = [
      {name:"illustrator",label:"Adobe Illustrator", icon:"illustrator",iconStyle:"plain",link: "https://www.adobe.com/products/illustrator.html"},
      {name:"photoshop",label:"Adobe Photoshop", icon:"photoshop",iconStyle:"plain",link: "https://www.adobe.com/products/photoshop.html"},
      {name:"xd",label:"Adobe XD", icon:"xd",iconStyle:"plain",link: "https://www.adobe.com/products/xd.html"},
      {name:"figma",label:"Figma", icon:"figma",iconStyle:"original",link: "https://www.figma.com/"},
      {name:"sketch",label:"Sketch", icon:"sketch",iconStyle:"original",link: "https://www.sketch.com/"},
      {name:"aftereffects",label:"Adobe After Effects", icon:"aftereffects",iconStyle:"original",link: "https://www.adobe.com/products/aftereffects.html"},
      {name:"premierepro",label:"Adobe Premiere Pro", icon:"premierepro",iconStyle:"original",link: "https://www.adobe.com/products/premiere.html"},
      {name:"blender",label:"Blender", icon:"blender",iconStyle:"original",link: "https://www.blender.org/"},
      {name:"unity",label:"Unity", icon:"unity",iconStyle:"original",link: "https://unity.com/"},
      {name:"unrealengine",label:"Unreal Engine", icon:"unrealengine",iconStyle:"original",link: "https://www.unrealengine.com/en-US/"},
      {name:"git",label:"Git", icon:"git",iconStyle:"original",link: "https://git-scm.com/"},
      {name:"heroku",label:"Heroku", icon:"heroku",iconStyle:"original",link: "https://www.heroku.com/"},
      {name:"amazonwebservices",label:"Amazon Web Services", icon:"amazonwebservices",iconStyle:"original",link: "https://aws.amazon.com/"},
    ]
    const themes = {
      tokyonight: {
        title_color: "70a5fd",
        icon_color: "bf91f3",
        text_color: "38bdae",
        bg_color: "1a1b27",
      },
      default: {
        title_color: "2f80ed",
        icon_color: "4c71f2",
        text_color: "434d58",
        bg_color: "fffefe",
        border_color: "e4e2e2",
      },
      default_repocard: {
        title_color: "2f80ed",
        icon_color: "586069", // icon color is different
        text_color: "434d58",
        bg_color: "fffefe",
      },
      transparent: {
        title_color: "006AFF",
        icon_color: "0579C3",
        text_color: "417E87",
        bg_color: "ffffff00",
      },
      shadow_red: {
        title_color: "9A0000",
        text_color: "444",
        icon_color: "4F0000",
        border_color: "4F0000",
        bg_color: "ffffff00",
      },
      shadow_green: {
        title_color: "007A00",
        text_color: "444",
        icon_color: "003D00",
        border_color: "003D00",
        bg_color: "ffffff00",
      },
      shadow_blue: {
        title_color: "00779A",
        text_color: "444",
        icon_color: "004450",
        border_color: "004490",
        bg_color: "ffffff00",
      },
      dark: {
        title_color: "fff",
        icon_color: "79ff97",
        text_color: "9f9f9f",
        bg_color: "151515",
      },
      radical: {
        title_color: "fe428e",
        icon_color: "f8d847",
        text_color: "a9fef7",
        bg_color: "141321",
      },
      merko: {
        title_color: "abd200",
        icon_color: "b7d364",
        text_color: "68b587",
        bg_color: "0a0f0b",
      },
      gruvbox: {
        title_color: "fabd2f",
        icon_color: "fe8019",
        text_color: "8ec07c",
        bg_color: "282828",
      },
      gruvbox_light: {
        title_color: "b57614",
        icon_color: "af3a03",
        text_color: "427b58",
        bg_color: "fbf1c7",
      },
      onedark: {
        title_color: "e4bf7a",
        icon_color: "8eb573",
        text_color: "df6d74",
        bg_color: "282c34",
      },
      cobalt: {
        title_color: "e683d9",
        icon_color: "0480ef",
        text_color: "75eeb2",
        bg_color: "193549",
      },
      synthwave: {
        title_color: "e2e9ec",
        icon_color: "ef8539",
        text_color: "e5289e",
        bg_color: "2b213a",
      },
      highcontrast: {
        title_color: "e7f216",
        icon_color: "00ffff",
        text_color: "fff",
        bg_color: "000",
      },
      dracula: {
        title_color: "ff6e96",
        icon_color: "79dafa",
        text_color: "f8f8f2",
        bg_color: "282a36",
      },
      prussian: {
        title_color: "bddfff",
        icon_color: "38a0ff",
        text_color: "6e93b5",
        bg_color: "172f45",
      },
      monokai: {
        title_color: "eb1f6a",
        icon_color: "e28905",
        text_color: "f1f1eb",
        bg_color: "272822",
      },
      vue: {
        title_color: "41b883",
        icon_color: "41b883",
        text_color: "273849",
        bg_color: "fffefe",
      },
      "vue-dark": {
        title_color: "41b883",
        icon_color: "41b883",
        text_color: "fffefe",
        bg_color: "273849",
      },
      "shades-of-purple": {
        title_color: "fad000",
        icon_color: "b362ff",
        text_color: "a599e9",
        bg_color: "2d2b55",
      },
      nightowl: {
        title_color: "c792ea",
        icon_color: "ffeb95",
        text_color: "7fdbca",
        bg_color: "011627",
      },
      buefy: {
        title_color: "7957d5",
        icon_color: "ff3860",
        text_color: "363636",
        bg_color: "ffffff",
      },
      "blue-green": {
        title_color: "2f97c1",
        icon_color: "f5b700",
        text_color: "0cf574",
        bg_color: "040f0f",
      },
      algolia: {
        title_color: "00AEFF",
        icon_color: "2DDE98",
        text_color: "FFFFFF",
        bg_color: "050F2C",
      },
      "great-gatsby": {
        title_color: "ffa726",
        icon_color: "ffb74d",
        text_color: "ffd95b",
        bg_color: "000000",
      },
      darcula: {
        title_color: "BA5F17",
        icon_color: "84628F",
        text_color: "BEBEBE",
        bg_color: "242424",
      },
      bear: {
        title_color: "e03c8a",
        icon_color: "00AEFF",
        text_color: "bcb28d",
        bg_color: "1f2023",
      },
      "solarized-dark": {
        title_color: "268bd2",
        icon_color: "b58900",
        text_color: "859900",
        bg_color: "002b36",
      },
      "solarized-light": {
        title_color: "268bd2",
        icon_color: "b58900",
        text_color: "859900",
        bg_color: "fdf6e3",
      },
      "chartreuse-dark": {
        title_color: "7fff00",
        icon_color: "00AEFF",
        text_color: "fff",
        bg_color: "000",
      },
      nord: {
        title_color: "81a1c1",
        text_color: "d8dee9",
        icon_color: "88c0d0",
        bg_color: "2e3440",
      },
      gotham: {
        title_color: "2aa889",
        icon_color: "599cab",
        text_color: "99d1ce",
        bg_color: "0c1014",
      },
      "material-palenight": {
        title_color: "c792ea",
        icon_color: "89ddff",
        text_color: "a6accd",
        bg_color: "292d3e",
      },
      graywhite: {
        title_color: "24292e",
        icon_color: "24292e",
        text_color: "24292e",
        bg_color: "ffffff",
      },
      "vision-friendly-dark": {
        title_color: "ffb000",
        icon_color: "785ef0",
        text_color: "ffffff",
        bg_color: "000000",
      },
      "ayu-mirage": {
        title_color: "f4cd7c",
        icon_color: "73d0ff",
        text_color: "c7c8c2",
        bg_color: "1f2430",
      },
      "midnight-purple": {
        title_color: "9745f5",
        icon_color: "9f4bff",
        text_color: "ffffff",
        bg_color: "000000",
      },
      calm: {
        title_color: "e07a5f",
        icon_color: "edae49",
        text_color: "ebcfb2",
        bg_color: "373f51",
      },
      "flag-india": {
        title_color: "ff8f1c",
        icon_color: "250E62",
        text_color: "509E2F",
        bg_color: "ffffff",
      },
      omni: {
        title_color: "FF79C6",
        icon_color: "e7de79",
        text_color: "E1E1E6",
        bg_color: "191622",
      },
      react: {
        title_color: "61dafb",
        icon_color: "61dafb",
        text_color: "ffffff",
        bg_color: "20232a",
      },
      jolly: {
        title_color: "ff64da",
        icon_color: "a960ff",
        text_color: "ffffff",
        bg_color: "291B3E",
      },
      maroongold: {
        title_color: "F7EF8A",
        icon_color: "F7EF8A",
        text_color: "E0AA3E",
        bg_color: "260000",
      },
      yeblu: {
        title_color: "ffff00",
        icon_color: "ffff00",
        text_color: "ffffff",
        bg_color: "002046",
      },
      blueberry: {
        title_color: "82aaff",
        icon_color: "89ddff",
        text_color: "27e8a7",
        bg_color: "242938",
      },
      slateorange: {
        title_color: "faa627",
        icon_color: "faa627",
        text_color: "ffffff",
        bg_color: "36393f",
      },
      kacho_ga: {
        title_color: "bf4a3f",
        icon_color: "a64833",
        text_color: "d9c8a9",
        bg_color: "402b23",
      },
      outrun: {
        title_color: "ffcc00",
        icon_color: "ff1aff",
        text_color: "8080ff",
        bg_color: "141439",
      },
      ocean_dark: {
        title_color: "8957B2",
        icon_color: "FFFFFF",
        text_color: "92D534",
        bg_color: "151A28",
      },
      city_lights: {
        title_color: "5D8CB3",
        icon_color: "4798FF",
        text_color: "718CA1",
        bg_color: "1D252C",
      },
      github_dark: {
        title_color: "58A6FF",
        icon_color: "1F6FEB",
        text_color: "C3D1D9",
        bg_color: "0D1117",
      },
      github_dark_dimmed: {
        title_color: "539bf5",
        icon_color: "539bf5",
        text_color: "ADBAC7",
        bg_color: "24292F",
        border_color: "373E47",
      },
      discord_old_blurple: {
        title_color: "7289DA",
        icon_color: "7289DA",
        text_color: "FFFFFF",
        bg_color: "2C2F33",
      },
      aura_dark: {
        title_color: "ff7372",
        icon_color: "6cffd0",
        text_color: "dbdbdb",
        bg_color: "252334",
      },
      panda: {
        title_color: "19f9d899",
        icon_color: "19f9d899",
        text_color: "FF75B5",
        bg_color: "31353a",
      },
      noctis_minimus: {
        title_color: "d3b692",
        icon_color: "72b7c0",
        text_color: "c5cdd3",
        bg_color: "1b2932",
      },
      cobalt2: {
        title_color: "ffc600",
        icon_color: "ffffff",
        text_color: "0088ff",
        bg_color: "193549",
      },
      swift: {
        title_color: "000000",
        icon_color: "f05237",
        text_color: "000000",
        bg_color: "f7f7f7",
      },
      aura: {
        title_color: "a277ff",
        icon_color: "ffca85",
        text_color: "61ffca",
        bg_color: "15141b",
      },
      apprentice: {
        title_color: "ffffff",
        icon_color: "ffffaf",
        text_color: "bcbcbc",
        bg_color: "262626",
      },
      moltack: {
        title_color: "86092C",
        icon_color: "86092C",
        text_color: "574038",
        bg_color: "F5E1C0",
      },
      codeSTACKr: {
        title_color: "ff652f",
        icon_color: "FFE400",
        text_color: "ffffff",
        bg_color: "09131B",
        border_color: "0c1a25",
      },
      rose_pine: {
        title_color: "9ccfd8",
        icon_color: "ebbcba",
        text_color: "e0def4",
        bg_color: "191724",
      },
      date_night: {
        title_color: "DA7885",
        text_color: "E1B2A2",
        icon_color: "BB8470",
        border_color: "170F0C",
        bg_color: "170F0C",
      },
      one_dark_pro: {
        title_color: "61AFEF",
        text_color: "E5C06E",
        icon_color: "C678DD",
        border_color: "3B4048",
        bg_color: "23272E",
      },
      rose: {
        title_color: "8d192b",
        text_color: "862931",
        icon_color: "B71F36",
        border_color: "e9d8d4",
        bg_color: "e9d8d4",
      },
      holi: {
        title_color: "5FABEE",
        text_color: "D6E7FF",
        icon_color: "5FABEE",
        border_color: "85A4C0",
        bg_color: "030314",
      },
    }
    const colors = themes[githubStatsTheme];
    const [githubStatsCard, setGithubStatsCard] = useState(true);
    const [githubLanguagesCard, setGithubLanguagesCard] = useState(true);
    const [githubCommitCard, setGithubCommitCard] = useState(true);
    const [githubGraphCard, setGithubGraphCard] = useState(false);
    const [buymeacoffeeUsername, setBuymeacoffeeUsername] = useState("");
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
    const renderCoreSkillsFields = () => {
      return coreSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderFrontendSkillsFields = () => {
      return frontendSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderBackendSkillsFields = () => {
      return backendSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderFrameworkSkillsFields = () => {
      return frameworkSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderOtherSkillsFields = () => {
      return otherSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderGithubStatsSelect = () => {
      return (
        <select name="Style" onChange={(e) => setGithubStatsTheme(e.target.value)} className="badge-select">
          {Object.keys(themes).map((theme) => (
            <option key={theme} value={theme}>{theme}</option>
          ))}
        </select>
      );
    };
    const handlePreviewClick = () => {
      setActiveSection('preview');
    };
    const handleMarkdownClick = () => {
      setActiveSection('markdown');
    };
    const handleCopyTextClick = () => {
      navigator.clipboard.writeText(markdowntext);
      alert('Markdown text copied!');
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
    
    useEffect(()=>{
      const updatedMarkdown = `${introductionData.name ? `# Hi 👋 I am ${introductionData.name}\n` : ""}${introductionData.subtitle ? `## ${introductionData.subtitle}\n`: ""}${introductionData.description ? `${introductionData.description}\n`: ""}
${aboutData.location ? `* 🌍  I'm based in ${aboutData.location}\n`:""}${aboutData.portfolio && aboutData.portfolioLink ? `* 🖥️  See my portfolio at [${aboutData.portfolio}](${aboutData.portfolioLink})\n`:""}${aboutData.currentlyWorking && aboutData.currentlyWorkingLink ? `* 👨‍💻  I'm currently working on [${aboutData.currentlyWorking}](${aboutData.currentlyWorkingLink})\n`:""}${aboutData.email ? `* ✉️  You can reach me at [${aboutData.email}](mailto:${aboutData.email})\n`:""}${aboutData.currentlyLearning ? `* 🧠  I'm currently learning ${aboutData.currentlyLearning}\n`:""}${aboutData.collaborateOn ? `* 🤝  I'm open to collaborating on ${aboutData.collaborateOn}\n`:""}${aboutData.funFact ? `* ⚡ Fun fact: ${aboutData.funFact}`:""}

${socialMediaPlatforms.map((platform) =>
  social[platform.key] ?
    `[![${platform.name} Follow](https://img.shields.io/badge/${platform.name}-${platform.color}?style=${badgeStyle}&logo=${platform.icon}&logoColor=white)](${platform.link})\n` :
    ""
).join("")}

${isAnySkillTrue ? `<h3 align="left">Skills:</h3>\n<p align="left">`:""}

${coreSkillFields.map((skill) => skills[skill.name] ? `<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a>\n` :"").join("")}${frontendSkillFields.map((skill) => skills[skill.name] ?`<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a> \n` :"").join("")}${backendSkillFields.map((skill) =>skills[skill.name] ?`<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a> \n` :"").join("")}${frameworkSkillFields.map((skill) =>skills[skill.name] ?`<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a>\n` :"").join("")}${otherSkillFields.map((skill) => skills[skill.name] ?`<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a>\n` :"").join("")}
${isAnySkillTrue ? `</p>`:""}

${social.githubUsername?`
### Badges

<h4>My GitHub Stats</h4>
${githubStatsCard ?`<a href="http://www.github.com/${social.githubUsername}"><img src="https://github-readme-stats.vercel.app/api?username=${social.githubUsername}&show_icons=true&title_color=${colors.title_color}&icon_color=${colors.icon_color}&text_color=${colors.text_color}&bg_color=${colors.bg_color}&hide_border=true" alt="${social.githubUsername}'s GitHub stats" /></a>`:""}
${githubLanguagesCard?`<a href="http://www.github.com/${social.githubUsername}"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mspatel18&langs_count=3&title_color=${colors.title_color}&icon_color=${colors.icon_color}&text_color=${colors.text_color}&bg_color=${colors.bg_color}&hide_border=true" alt="Top Languages"/></a>`:""}
${githubCommitCard?`<a href="http://www.github.com/${social.githubUsername}"><img src="https://github-readme-streak-stats.herokuapp.com/?user=${social.githubUsername}&stroke=${colors.title_color}&background=${colors.bg_color}&ring=${colors.title_color}&fire=${colors.icon_color}&currStreakNum=${colors.icon_color}&currStreakLabel=${colors.icon_color}&sideNums=${colors.title_color}&sideLabels=${colors.title_color}&dates=${colors.text_color}&hide_border=true" alt="Github streak stats"/></a>`:""}
${githubGraphCard?`<a href="http://www.github.com/${social.githubUsername}"><img src="https://github-readme-activity-graph.vercel.app/graph?username=${social.githubUsername}&bg_color=${colors.bg_color}&color=${colors.title_color}&line=${colors.icon_color}&point=${colors.title_color}&area_color=${colors.bg_color}&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph" alt="GitHub Commits Graph" /></a>`:""}
`:""}
${buymeacoffeeUsername?`<a href="https://www.buymeacoffee.com/${buymeacoffeeUsername}"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" /></a>`:""}
`
      setMarkdownText(updatedMarkdown);
    }, [introductionData, aboutData, social, badgeStyle,skills,githubStatsTheme,colors,githubStatsCard,githubLanguagesCard,githubCommitCard,githubGraphCard,buymeacoffeeUsername]);
    const navigate = useNavigate();
    return(
    <>
      <header className="readme-header">
          <h2 onClick={()=>navigate("/")}>ReadmeWizard</h2>
          <div>
              <a href="" onClick={()=>navigate("/")}>Home</a>
              <a href="http://github.com/mspatel18" target="_blank">Github</a>
              <a href="" onClick={()=>navigate("/create-readme")}>Create</a>
          </div>
      </header> 
      <div className="wrapper">
        <div  className="input-container">
          <div className="section-title">Enter your details here:</div>
          <div className="section-title">Introduction</div>
          {renderIntroductionFields()}
          <div className="section-title">About Me</div>
          {renderAboutFields()}
          <div className="section-title">Socials
          </div>
          <div className="input-title">Badge Style:<select name="Style" onChange={(e)=> setBadgeStyle(e.target.value)} className="badge-select">
              <option value="flat">Flat</option>
              <option value="flat-square">Flat Square</option>
              <option value="plastic">Plastic</option>
              <option value="for-the-badge">For the Badge</option>
            </select>
          </div>
          <div className="input-title"></div>
          <div className="socials">
            {renderSocialInputs()}
          </div>  
          <div className="section-title">Skills</div>
          <h4>Languages</h4>
          <div className="skill-wrapper">
            {renderCoreSkillsFields()}
          </div>  
          <h4>Frontend</h4>
          <div className="skill-wrapper">
            {renderFrontendSkillsFields()}
          </div>
          <h4>Backend & Database</h4>
          <div className="skill-wrapper">
            {renderBackendSkillsFields()}
          </div>
          <h4>Frameworks</h4>
          <div className="skill-wrapper">
            {renderFrameworkSkillsFields()}
          </div>
          <h4>Other</h4>
          <div className="skill-wrapper">
            {renderOtherSkillsFields()}
          </div>
          <div className="section-title">Github Stats</div>
          <div className="input-title">Github Stats Theme: 
          {renderGithubStatsSelect()}
          </div>
          <label htmlFor="">
            <input type="checkbox" defaultChecked="true" value={githubStatsCard} onChange={(e)=>{setGithubStatsCard(!githubStatsCard)}}/> Stats card
          </label>
          <label htmlFor="">
            <input type="checkbox" defaultChecked="true" value={githubLanguagesCard} onChange={(e)=>{setGithubLanguagesCard(!githubLanguagesCard)}} /> Languages card
          </label>
          <label htmlFor="">
            <input type="checkbox" defaultChecked="true" value={githubCommitCard} onChange={(e)=>{setGithubCommitCard(!githubCommitCard)}} /> Commit card
          </label>
          <label htmlFor="">
            <input type="checkbox"  onChange={(e)=>{setGithubGraphCard(!githubGraphCard)}} /> Graph card
          </label>
          <div className="section-title">Support Me</div>
          <div className="input-title  social-desc"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" /><input type="text" placeholder="buymeacoffee Username" value={buymeacoffeeUsername} onChange={(e)=>{setBuymeacoffeeUsername(e.target.value)}} /></div>
        </div>
        <div className="markdown-container">
        <button onClick={handlePreviewClick} className="markdown-button">Preview</button>
        <button onClick={handleMarkdownClick} className="markdown-button">Markdown</button>
        <button onClick={handleCopyTextClick} className="markdown-button copy-button">Copy Text</button> 

        {activeSection === 'preview' && (
          <MarkdownView markdown={markdowntext} options={{ tables: true, emoji: true }} />
        )}
        {activeSection === 'markdown' && (
          <textarea name="markdown" value={markdowntext} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        )}
        </div>
      </div>
    </>
    )
}