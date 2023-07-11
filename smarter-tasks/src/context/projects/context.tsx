import React, { createContext, useContext, useReducer } from "react";

import {
  reducer,
  initialState,
  ProjectsState,
  ProjectsActions,
} from "./reducer";

const ProjectsStateContext = createContext<ProjectsState | undefined>(
  undefined
);
type ProjectsDispatch = React.Dispatch<ProjectsActions>;
const ProjectsDispatchContext = createContext<ProjectsDispatch | undefined>(
  undefined
);

export const useProjectsState = () => useContext(ProjectsStateContext);

// This line defines a custom hook `useProjectsState`, that uses the `useContext`
// hook to access the value stored in the `ProjectsStateContext`.
// The `ProjectsStateContext` is created using the createContext function
// and is used to store the current `state` of the projects.
// By using the `useProjectsState` hook in a component,
// you can retrieve the current `state` of the projects without directly accessing
// the context or passing down the state as a prop. This simplifies the code
// and ensures that the state is always up to date.

export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);
//same explanantion as above

export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
};
