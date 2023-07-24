/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useReducer } from "react";

import { reducer, initialState } from "./reducer";
import { CommentsState,CommentsActions } from "./types";

const CommentsStateContext = createContext<CommentsState>(initialState);
type CommentsDispatch = React.Dispatch<CommentsActions>;

const CommentsDispatchContext = createContext<CommentsDispatch>(()=>{});
export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

export const useCommentsState = () => useContext(CommentsStateContext);

export const useCommentsDispatch = () => useContext(CommentsDispatchContext);