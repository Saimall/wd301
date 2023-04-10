import React from "react";
import "./TaskCard.css";

interface TaskProps{
    title:string,
    description:string,
    dueDate:string
}

class Task extends React.Component<TaskProps>{
    render(){
        return(
            <div className="bg-white rounded-lg shadow-md p-4 mb-2 TaskItem hover:bg-gray-200">
              
        <h2 className="font-bold mb-2"> <span className="font-bold">Title : </span> {this.props.title}</h2>
        <p className="text-gray-800 mb-2">
          {" "}
          <span className="font-bold">Description : </span>
          {this.props.description}
        </p>
        <p className="text-gray-800 mb-2">
          <span className="font-bold">Due On: </span>
          {this.props.dueDate}
        </p>
      </div>
        )
    }
        
}

export default Task;