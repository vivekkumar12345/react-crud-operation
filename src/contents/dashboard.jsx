import React from "react";
import "../css/dashboard.css";
import Menuleft from "./combinedcontent/menuleft";
import Dashbboardhead from "./dashboardata/dashboardhead";
import Dashboardbody from "./dashboardata/dashboardbody";
import Footer from "./combinedcontent/footer";

function Dashboard() {
  return (
    <>
      <div className="body-container">
        <Menuleft />
        <div className="body-right">
          <Dashbboardhead />
          <Dashboardbody />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
