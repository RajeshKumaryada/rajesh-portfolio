const skillGroups = [
  {
    title: "Backend Development",
    skills: [
      "PHP",
      "Laravel",
      "Laravel REST API",
      "Eloquent ORM",
      "Authentication",
      "Queues & Jobs",
      "Events & Listeners",
      "Service Container",
      "Dependency Injection",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Vue.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery",
      "Axios",
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
      "Sentry",
      "cPanel",
    ],
  },
  {
    title: "Other Technologies",
    skills: [
      "Go",
      "REST APIs",
      "Third-party APIs",
      "Payment Gateways",
      "JSON",
      "Webhooks",
      "MongoDB",
      "Node.js",
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