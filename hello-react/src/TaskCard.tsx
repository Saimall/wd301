import "./TaskCard.css";
import React from "react";

const TaskCard = (props) => {
  // let months: string[] = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  // if (props.completedAtDate) {
  //   var completeddate = new Date(props.completedAtDate);
  // const completedatenumber = completeddate.getDate();
  // const completemonthnumber = completeddate.getMonth();
  //   var status =
  //     "Completed on: " +
  //     completedatenumber +
  //     "th" +
  //     months[completemonthnumber];
  // } else {
  //   var duedate = new Date(props.dueDate);
  // console.log(duedate);
  // const duedatenumber = duedate.getDate();
  // const duemonthnumber = duedate.getMonth();
  //   status = "Due on: " + duedatenumber + "th" + months[duemonthnumber];
  // }
  if (props.completedAtDate) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-2 TaskItem hover:bg-gray-200">
        <h2 className="font-bold mb-2">{props.title}</h2>
        <p className="text-gray-800 mb-2">
          {" "}
          <span className="font-bold">Completed on: </span>
          {props.completedAtDate}
        </p>
        <p className="text-gray-800 mb-2">
          <span className="font-bold">Assignee: </span>
          {props.assigneeName}
        </p>
      </div>
    );
  } else {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-2 TaskItem hover:bg-gray-200">
        <h2 className="font-bold mb-2">{props.title}</h2>
        <p className="text-gray-800 mb-2">
          {" "}
          <span className="font-bold">Due on: </span>
          {props.dueDate}
        </p>
        <p className="text-gray-800 mb-2">
          <span className="font-bold">Assignee: </span>
          {props.assigneeName}
        </p>
      </div>
    );
  }
};
export default TaskCard;
