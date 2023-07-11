import React, { useEffect } from "react";
import { fetchProjects } from "../../context/projects/actions";

// So, let's import the useProjectsDispatch custom hook.
import { useProjectsDispatch } from "../../context/projects/context";

// I'll import the ProjectListItems component from the same folder.
// This I'll define next.
import ProjectListItems from "./ProjectListItems";
const ProjectList: React.FC = () => {
  // I'll define a new constant called dispatchProjects,
  // to call the useProjectsDispatch() hook.
  const dispatchProjects = useProjectsDispatch();

  useEffect(() => {
    fetchProjects(dispatchProjects);
  }, []);
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ProjectListItems />
    </div>
  );
};

export default ProjectList;
