import React, { useEffect, useState } from "react";
import { API_PATH } from "../utilities/ApiPath";
import { Link } from "react-router-dom";

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  const productHandler = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await fetch(`${API_PATH}employees/${userId}/employees`);
      const employeeData = await response.json();
      setEmployees(employeeData.employees);
      console.log(employeeData);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  };

  const deleteEmployeeById = async (employeeId) => {
    try {
      const response = await fetch(`${API_PATH}employees/${employeeId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setEmployees(
          employees.filter((employee) => employee._id !== employeeId)
        );
        confirm("Are you sure, you want to delete?");
        alert("Employee deleted successfully");
      }
    } catch (error) {
      console.error("Failed to delete employee");
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <div>
      {!employees ? (
        <p>No employees found</p>
      ) : (
        <table className="employee-table">
          <thead>
            <tr>
              <th>Unique Id</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Courses</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>
                  {item.image && (
                    <img
                      src={`${API_PATH}uploads/${item.image}`}
                      alt={item.image}
                      style={{ width: "60px", height: "60px" }}
                    />
                  )}
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.designation}</td>
                <td>{item.gender}</td>
                <td>
                  {item.course.map((course, index) => (
                    <span key={index}>
                      {course}
                      {index < item.course.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </td>
                <td>
                  <Link to={`/${item._id}`}>
                    <button>Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteEmployeeById(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllEmployees;
