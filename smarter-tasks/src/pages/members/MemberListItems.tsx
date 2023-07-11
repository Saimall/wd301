/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/projects/ProjectListItems.tsx
import React from "react";
// import  {deleteMember}  from '../../context/members/actions';

import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";
export default function MemberListItems() {
  const dispatchMembers: any = useMembersDispatch();
  const state: any = useMembersState();

  const { members, isLoading, isError, errorMessage } = state;

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const deleteHandlerMember = async (id: number) => {
    const response = await deleteMember(dispatchMembers, id);
    console.log(response);
    if (response.ok) {
      console.log("deleted successfully!!!");
    }
  };

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className=" member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.email}
          </h5>{" "}
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
          <button
            onClick={() => deleteHandlerMember(member.id)}
            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring--500 focus-visible:ring-offset-2"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
