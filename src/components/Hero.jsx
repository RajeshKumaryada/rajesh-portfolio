export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">Hello, I'm</p>

          <h1>
            Rajesh Kumar
            <span> Yadav</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            Laravel & React.js developer focused on building scalable,
            secure, high-performance web applications and REST APIs.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-tech">
            <span>Laravel</span>
            <span>React.js</span>
            <span>Vue.js</span>
            <span>Go</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="window-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Rajesh Kumar Yadav",
  role: "Full Stack Developer",

  backend: [
    "PHP",
    "Laravel",
    "REST API"
  ],

  frontend: [
    "React.js",
    "Vue.js",
    "JavaScript"
  ],

  database: [
    "MySQL",
    "PostgreSQL",
    "SQL"
  ],

  tools: [
    "Git",
    "Docker",
    "Redis",
    "CI/CD"
  ]
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}