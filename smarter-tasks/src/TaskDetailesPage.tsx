import React from 'react';
import { useParams } from 'react-router-dom';
import { TaskItem } from "./types";
import { useLocalStorage } from './hooks/useLocalStorage';
import "./TaskCard.css";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<TaskDetailsPageParams>();

  const [taskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );
  const task = taskAppState.tasks.find(task => task.id === Number(id)); //converting string id which we got from url to number for conversion
  /* as task and description and date may be undefined so we use task?.title , task?.date ,task?.description to specify that*/
  return (
    <div>
      <div className='mt-2 mb-2 font-bold-800'>
      <strong><h1>Task Details</h1></strong>
      </div>
      <div className="bg-black rounded-lg shadow-md p-4 mb-2 TaskItem hover:bg-gray-200">
       <em>
       <h2 className="font-gray-800 mb-2">
          {" "}
          <span className="font-bold">Title : </span> {task?.title} 
        </h2>
        <p className="text-gray-800 mb-2">
          {" "}
          <span className="font-bold">Description : </span>
          {task?.description}
        </p>
        <p className="text-gray-800 mb-2">
          <span className="font-bold">Due On: </span>
          {task?.dueDate}
        </p>
        </em>
    </div>
    </div>
  );
};

export default TaskDetailsPage;