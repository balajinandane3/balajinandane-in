import "./Header.css";

export default function Header({ setSection }) {
  return (
    <div className="header">

      <div className="header-logo" onClick={() => setSection("hero")}>
        BALAJI NANDANE
      </div>

      {/* Full-height pipe placed as its own flex item */}
      <div className="header-divider"></div>

      <div className="header-links">
        <button onClick={() => setSection("about")}>ABOUT</button>
        <button onClick={() => setSection("resume")}>PROFILE</button>
        <button onClick={() => setSection("projects")}>PROJECTS</button>
        <button onClick={() => setSection("contact")}>CONTACT</button>
      </div>

    </div>
  );
}
