const projects = [
  {
    title: "7SearchPPC - CRM, Advertiser & Publisher Platform",
    description:
      "Developed and maintained CRM, Advertiser and Publisher modules for an advertising platform, covering campaign management, publisher websites and traffic, wallet and payment processing, KYC, invoices, reporting, lead management and administrative workflows.",
    technologies: [
      "Laravel",
      "React.js",
      "MySQL",
      "Redis",
      "REST API",
      "JavaScript",
    ],
  },
  {
    title: "Advertiser Wallet & Campaign Management",
    description:
      "Built wallet and campaign workflows including funded, bonus, coupon and spent balances, invoices, payment processing, campaign status management and advertiser dashboard operations.",
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
      "Media management application with folders, subfolders, document handling, file uploads and background processing.",
    technologies: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "Queues",
      "Inertia",
    ],
  },
  {
    title: "Real Estate Management Platform",
    description:
      "Real estate management platform for property listings, property details, customer inquiries, agent management, property search and lead management.",
    technologies: [
      "Laravel",
      "Blade",
      "jQuery",
      "AJAX",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    title: "Gym Management System",
    description:
      "Gym management application for member registration, membership plans, trainer management, attendance tracking, payments and gym activity management.",
    technologies: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "REST API",
      "JavaScript",
    ],
  },
  {
   title: "Work Report Portal - CRM & User Panel",
  description:
    "Built and maintained a centralized employee work management portal with CRM and User/Employee panels. Implemented live task tracking, task assignment, feedback, working-user monitoring, responsibility management, attendance and hourly attendance, late warning records, document management, notifications, leave, salary slips, job openings, referral resumes, screenshots, to-do lists and team information.",
  technologies: [
    "Laravel",
    "Blade",
    "jQuery",
    "AJAX",
    "MySQL",
    "JavaScript",
    "Bootstrap",
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