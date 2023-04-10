import React from "react";
import { TaskItem } from "./types";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
    constructor(props: TaskAppProp) {
      super(props);
      this.state = {
        tasks: [],
      };
    }
    addTask = (tasks: TaskItem) => {
        this.setState((state, props) => {
          return {
            tasks:[...state.tasks, tasks],
          };
        });
      };

    render() {
        return(
           <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Smarter Tasks</h1>
      <h2 className="font-bold mb-2">
        Project:{" "}
        <span className="text-gray-600">
          Graduation Final Year Project(Revamp College Website)
        </span>
      </h2>
       <b><em>Enter New Task</em></b>
      <TaskForm addTask={this.addTask} />
      <div className="flex justify-between">
        <div className="w-1/2 mr-2 rounded-lg shadow-md p-4 mb-2 status">
          <h3 className="text-xl font-bold mb-2">Pending</h3>
        <TaskList tasks={this.state.tasks} />

        <div>
        
        </div>
        </div>

        <div className="w-1/2 ml-2 rounded-lg shadow-md p-4 mb-2 status">
          <h1 className="text-xl font-bold mb-2">Done</h1>
        
        </div>
      </div>
    </div>
        )

}
}

export default TaskApp;
