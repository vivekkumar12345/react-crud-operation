import React from "react";

function Dashboardhead() {
  return (
    <div className="dashboard-head">
      <div className="dashboard-head-top">
        <table style={{ width: "100%" }}>
          <tr>
            <td style={{ width: "20%" }}></td>
            <td style={{ width: "60%" }}>
              <input
                className="search-input"
                type="text"
                placeholder="Search"
                name="search"
                id="search"
              />
            </td>
            <td style={{ width: "20%" }}></td>
          </tr>
          <tr>
            <td className="heading-up" colSpan={3}>
              Dashboard
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Dashboardhead;
