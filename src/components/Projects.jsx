const projects = [
  {
    title: "7SearchPPC Advertising Platform",
    description:
      "Advertising and publisher platform containing advertiser campaigns, publisher management, wallet systems, KYC, reporting, invoices and campaign management.",
    technologies: [
      "Laravel",
      "React.js",
      "MySQL",
      "Redis",
      "REST API",
    ],
  },
  {
    title: "Advertiser Wallet & Campaign Management",
    description:
      "Built wallet and campaign workflows including funded, bonus, coupon, spent balances, invoices, payment processing and campaign status management.",
    technologies: [
      "Laravel",
      "React.js",
      "MySQL",
      "Payment APIs",
    ],
  },
  {
    title: "IP Location API",
    description:
      "Backend service for IP-based location lookup with Redis caching, PostgreSQL and MaxMind database integration.",
    technologies: [
      "Go",
      "PostgreSQL",
      "Redis",
      "Docker",
      "REST API",
    ],
  },
  {
    title: "Media Gallery Application",
    description:
      "Media management application with folders, subfolders, document handling, uploads and background processing.",
    technologies: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "Queues",
      "Inertia",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <span>04.</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-icon">&lt;/&gt;</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}