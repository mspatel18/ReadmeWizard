import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>ReadmeWizard</h2>
      <div>
        <a href="http://github.com/mspatel18" target="_blank">
          Github
        </a>
        <Link to="/create"> Create</Link>
      </div>
    </header>
  );
}
