
import React, { useState } from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
  }
interface TaskFormState {
    title: string;
    description:string;
    dueDate:string
  }

// class TaskForm extends React.Component<TaskFormProps, TaskFormState>{

//     constructor(props: TaskFormProps) {
//         super(props);
//         this.state = {
//           title: "",
//           description:"",
//           dueDate:"",
//         }
//     }    
    
//     addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//         event.preventDefault();
//         const newTask = {
//           title: this.state.title,
//           description: this.state.description,
//           dueDate:this.state.dueDate,
//         }
//         // this
//         this.props.addTask(newTask);
//         this.setState({ title:"" ,description:"",dueDate:" "});
//       };
//    titlechanged:React.ChangeEventHandler<HTMLInputElement>=(event)=>{
//     console.log(`${event.target.value}`);
//     this.setState({ title: event.target.value });
//    }
//    descriptionchanged:React.ChangeEventHandler<HTMLInputElement>=(event)=>{
//     console.log(`${event.target.value}`);
//     this.setState({ description:event.target.value});
//    }
//    dueDatechanged:React.ChangeEventHandler<HTMLInputElement>=(event)=>{
//     console.log(`${event.target.value}`);
//     this.setState({ dueDate:event.target.value});
//    }
  
//     render(){
//         return(
//             <div className="w-full max-w-md mx-auto">
//             <form className="bg-white shadow-md rounded px-4 pt-3 pb-4 mb-2" onSubmit={this.addTask}>
//               <div className="mb-4">
//                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todoTitle" value={this.state.title} type="text" placeholder="Enter a title" onChange={this.titlechanged} required/>
//               </div>
//               <div className="mb-4">
//                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todoDescription" value={this.state.description} type="text" placeholder="Enter a Description" onChange={this.descriptionchanged}/>
//               </div>
//               <div className="mb-4">
//                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todoDueDate" value={this.state.dueDate} type="date" placeholder="select date" onChange={this.dueDatechanged} required/>
//               </div>
//               <div className="flex items-center justify-center">
//               <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" id="addTaskButton">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="inline-block h-4 w-4 align-text-bottom mr-2"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V5a1 1 0 112 0v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4z"
//                 clip-rule="evenodd"
//               />
//             </svg>
//             Add
//           </button>
//               </div>
//             </form>
//           </div>
            
//         )     
    
// }
// }

const TaskFormFC = (props: TaskFormProps) => {
  const [formState, setFormState] = useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });
  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" });
  };

  const titlechanged:React.ChangeEventHandler<HTMLInputElement>=(event)=>{
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
   }
  const  descriptionchanged:React.ChangeEventHandler<HTMLInputElement>=(event)=>{
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
   }
  const  dueDatechanged:React.ChangeEventHandler<HTMLInputElement>=(event)=>{
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
   }

   return(
    <div className="w-full max-w-md mx-auto">
    <form className="bg-white shadow-md rounded px-4 pt-3 pb-4 mb-2" onSubmit={addTask}>
      <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todoTitle" value={formState.title} type="text" placeholder="Enter a title" onChange={titlechanged} required/>
      </div>
      <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todoDescription" value={formState.description} type="text" placeholder="Enter a Description" onChange={descriptionchanged}/>
      </div>
      <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todoDueDate" value={formState.dueDate} type="date" placeholder="select date" onChange={dueDatechanged} required/>
      </div>
      <div className="flex items-center justify-center">
      <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" id="addTaskButton">
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
    Add
  </button>
      </div>
    </form>
  </div>
    
)     
   }
  
;

export default TaskFormFC;