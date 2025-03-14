import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  const containerRef = useRef(null);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });

  // Tailwind-safe color array
  const colors = [ "bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-purple-400", "bg-pink-400", "bg-gray-400",];

  // Calculate drag constraints dynamically
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      setDragLimits({
        left: -(container.scrollWidth - container.clientWidth),
        right: 0,
      });
    }
  }, []);

  // Handle mouse wheel scrolling horizontally
  const handleWheelScroll = (event) => {
    if (containerRef.current) {
      event.preventDefault();
      containerRef.current.scrollLeft += event.deltaY * 1.5;
    }
  };

  return (
    <div
      ref={containerRef}
      id="tasklist"
      className="flex items-center justify-between h-[55%] overflow-x-auto scrollbar-hide"
      onWheel={handleWheelScroll}
    >
      <motion.div
        className="flex flex-nowrap justify-start items-center gap-6 h-[55%] w-full mt-10 p-6 rounded-xl cursor-grab"
        drag="x"
        dragConstraints={dragLimits}
      >

        {data.tasks.map((elem, id)=>{
          if(elem.active){
            return <AcceptTask key={id} data={elem} />
          }
          if(elem.newTask){
            return <NewTask key={id} data={elem} />
          }
          if(elem.completed){
            return <CompleteTask key={id} data={elem} />
          }
          if(elem.failed){
            return <FailedTask key={id} data={elem} />
          }
      })}

      </motion.div>
    </div>
  );
};

export default TaskList;
