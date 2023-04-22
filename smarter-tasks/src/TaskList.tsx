import React from 'react';
import Task from './Task';
import { TaskItem } from "./types";

interface Props{
  tasks:TaskItem[];
  deleteTask: (id: number) => void;
}
// interface State{

// }




// class TaskList extends React.Component<Props,State>{

// render(){
//         return (this.props.tasks.map((task,idx) => (
//             <Task  title={task.title} description={task.description} dueDate={task.dueDate} />
//           )));
//         }
// }

const TaskList =(props:Props)=>{
 const List= (props.tasks.map((task,idx) => (
    <Task id={task.id} title={task.title} description={task.description} dueDate={task.dueDate} deleteTask={props.deleteTask}  />
  )))

  return <>{List}</>;
}

   
export default TaskList;