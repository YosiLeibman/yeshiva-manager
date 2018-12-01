import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 porject-summary">
      <div className="card-content gray-text text-dark3n-3">
        <span className="card-title">{project.title}</span>
        <p>
          posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="gary-text">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
