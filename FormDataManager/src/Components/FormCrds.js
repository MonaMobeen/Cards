 
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormCards.css";  

const FormCards = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    department: "",
    age: "",
  });
  const [data, setData] = useState([]);
  const [viewMode, setViewMode] = useState("cards"); // "cards" or "table"
  const [filter, setFilter] = useState({ gender: "", department: "" });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...data, formData];
    setData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setFormData({ name: "", gender: "", department: "", age: "" });
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setData(storedData);
  }, []);

  // Filter data based on selection
  const filteredData = data.filter((item) => {
    return (
      (filter.gender ? item.gender === filter.gender : true) &&
      (filter.department ? item.department === filter.department : true)
    );
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center">React Form with Cards</h1>

      {/* Form Section */}
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            className="form-select"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <select
            name="department"
            className="form-select"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="HR dept">HR dept</option>
            <option value="mern dept">MERN dept</option>
            <option value="Front end dept">Front end dept</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Filter Section */}
      <div className="mb-4">
        <h5>Filter Options</h5>
        <div className="d-flex gap-3">
          <select
            className="form-select"
            onChange={(e) => setFilter({ ...filter, gender: e.target.value })}
          >
            <option value="">Filter by Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            className="form-select"
            onChange={(e) => setFilter({ ...filter, department: e.target.value })}
          >
            <option value="">Filter by Department</option>
            <option value="HR dept">HR dept</option>
            <option value="mern dept">MERN dept</option>
            <option value="Front end dept">Front end dept</option>
          </select>
        </div>
      </div>

      <button
        className="btn btn-secondary mb-4"
        onClick={() => setViewMode(viewMode === "cards" ? "table" : "cards")}
      >
        Toggle View
      </button>

      {/* Display Section */}
      {viewMode === "cards" ? (
        <div className="row">
          {filteredData.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front p-3 text-center">
                    <h5>{item.name}</h5>
                    <p>{item.gender}</p>
                  </div>
                  <div className="flip-card-back p-3 text-center">
                    <h5>{item.department}</h5>
                    <p>Age: {item.age}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.department}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FormCards;
