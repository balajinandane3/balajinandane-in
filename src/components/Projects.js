import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>PROJECTS</h2>

      <div className="project-item">
        <h3>Application Modernization ( SEI )</h3>
        <p>
          Modernized legacy application components by designing and building new REST APIs to migrate data from Oracle to MongoDB. This improved data access speed, reduced UI response time, and enabled faster, more scalable workflows as part of the overall modernization initiative.
        </p>
      </div>

      <div className="project-item">
        <h3>RTP - MACAU</h3>
        <p>
          Bulk payment processing , from payment initation till the final posting.
          Desinging the payment rules specific for the MACAU country and intergrate into the system for payment processing as per the rules.
          It involves async communication using kafka systems and file processing.
        </p>
      </div>

      <div className="project-item">
        <div className="project-item">
        <h3>Etisalat - Autonomous Store </h3>
        <p>
          A fully automated, staff-free shopping system where customers enter using QR code or face recognition, and items they pick are auto-detected by in-store cameras. Products are added to a digital cart in real time, and payment is completed automatically using a linked card when the customer exits — eliminating manual checkout.
        </p>
      </div>

      <div className="project-item"></div>
  <h3>
  Expense Tracker 
<span className="badge-personal">PERSONAL</span></h3>
  <p>
    A simple and clean expense tracking application for managing daily spending,
    built using React and local storage. Supports adding, deleting, and
    categorizing expenses.
  </p>

  <a
    href="https://app1.balajinandane.in/login"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View Details →
  </a>
</div>
    </section>
  );
}
