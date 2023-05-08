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
    <div>
      
      <div>
        <div className="bg-black rounded-lg shadow-md p-4 mb-2 TaskItem hover:bg-gray-200">
          <em>
            <h3 className="font-gray-800 mb-2 font-solid">
              {" "}
              Title :  {task?.title}
            </h3>
            <p className="text-gray-800 mb-2 font-solid">
              {" "}
              Description : 
              {task?.description}
            </p>
            <p className="text-gray-800 mb-2 font-solid">
              Due On: 
              {task?.dueDate}
            </p>
          </em>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsPage;
