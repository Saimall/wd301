import React from "react";
import { useParams } from "react-router-dom";
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./TaskCard.css";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskDetailsPage = () => {
  const { id } = useParams<TaskDetailsPageParams>();

  const [taskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });
  const task = taskAppState.tasks.find((task) => task.id === Number(id)); //converting string id which we got from url to number for conversion
  /* as task and description and date may be undefined so we use task?.title , task?.date ,task?.description to specify that*/
  return (
    //as per VTA
    <div className="bg-gray shadow-md rounded-md p-4">
      <div>
        <h3 className="text-lg font-mediumm">{task?.title}</h3>
      </div>
      <p className="text-gray-600 ">{task?.description}</p>
      <p className="text-gray-600">{task?.dueDate}</p>
    </div>
    // <div>

    //   <div>
    //     <div className="bg-black rounded-lg shadow-md p-4 mb-2 TaskItem hover:bg-gray-200">
    //         <h3 className="font-gray-800 mb-2 ">
    //           {" "}
    //           Title :  {task?.title}
    //         </h3>
    //         <p className="text-gray-800 mb-2 ">
    //           {" "}
    //           Description :
    //           {task?.description}
    //         </p>
    //         <p className="text-gray-800 mb-2 ">
    //           Due On:
    //           {task?.dueDate}
    //         </p>

    //     </div>
    //   </div>
    // </div>
  );
};

export default TaskDetailsPage;
