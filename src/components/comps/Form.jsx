import { AuthContext } from "../../context/AuthProvider";
import React, { useContext, useState } from "react";

const Form = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [category, setCategory] = useState("")

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();

    setNewTask({taskTitle, taskDescription, taskDate, assignTo, category, active: false, newTask: true, failed: false, completed:false});

    const data = userData
    
    data.forEach(function(elem){
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1; 
        // console.log(elem.tasks);
      }
    })
    setUserData(data)
    console.log(data);

      // setCategory('')
      // setAssignTo('')
      // setTaskDate('')
      // setTaskDescription('')
      // setTaskTitle('')
  }

  return (
    <div className="container mx-auto px-4">
      <div className="my-8 bg-[#2c2c2c] p-4 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
          Create a New Task
        </h2>

        <form onSubmit={(e)=> submitHandler(e) } className="flex flex-col lg:flex-row lg:justify-between gap-6">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <div>
              <label className="text-lg md:text-xl block text-white font-medium">
                Task Title
              </label>
              <input
              value={taskTitle}
              onChange={(e)=>setTaskTitle(e.target.value)}
                className="w-full px-3 py-2 mt-1 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none text-white"
                type="text"
                placeholder="Enter the Task Title"
              />
            </div>

            <div>
              <label className="text-lg md:text-xl block text-white font-medium">
                Date
              </label>
              <input
              value={taskDate}
              onChange={(e)=>setTaskDate(e.target.value)}
                className="w-full px-3 py-2 mt-1 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none text-white"
                type="date"
              />
            </div>

            <div>
              <label className="text-lg md:text-xl block text-white font-medium">
                Assign to
              </label>
              <input
              value={assignTo}
              onChange={(e)=>setAssignTo(e.target.value)}
                className="w-full px-3 py-2 mt-1 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none text-white"
                type="text"
                placeholder="Employee name"
              />
            </div>

            <div>
              <label className="text-lg md:text-xl block text-white font-medium">
                Category
              </label>
              <input
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
                className="w-full px-3 py-2 mt-1 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none text-white"
                type="text"
                placeholder="Design, Dev, etc."
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <div>
              <label className="text-lg md:text-xl block text-white font-medium">
                Description
              </label>
              <textarea
              value={taskDescription}
              onChange={(e)=>setTaskDescription(e.target.value)}
                className="w-full px-3 py-2 mt-1 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none text-white"
                rows="8"
                placeholder="Enter task details..."
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 md:py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-200">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
