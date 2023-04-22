import React from "react";
import { TaskItem } from "./types";

import TaskForm from "./TaskForm"
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

// class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
//     constructor(props: TaskAppProp) {
//       super(props);
//       this.state = {
//         tasks: [],
//       };
//     }

//     addTask = (task: TaskItem) => {
//         this.setState((state, props) => {
//           return {
//             tasks:[...state.tasks, task],
//           };
//         });
//       };

//     render() {
//         return(
//            <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Smarter Tasks</h1>
//       <h2 className="font-bold mb-2">
//         Project:{" "}
//         <span className="text-gray-600">
//           Graduation Final Year Project(Revamp College Website)
//         </span>
//       </h2>
//        <b><em>Enter New Task</em></b>
//       <TaskFormFC addTask={this.addTask} />
//       <div className="flex justify-between">
//         <div className="w-1/2 mr-2 rounded-lg shadow-md p-4 mb-2 status">
//           <h3 className="text-xl font-bold mb-2">Pending</h3>
//         <TaskList tasks={this.state.tasks} />

//         <div>

//         </div>
//         </div>
//         <div className="w-1/2 ml-2 rounded-lg shadow-md p-4 mb-2 status">
//           <h1 className="text-xl font-bold mb-2">Done</h1>

//         </div>
//       </div>
//     </div>
//         )

// }
// }

const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  const addTask = (task: TaskItem) => {
    setTaskAppState({
      tasks: [...taskAppState.tasks, task],
    });
  };

  const deleteTask = (key: number) => {
    const updateditems = taskAppState.tasks.filter((task) => {
      return key !== task.id;
    });
    setTaskAppState({
      tasks: updateditems,
    });
  };

  // React.useEffect(()=>{
  //   const id = setTimeout(() => {
  //     console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
  //   }, 5000);
  //   //first this return function will exute and clears exiting calls and new id with new call or stetimeoout will be created
  //   return () => {
  //     console.log("clear or cancel any existing network call");
  //     clearTimeout(id);
  //   };
  // const saveTasks = async () => {
  //   const token = await saveTasksToBackend(taskAppState.tasks);
  // }
  // saveTasks();
  // return () => {
  //   cancelAPI(token);
  // };

  // },[taskAppState.tasks])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Smarter Tasks</h1>
      <h2 className="font-bold mb-2">
        Project:{" "}
        <span className="text-gray-600">
          Graduation Final Year Project(Revamp College Website)
        </span>
      </h2>
      <b>
        <em>Enter New Task</em>
      </b>
      <TaskForm addTask={addTask} />
      <div className="flex justify-between">
        <div className="w-1/2 mr-2 rounded-lg shadow-md p-4 mb-2 status">
          <h3 className="text-xl font-bold mb-2">Pending</h3>
          <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
        </div>
        <div className="w-1/2 ml-2 rounded-lg shadow-md p-4 mb-2 status">
          <h1 className="text-xl font-bold mb-2">Done</h1>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
