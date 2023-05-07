import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound=()=>{
    const navigate = useNavigate();

    function Navigate(){
       
            navigate("/");
    }

return (
  <div>
       <strong><h1>404</h1></strong>
       <button
          className="deleteTaskButton bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 rounded" id="backToHomeButton"
          onClick={()=>Navigate()}
        >
           Homepage
        </button>
  </div>

)

    }

    
export default NotFound;
