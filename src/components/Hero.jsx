import { useState } from "react";

const developerData = {
  experience: {
    backend: "Laravel 7 → 13",
    frontend: "React.js",
  },

  backend: [
    "PHP",
    "Laravel",
    "REST API",
    "Eloquent ORM",
  ],

  frontend: [
    "React.js",
    "Vue.js",
    "JavaScript",
    "Bootstrap",
  ],

  database: [
    "MySQL",
    "PostgreSQL",
    "Redis",
  ],

  devops: [
    "Git",
    "Docker",
    "Linux",
    "CI/CD",
  ],

  other: [
    "Go",
    "Third-party APIs",
    "Payment Gateways",
  ],
};

export default function Hero() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section ? null : section
    );
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">

        {/* =========================
            Hero Left Content
        ========================== */}
        <div className="hero-text">

          <p className="hero-subtitle">
            Hello, I'm
          </p>

          <h1>
            Rajesh Kumar
            <span> Yadav</span>
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="hero-description">
            Full Stack Developer specializing in Laravel and React.js,
            with experience building scalable, secure and high-performance
            web applications, CRM systems, dashboards and REST APIs.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn primary-btn"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              Contact Me
            </a>
          </div>

          {/* Technologies */}
          <div className="hero-tech">
            <span>Laravel 7–13</span>
            <span>React.js</span>
            <span>Vue.js</span>
            <span>REST API</span>
            <span>MySQL</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Go</span>
          </div>
        </div>

        {/* =========================
            Developer Code Card
        ========================== */}
        <div className="hero-card">
          <div className="code-window">

            {/* Window Header */}
            <div className="window-header">
              <span className="window-dot red"></span>
              <span className="window-dot yellow"></span>
              <span className="window-dot green"></span>
            </div>

            <div className="code-content">

              {/* Main Object */}
              <div className="code-line">
                <span className="code-keyword">
                  const
                </span>{" "}

                <span className="code-variable">
                  developer
                </span>{" "}

                <span>=</span>{" "}

                <span className="code-bracket">
                  {"{"}
                </span>
              </div>

              {/* Name */}
              <div className="code-property">
                <span className="code-key">
                  name:
                </span>{" "}
                <span className="code-string">
                  "Rajesh Kumar Yadav"
                </span>
                ,
              </div>

              {/* Role */}
              <div className="code-property">
                <span className="code-key">
                  role:
                </span>{" "}
                <span className="code-string">
                  "Full Stack Developer"
                </span>
                ,
              </div>

              {/* Experience */}
              <div
                className={`code-expand ${
                  openSection === "experience"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  toggleSection("experience")
                }
              >
                <span className="arrow">
                  {openSection === "experience"
                    ? "▼"
                    : "▶"}
                </span>

                <span className="code-key">
                  experience:
                </span>{" "}
                <span className="code-bracket">
                  {"{"}
                </span>

                {openSection !== "experience" && (
                  <span className="collapsed">
                    ...
                  </span>
                )}

                {openSection !== "experience" && (
                  <span className="code-bracket">
                    {"}"}
                  </span>
                )}
              </div>

              {openSection === "experience" && (
                <div className="code-nested">
                  <div>
                    <span className="code-key">
                      backend:
                    </span>{" "}
                    <span className="code-string">
                      "Laravel 7 → 13"
                    </span>
                    ,
                  </div>

                  <div>
                    <span className="code-key">
                      frontend:
                    </span>{" "}
                    <span className="code-string">
                      "React.js"
                    </span>
                  </div>

                  <div className="code-bracket">
                    {"},"}
                  </div>
                </div>
              )}

              {/* Backend */}
              <CodeArray
                title="backend"
                data={developerData.backend}
                openSection={openSection}
                toggleSection={toggleSection}
              />

              {/* Frontend */}
              <CodeArray
                title="frontend"
                data={developerData.frontend}
                openSection={openSection}
                toggleSection={toggleSection}
              />

              {/* Database */}
              <CodeArray
                title="database"
                data={developerData.database}
                openSection={openSection}
                toggleSection={toggleSection}
              />

              {/* DevOps */}
              <CodeArray
                title="devops"
                data={developerData.devops}
                openSection={openSection}
                toggleSection={toggleSection}
              />

              {/* Other */}
              <CodeArray
                title="other"
                data={developerData.other}
                openSection={openSection}
                toggleSection={toggleSection}
              />

              {/* Available */}
              <div className="code-property">
                <span className="code-key">
                  available:
                </span>{" "}
                <span className="code-boolean">
                  true
                </span>
              </div>

              {/* Closing */}
              <div className="code-line">
                <span className="code-bracket">
                  {"};"}
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================
   Reusable Array Component
========================= */

function CodeArray({
  title,
  data,
  openSection,
  toggleSection,
}) {
  const isOpen = openSection === title;

  return (
    <div>
      <div
        className={`code-expand ${
          isOpen ? "active" : ""
        }`}
        onClick={() => toggleSection(title)}
      >
        <span className="arrow">
          {isOpen ? "▼" : "▶"}
        </span>

        <span className="code-key">
          {title}:
        </span>{" "}

        <span className="code-bracket">
          [
        </span>

        {!isOpen && (
          <>
            <span className="collapsed">
              {data.length} items
            </span>

            <span className="code-bracket">
              ]
            </span>
          </>
        )}
      </div>

      {isOpen && (
        <div className="code-nested">
          {data.map((item, index) => (
            <div
              key={item}
              className="code-array-item"
            >
              <span className="code-string">
                "{item}"
              </span>

              {index !== data.length - 1 && ","}
            </div>
          ))}

          <div className="code-bracket">
            ],
          </div>
        </div>
      )}
    </div>
  );
}
