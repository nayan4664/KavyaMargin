import React from "react";
import "./Employee.css";

function Employee() {
  return (
    <div>
      <h2>Employee & Resource Management</h2>

      <div className="employee-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Monthly Salary</th>
              <th>Assigned Project</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rahul Sharma</td>
              <td>Development</td>
              <td>₹ 75,000</td>
              <td>ERP Implementation</td>
              <td className="active">Active</td>
            </tr>
            <tr>
              <td>Pooja Mehta</td>
              <td>Design</td>
              <td>₹ 65,000</td>
              <td>Mobile App Dev</td>
              <td className="active">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;