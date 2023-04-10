import React from "react";
import "./TaskCard.css";

interface TaskProps{
    title:string
}

class Task extends React.Component<TaskProps>{
    render(){
        return(
            <div className="TaskItem shadow-md border border-slate-100">
            <h2 className="text-base font-bold my-1">{this.props.title}</h2>
          </div>
        )
    }
        
}

export default Task;