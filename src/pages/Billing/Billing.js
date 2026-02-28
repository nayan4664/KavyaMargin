import React from "react";
import "./Billing.css";

function Billing() {
  return (
    <div>
      <h2>Billing, Invoicing & AI Insights</h2>

      <div className="billing-cards">
        <div className="billing-box">
          <h4>Total Invoiced</h4>
          <p>₹ 32,00,000</p>
        </div>

        <div className="billing-box">
          <h4>Pending Payments</h4>
          <p>₹ 5,50,000</p>
        </div>

        <div className="billing-box">
          <h4>AI Revenue Prediction</h4>
          <p>₹ 50,00,000 Next Quarter</p>
        </div>
      </div>

      <div className="invoice-table">
        <h3>Recent Invoices</h3>
        <table>
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#INV1023</td>
              <td>TCS Pvt Ltd</td>
              <td>₹ 4,00,000</td>
              <td className="paid">Paid</td>
            </tr>
            <tr>
              <td>#INV1024</td>
              <td>Infosys Ltd</td>
              <td>₹ 3,50,000</td>
              <td className="pending">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Billing;