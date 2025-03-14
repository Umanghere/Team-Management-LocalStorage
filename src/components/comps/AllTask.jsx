import { AuthContext } from "../../context/AuthProvider";
import React, { useContext } from "react";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData.employees);

  return (
    <div className="flex w-full justify-center">
      <div className="bg-[#2c2c2c] h-55 p-5 rounded mt-5 w-full md:w-5/6 flex flex-col overflow-hidden">
        
        {/* HEADER (Sticky) */}
        <div className="grid grid-cols-5 gap-2 font-medium text-sm md:text-lg p-3 bg-[#2c2c2c] sticky top-0">
          <h2 className="text-center">Employee Name</h2>
          <h3 className="text-center">New Task</h3>
          <h5 className="text-center">Active</h5>
          <h5 className="text-center">Completed</h5>
          <h5 className="text-center">Failed</h5>
        </div>

        {/* SCROLLABLE DATA SECTION */}
        <div id="scrollbar" className="overflow-y-auto flex-grow">
          {userData.map((elem, index) => (
            <div 
              key={index} 
              className="grid grid-cols-5 gap-2 bg-[#1c1c1c] mb-3 py-2 text-base md:text-xl items-center rounded"
            >
              <h2 className="text-center">{elem.firstName}</h2>
              <h3 className="text-center text-blue-600">{elem.taskNumbers.newTask}</h3>
              <h5 className="text-center text-yellow-400">{elem.taskNumbers.active}</h5>
              <h5 className="text-center text-green-600">{elem.taskNumbers.completed}</h5>
              <h5 className="text-center text-red-600">{elem.taskNumbers.failed}</h5>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllTask;
