import React from "react";

const Sidebar = ({ showEmployeeshandler }) => {
  return (
    <div className="sideBarSection">
      <ul>
        <li onClick={showEmployeeshandler}>Add Employee</li>
        <li>All Employees</li>
      </ul>
    </div>
  );
};

export default Sidebar;
