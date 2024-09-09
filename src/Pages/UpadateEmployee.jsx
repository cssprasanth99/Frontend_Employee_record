import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_PATH } from "../utilities/ApiPath";

const UpdateEmployee = () => {
  const userName = localStorage.getItem("userName");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [courses, setCourses] = useState([]);
  const [file, setFile] = useState(null);
  const { employeeId } = useParams();

  const getSingleEmployee = async () => {
    try {
      const response = await fetch(`${API_PATH}employees/${employeeId}`);
      if (!response.ok) {
        throw new Error("Employee not found");
      }
      const employeeData = await response.json();
      setName(employeeData.name);
      setEmail(employeeData.email);
      setMobile(employeeData.mobile);
      setDesignation(employeeData.designation);
      setGender(employeeData.gender);
      setCourses(employeeData.course); // Assuming `courses` is an array in your API response
      console.log(employeeData);
    } catch (error) {
      console.error("Failed to fetch employee", error);
    }
  };

  useEffect(() => {
    getSingleEmployee();
  }, []);

  const handleCoursesChange = (e) => {
    const value = e.target.value;
    if (courses.includes(value)) {
      setCourses(courses.filter((item) => item !== value));
    } else {
      setCourses([...courses, value]);
    }
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setFile(selectedImage);
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      const employeeData = new FormData();
      employeeData.append("name", name);
      employeeData.append("email", email);
      employeeData.append("mobile", mobile);
      employeeData.append("designation", designation);
      employeeData.append("gender", gender);

      courses.forEach((value) => {
        employeeData.append("course", value);
      });

      if (file) {
        employeeData.append("image", file);
      }

      const response = await fetch(`${API_PATH}employees/${employeeId}`, {
        method: "PATCH",
        body: employeeData,
      });

      if (response.ok) {
        alert("Employee updated successfully");
        setName("");
        setEmail("");
        setMobile("");
        setDesignation("");
        setGender("");
        setCourses([]);
        setFile(null);
      } else {
        console.error("Failed to update employee");
      }
    } catch (error) {
      console.log("Failed to update employee", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="navbar">
        <div className="company">
          <h1>Employee Dashboard</h1>
        </div>
        <div className="username">
          <h4>User: {userName}</h4>
        </div>
      </div>
      <div className="employeeSection">
        <form className="tableForm" onSubmit={updateEmployee}>
          <h3>Update Employee</h3>
          <label>Employee Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <label>Designation</label>
          <select
            name="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          >
            <option value="">Select designation</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>

          <div className="radio-group">
            <label>Gender</label>
            <div className="input-container">
              <div className="radio-container">
                <label>
                  Male
                  <input
                    type="radio"
                    name="gender"
                    checked={gender === "Male"}
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
                <label>
                  Female
                  <input
                    type="radio"
                    name="gender"
                    checked={gender === "Female"}
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="check-box">
            <label>Courses</label>
            <div className="input-container">
              <div className="checkbox-container">
                <label>
                  MCA
                  <input
                    type="checkbox"
                    value="MCA"
                    checked={courses.includes("MCA")}
                    onChange={handleCoursesChange}
                  />
                </label>
                <label>
                  BCA
                  <input
                    type="checkbox"
                    value="BCA"
                    checked={courses.includes("BCA")}
                    onChange={handleCoursesChange}
                  />
                </label>
                <label>
                  BSC
                  <input
                    type="checkbox"
                    value="BSC"
                    checked={courses.includes("BSC")}
                    onChange={handleCoursesChange}
                  />
                </label>
              </div>
            </div>
          </div>

          <label>Image</label>
          <input type="file" onChange={handleImageUpload} />
          <br />
          <div className="btnSubmit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;