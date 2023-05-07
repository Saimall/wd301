import React from 'react';
import Header from "./Header";

//React.fc has implicit child props even if your component does not alllow children typescript will not complain about it.
const HomePage= () => {
  return (
    <div>
    <Header/>
    <div>
      <h1>Task Manager</h1>
      <p>Welcome to the Task Manager application!</p>
    </div>
    </div>
  );
};

//you can also use JSX+props which is explicit decelration of props. this is best because we are more specifc about childrens and props.
/*
 const Homepage =()=>{
    return (
         <div>
      <h1>Task Manager</h1>
      <p>Welcome to the Task Manager application!</p>
    </div>
    )
 }
*/

export default HomePage;