import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="logo" to={"/"}>
        ReadmeWizard
      </Link>
      <div>
        <a href="http://github.com/mspatel18" target="_blank">
          Github
        </a>
        <Link to="/create"> Create</Link>
      </div>
    </header>
  );
}
