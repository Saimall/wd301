/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/projects/ProjectListItems.tsx
import React from "react";

// First, I'll import the useProjectsState custom hook to access projects state.
import { useProjectsState } from "../../context/projects/context";
import { Link } from "react-router-dom";
export default function ProjectListItems() {
  const state: any = useProjectsState();

  const { projects, isLoading, isError, errorMessage } = state;
  console.log(projects);

  // If `isLoading` is true, and there are no projects, in that case,
  // I'll show a loading text
  if (projects.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  // Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {projects.map((project: any) => (
        <Link
          key={project.id}
          to={`${project.id}`}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
        </Link>
      ))}
    </>
  );
}
