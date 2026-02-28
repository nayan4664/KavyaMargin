import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard & Margin Tracker</h2>

      <div className="summary-cards">
        <div className="card blue">
          <h4>Total Revenue</h4>
          <p>₹ 45,00,000</p>
        </div>

        <div className="card red">
          <h4>Total Expenses</h4>
          <p>₹ 28,50,000</p>
        </div>

        <div className="card green">
          <h4>Net Profit</h4>
          <p>₹ 16,50,000</p>
        </div>

        <div className="card purple">
          <h4>Profit Margin</h4>
          <p>36.6%</p>
        </div>
      </div>

      <div className="tracker-section">
        <h3>Project Margin Overview</h3>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Revenue</th>
              <th>Cost</th>
              <th>Margin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ERP Implementation</td>
              <td>₹ 18,00,000</td>
              <td>₹ 12,00,000</td>
              <td className="profit">₹ 6,00,000</td>
            </tr>
            <tr>
              <td>Mobile App Dev</td>
              <td>₹ 10,00,000</td>
              <td>₹ 7,50,000</td>
              <td className="profit">₹ 2,50,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;