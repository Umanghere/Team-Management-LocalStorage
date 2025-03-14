import React from "react";
import Header from "../comps/Header";
import Form from "../comps/Form";
import AllTask from "../comps/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-12 bg-[#1c1c1c]">
      <Header changeUser={props.changeUser} />
      <Form />
      <AllTask   />
     </div>
  );
};

export default AdminDashboard;
