import React from "react";
// import Task from "./Task";
// import TaskList from "./TaskList";
// import logo from './logo.svg';
import "./App.css";
// import TaskForm from "./TaskForm";
import TaskApp from "./TaskApp";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import TaskDeatilesPage from "./TaskDetailesPage";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/tasks" element={<TaskApp/>}/>
          <Route path="/tasks/:id" element={<TaskDeatilesPage/>}/>
        </Routes>
        </header>
      </div>
  );
}

export default App;
