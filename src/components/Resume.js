import "./Resume.css";

export default function Resume() {
  return (
    <section className="resume">
      <h2>RESUME</h2>

      <div className="resume-nav">
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#courses">Courses</a>
      </div>

      {/* Summary Section */}
      <div id="resume-main" className="resume-section">
  <h3>SUMMARY</h3>
  <p>
    Senior Java Developer with 10 years of expertise in backend engineering,
    microservices, Kafka-based systems, distributed tracing, and cloud environments.
    Skilled in Core Java, Spring Boot, Kafka, REST APIs, and AWS, with a strong
    background in designing low-level designs and collaborating with cross-functional
    teams to deliver high-quality, scalable systems.
  </p>
</div>
      {/* Education */}
      <div id="education" className="resume-section">
  <h3>EDUCATION</h3>
  <p>
    Master of Computer Applications (MCA)  
   
  </p>
</div>

      {/* Experience */}
      <div id="experience" className="resume-section">
        <h3>EXPERIENCE</h3>
        <p>
          10 years in Java, Spring Boot, API development, microservices, Kafka,
          caching, SQL/NoSQL, AWS, OpenTelemetry, and event-driven architectures.
        </p>
      </div>

      {/* Skills */}
     <div id="skills" className="resume-section">
  <h3>SKILLS</h3>
  <p>
    Core Java · Spring Boot · Microservices · Kafka · REST APIs · SQL · MongoDB · JPA · 
    Git · Linux · AWS
  </p>
</div>

      {/* Courses */}
      <div id="courses" className="resume-section">
        <h3>CERTIFICATIONS</h3>
         <div className="cert-badge">
    <img
      src="https://img.shields.io/badge/AWS%20Developer%20Associate-Valid%20Till%20Feb%202028-009688?style=flat&logo=amazon-aws&logoColor=white"
      alt="AWS Developer Associate"
    />
  </div>
        <p>AWS Developer Associate Certification</p>
      </div>
      
    </section>
  );
}
