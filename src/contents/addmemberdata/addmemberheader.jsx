import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Addmemberpopup from "./addmemberpopup";

function Addmemberheader(props) {
  const [modal, setModal] = useState(false);
  function addNew() {
    setModal(!modal);
    props.countadd();
  }

  return (
    <>
      {modal && <Addmemberpopup addNew={addNew} />}

      <div className="addmember-head">
        <div className="addmemeber-head-top">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "20%" }}>
                  <a className="span" onClick={addNew}>
                    &#43;
                  </a>
                </td>
                <td style={{ width: "60%" }} className="heading-up">
                  Members
                </td>
                <td style={{ width: "20%" }}>
                  <input
                    onChange={(e) => props.filterdata(e.target.value)}
                    style={{ width: "90%", paddingLeft: "5%" }}
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    name="search"
                    id="search"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Addmemberheader;
