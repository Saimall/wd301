import React from "react";
import { useNavigate } from "react-router-dom";


const Userdashboard : React.FC =()=>{
const naviagte = useNavigate();
    const response = localStorage.getItem('userData');
    let data;
    if(response){
     data = JSON.parse(response);
    }
    console.log(data);

    const signout=()=>{
         localStorage.removeItem('userData');
         localStorage.removeItem('authToken');
        naviagte("/signin");
    }
return (
    <>
    <div>
      <label className="block text-gray-700 font-semibold mb-2">UserEmail:</label>
      <h1 className="w-full  text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue">
      {data.email}
      </h1>
    </div>
    <div>
    <label className="block text-gray-700 font-semibold mb-2">UserName:</label>
    <h1 className="w-full text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue">
    {data.name}
    </h1>
    <button type="submit" id="logout-link" className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4" onClick={signout}>logout</button>
    </div>
    </>
)
   
}
export default Userdashboard;