import { useState } from "react";
import { API_PATH } from "../../utilities/ApiPath";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [courses, setCourses] = useState([]);
  const [file, setFile] = useState(null);

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

  const handleEmployees = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("loginToken");
      if (!loginToken) {
        console.error("User not authenticated");
        return;
      }

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

      const response = await fetch(`${API_PATH}employees/add-employee`, {
        method: "POST",
        headers: {
          token: `${loginToken}`,
        },
        body: employeeData,
      });

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text);
      }

      if (response.ok) {
        console.log(data);
        alert("Employee added successfully");
        setName("");
        setEmail("");
        setMobile("");
        setDesignation("");
        setGender("");
        setCourses([]);
        setFile(null);
      } else {
        console.error("Failed to add employee", data);
      }
    } catch (error) {
      console.log("Failed to add employee", error);
      alert(error.message);
    }
  };

  return (
    <div className="employeeSection">
      <form className="tableForm" onSubmit={handleEmployees}>
        <h3>Add Employee</h3>
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
                  checked={courses.includes("MCA")}
                  onChange={handleCoursesChange}
                  value="MCA"
                />
              </label>
              <label>
                BCA
                <input
                  type="checkbox"
                  checked={courses.includes("BCA")}
                  value="BCA"
                  onChange={handleCoursesChange}
                />
              </label>
              <label>
                BSC
                <input
                  type="checkbox"
                  checked={courses.includes("BSC")}
                  value="BSC"
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
  );
};

export default AddEmployee;