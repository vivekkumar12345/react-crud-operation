import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Menuleft() {
  return (
    <div className="menu-left-container">
      <div style={{ height: "30vh" }}></div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/addmember">Add Member</Link>
      <a>Attendance</a>
      <a>Logout</a>
    </div>
  );
}

export default Menuleft;
