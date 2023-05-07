import React from "react";
// import Task from "./Task";
// import TaskList from "./TaskList";
// import logo from './logo.svg';
import "./App.css";
// import TaskForm from "./TaskForm";
import TaskApp from "./TaskApp";
import { Routes, Route,useLocation } from "react-router-dom";
import Homepage from "./Homepage";
import TaskDeatilesPage from "./TaskDetailesPage";
import Header from "./Header";
import Signin from "./Signin";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        {location.pathname!=="/signin" && <Header/>}
        <Routes>
          <Route path="/" element={<ProtectedRoute element = {<Homepage/>}/>}/>
          <Route path="/tasks" element={<ProtectedRoute element = {<TaskApp/>}/>}/>
          <Route path="/tasks/:id" element={<ProtectedRoute element = {<TaskDeatilesPage/>}/>}/>
          <Route path="/signin" Component={Signin} />
        </Routes>
        </header>
      </div>
  );
}

export default App;
