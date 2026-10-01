import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Resume", "#resume"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">
          Rajesh<span>.</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${open ? "active" : ""}`}>
          {links.map(([name, url]) => (
            <a key={name} href={url} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}