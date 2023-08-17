import { Project } from "./Project";
import React from "react";

function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}

interface ProjectCardProps {
  project: Project;
}

function handleEditClick(projectBeingEdited: Project) {
  console.log(projectBeingEdited);
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  return (
    <div key={project.id} className="cols-sm">
      <div className="card">
        <img src={project.imageUrl} alt={project.name} />
        <section className="section dark">
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget: {project.budget.toLocaleString()}</p>
          <button
            className="bordered"
            onClick={() => {
              handleEditClick(project);
            }}
          >
            <span className="icon-edit "></span>
            Edit
          </button>
        </section>
      </div>
    </div>
  );
}

export default ProjectCard;
