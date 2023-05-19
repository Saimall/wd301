import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from "react";
// // import Task from "./Task";
// // import TaskList from "./TaskList";
// // import logo from './logo.svg';
// import "./App.css";
// // import TaskForm from "./TaskForm";
// import TaskApp from "./TaskApp";
// import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import Homepage from "./HomePage";
// import TaskDetailsPage from "./TaskDetailsPage";

// import Signin from "./Signin";
// import ProtectedRoute from "./ProtectedRoute";
// import NotFound from "./NotFound";
// import Header from "./Header";
// import ReactPlayground from "./ReactPlayground";
// import Form from './Form';

// function App() {
//   const location = useLocation();
//   return (
//     <div className="App">
//       <header className="App-header">
//         {location.pathname !== "/signin" &&
//           location.pathname !== "/notfound" && <Header />}
//           <Form/>
//           <ReactPlayground/>
//         <Routes>
//           <Route path="/" element={<ProtectedRoute element={<Homepage />} />} />
//           <Route
//             path="/tasks"
//             element={<ProtectedRoute element={<TaskApp />} />}
//           />
//           <Route
//             path="/tasks/:id"
//             element={<ProtectedRoute element={<TaskDetailsPage />} />}
//           />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/notfound" element={<NotFound />} />
//           <Route path="*" element={<Navigate to="/notfound" />} />
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App;
