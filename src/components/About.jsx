export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <span>01.</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <p>
              I am a Full Stack Developer specializing in Laravel and
              React.js, with experience building scalable web applications,
              REST APIs, dashboards, payment integrations, and
              database-driven systems.
            </p>

            <p>
              My primary strength is backend development with Laravel,
              including API development, authentication, Eloquent ORM,
              queues, jobs, caching, Redis, database optimization, and
              third-party API integrations.
            </p>

            <p>
              On the frontend, I work with React.js and Vue.js to build
              responsive and user-friendly applications.
            </p>

            <p>
              I also have practical experience with Go, SQL, Git, Docker,
              CI/CD, MySQL, PostgreSQL, and production application support.
            </p>
          </div>

          <div className="about-info">
            <div className="info-item">
              <strong>Backend</strong>
              <span>Laravel / PHP / REST API / Go</span>
            </div>

            <div className="info-item">
              <strong>Frontend</strong>
              <span>React.js / Vue.js / JavaScript</span>
            </div>

            <div className="info-item">
              <strong>Database</strong>
              <span>MySQL / PostgreSQL / SQL</span>
            </div>

            <div className="info-item">
              <strong>Tools</strong>
              <span>Git / Docker / Redis / CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}