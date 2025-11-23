import React from "react";
import ProjectCard from "./ProjectCard";

function Applications() {
  return (
    <section className="block applications visible ">
      <h2>Applications</h2>
      <div className="applications">
        <ProjectCard
          title="Expense Tracker"
          description="A web application to track daily expenses, categorize spending, and visualize financial data."
          link="http://app1.balajinandane.in/"
        />
      </div>
    </section>
  );
}

export default Applications;
