import React from "react";
import "./TaskCard.css";

import { Link } from "react-router-dom";

interface TaskProps {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  deleteTask: (taskID: number) => void;
}

// class Task extends React.Component<TaskProps>{
//     render(){
//         return(
//             <div className="bg-white rounded-lg shadow-md p-4 mb-2 TaskItem hover:bg-gray-200">

//         <h2 className="font-bold mb-2"> <span className="font-bold">Title : </span> {this.props.title}</h2>
//         <p className="text-gray-800 mb-2">
//           {" "}
//           <span className="font-bold">Description : </span>
//           {this.props.description}
//         </p>
//         <p className="text-gray-800 mb-2">
//           <span className="font-bold">Due On: </span>
//           {this.props.dueDate}
//         </p>
//       </div>
//         )
//     }

// }

const Task = (props: TaskProps) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4 mb-2 TaskItem hover:bg-gray-200">
        <Link to={`/tasks/${props.id}`}>
          <h2 className="text-base font-bold my-1">{props.title}</h2>
        </Link>
        <button
          className="deleteTaskButton bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 rounded"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete Task
        </button>
      </div>
      
      <div>
        
      </div>
    </div>
  );
};

export default Task;
