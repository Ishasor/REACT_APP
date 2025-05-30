import React, { useState, useEffect } from "react";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setError(null); 

        
        await new Promise((resolve) => setTimeout(resolve, 2000));

        
        if (Math.random() < 0.2) {
          throw new Error("Failed to fetch employee data!");
        }

        setEmployees([
          { id: 1, name: "Aarav Patel", age: 28, salary: "₹45,000" },
          { id: 2, name: "Meera Sharma", age: 24, salary: "₹30,000" },
          { id: 3, name: "Rohan Gupta", age: 29, salary: "₹25,000" },
          { id: 4, name: "Priya Verma", age: 26, salary: "₹35,000" },
          { id: 5, name: "Vikram Rao", age: 30, salary: "₹45,000" },
        ]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {loading && <div style={{ fontSize: "20px" }}>🔄 Loading employee data...</div>}
      {error && <div style={{ color: "red", fontSize: "18px" }}>❌ {error}</div>}
      {employees.length > 0 && (
        <table border="1" style={{ margin: "20px auto", borderCollapse: "collapse", width: "60%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeTable;
