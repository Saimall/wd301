import React from "react";
// import Task from "./Task";
// import TaskList from "./TaskList";
// import logo from './logo.svg';
import "./App.css";
// import TaskForm from "./TaskForm";
import TaskApp from "./TaskApp";
import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import TaskDetailsPage from "./TaskDetailsPage";

import Signin from "./Signin";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";
// import { useNavigate,useLocation } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Homepage />} />} />
          <Route
            path="/tasks"
            element={<ProtectedRoute element={<TaskApp />} />}
          />
          <Route
            path="/tasks/:id"
            element={<ProtectedRoute element={<TaskDetailsPage />} />}
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<ProtectedRoute element={<NotFound />}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
