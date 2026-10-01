const experiences = [
  {
    company: "Logelite Pvt Ltd",
    role: "Full Stack Developer",
    period: "2022 - Present",
    points: [
      "Developed and maintained scalable Laravel applications and REST APIs.",
      "Built React.js and Vue.js based dashboards and frontend interfaces.",
      "Worked on advertiser and publisher management systems.",
      "Implemented wallet, campaign, invoice, payment, KYC and reporting modules.",
      "Integrated third-party APIs and payment gateways.",
      "Optimized MySQL queries using indexes, joins and eager loading.",
      "Implemented Redis caching and Laravel Cache for performance improvements.",
      "Worked with Git, Docker, CI/CD and production deployments.",
      "Investigated production issues and monitored applications using Sentry.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title">
          <span>03.</span>
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((experience) => (
            <div className="timeline-item" key={experience.company}>
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                  </div>

                  <span className="period">{experience.period}</span>
                </div>

                <ul>
                  {experience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}