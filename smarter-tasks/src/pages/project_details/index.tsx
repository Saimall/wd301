import React from "react";

import ProjectDetails from "./ProjectDetails";

import { TasksProvider } from "../../context/task/context";
import { Outlet } from "react-router-dom";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
      <TasksProvider>
      <ProjectDetails />
      <Outlet />
    </TasksProvider>
    </>
  );
};

export default ProjectDetailsIndex;
//We have added an Outlet component so that we can plug the modal window, which will be used to create tasks in it.