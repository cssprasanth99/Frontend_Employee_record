import React from "react";

const Sidebar = ({ showEmployeesHandler, showAllEmployeesHandler }) => {
  return (
    <div className="sideBarSection">
      <ul>
        <li onClick={showEmployeesHandler} style={{ cursor: "pointer" }}>
          Add Employee
        </li>
        <li onClick={showAllEmployeesHandler} style={{ cursor: "pointer" }}>
          All Employees
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
