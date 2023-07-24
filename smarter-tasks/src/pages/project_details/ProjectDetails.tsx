// In this component, we will extract the value of projectID, then filter it out from list of available projects to make sure it is a valid id. Then we will go on displaying the name of the project as a header#

// ?. optional chaining used to safely access the array and prevent from throwing the error if the confdition fails
//?.[0]: After filtering, the optional chaining is used again to safely access the first element of the filtered array. The [0] index is used to get the first element of the array, if it exists.


import React,{useEffect} from "react";
import DragDropList from "./DragDropList";
import {Link, useParams } from "react-router-dom";
import { useProjectsState } from "../../context/projects/context";

import { refreshTasks } from "../../context/task/actions";
import { useTasksDispatch, useTasksState } from "../../context/task/context";

const ProjectDetails = () => {
  const tasksState = useTasksState();
  const taskDispatch = useTasksDispatch();
  const projectState = useProjectsState();
  const { projectID } = useParams();
  useEffect(() => {
    if (projectID) refreshTasks(taskDispatch, projectID);
  }, [projectID, taskDispatch]);

  const selectedProject = projectState?.projects.filter(
    (project) => `${project.id}` === projectID
  )?.[0];

  if (tasksState.isLoading) {
    return <>Loading...</>;
  }

  if (!selectedProject) {
    return <>No such Project!</>;
  }
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          {selectedProject.name}
        </h2>
        <Link to={`tasks/new`}>
          <button
            id="newTaskBtn"
            className="rounded-md bg-blue-600 px-4 py-2 m-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            New Task
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <DragDropList data={tasksState.projectData} />
      </div>
    </>
  );
};

export default ProjectDetails;