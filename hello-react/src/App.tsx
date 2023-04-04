import TaskCard from "./TaskCard";
import React from "react";
import { dueitems, completeditems } from "./main";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Smarter Tasks</h1>
      <h2 className="font-bold mb-2">
        Project:{" "}
        <span className="text-gray-600">
          Graduation Final Year Project(Revamp College Website)
        </span>
      </h2>
      <div className="flex justify-between">
        <div className="w-1/2 mr-2 rounded-lg shadow-md p-4 mb-2 status">
          <h3 className="text-xl font-bold mb-2">Pending</h3>
          <TaskCard
            {...dueitems(
              "Build the Website with static content",
              "19th April",
              "Rohit S"
            )}
          />
          <TaskCard {...dueitems("Add Blog", "19th April", "Rohit M")} />

          <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 align-text-bottom mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V5a1 1 0 112 0v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4z"
                clip-rule="evenodd"
              />
            </svg>
            New Task
          </button>
        </div>

        <div className="w-1/2 ml-2 rounded-lg shadow-md p-4 mb-2 status">
          <h1 className="text-xl font-bold mb-2">Done</h1>
          <TaskCard
            {...completeditems("Design the mockup", "20th April", "Rohit M")}
          />
          <TaskCard
            {...completeditems(
              "Get Approval from principal",
              "20th April",
              "Ajay S"
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
