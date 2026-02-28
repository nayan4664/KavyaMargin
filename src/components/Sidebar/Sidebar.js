import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="brand">CorpSuite</h2>

      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/employee">Employee Management</NavLink>
      <NavLink to="/billing">Billing & AI Insights</NavLink>
    </div>
  );
}

export default Sidebar;