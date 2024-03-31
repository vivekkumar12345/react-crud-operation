import React from "react";
import "../css/dashboard.css";
import Menuleft from "./combinedcontent/menuleft";
import Addmemberbody from "./addmemberdata/addmemberbody";
import Addmemberheader from "./addmemberdata/addmemberheader";

import Footer from "./combinedcontent/footer";
function Addmember() {
  return (
    <>
      <div className="body-container">
        <Menuleft />
        <div className="body-right">
          <Addmemberbody />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Addmember;
