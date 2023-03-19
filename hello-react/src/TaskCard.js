import "./TaskCard.css";

const TaskCard = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var duedate = new Date(props.dueDate);
  console.log(duedate);
  const duedatenumber = duedate.getDate();
  const duemonthnumber = duedate.getMonth();

  var completeddate = new Date(props.completedAtDate);
  const completedatenumber = completeddate.getDate();
  const completemonthnumber = completeddate.getMonth();
  if (
    duedatenumber >= completedatenumber &&
    duemonthnumber >= completemonthnumber
  ) {
    var status =
      "Completed on: " +
      completedatenumber +
      "th" +
      months[completemonthnumber];
  } else {
    status = "Due on: " + duedatenumber + "th" + months[duemonthnumber];
  }
  

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-2 TaskItem">
      <h2 className="font-bold mb-2">{props.title}</h2>
      <p className="text-gray-600 mb-2">{status}</p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Assignee: </span>
        {props.assigneeName}
      </p>
    </div>
  );
};
export default TaskCard;
