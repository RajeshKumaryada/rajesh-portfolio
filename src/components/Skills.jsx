const skillGroups = [
  {
    title: "Backend Development",
    skills: [
      "PHP",
      "Laravel 7",
      "Laravel 8",
      "Laravel 9",
      "Laravel 10",
      "Laravel 11",
      "Laravel 12",
      "Laravel 13",
      "Laravel REST API",
      "Eloquent ORM",
      "Authentication",
      "Authorization",
      "Middleware",
      "Queues & Jobs",
      "Events & Listeners",
      "Service Container",
      "Dependency Injection",
      "Service Providers",
      "Form Requests",
      "Validation",
      "Notifications",
      "Mail",
      "Task Scheduling",
      "File Storage",
      "API Resources",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "React Hooks",
      "React Components",
      "Props & State Management",
      "Context API",
      "React Router",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "Axios",
      "Apisauce",
      "Inertia.js",
      "Vue.js",
      "Responsive Design",
    ],
  },
  {
    title: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQL",
      "Database Design",
      "Query Optimization",
      "Indexes",
      "Joins",
      "Stored Procedures",
      "Database Migrations",
      "Database Seeders",
      "Transactions",
      "Redis",
      "Redis Caching",
      "Database Optimization",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Redis",
      "Laravel Cache",
      "Laravel Horizon",
      "Sentry",
      "cPanel",
      "Linux",
      "Nginx",
      "Apache",
      "Composer",
      "npm",
      "Contabo",
    ],
  },
  {
    title: "APIs & Other Technologies",
    skills: [
      "Go",
      "REST APIs",
      "Third-party APIs",
      "Payment Gateways",
      "JSON",
      "Webhooks",
      "MongoDB",
      "Node.js",
      "API Integration",
      "API Authentication",
      "OAuth",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <span>02.</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
