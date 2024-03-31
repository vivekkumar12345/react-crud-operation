import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";

export default function Addmemberpopup(props) {
  let emaildata = "",
    namedata = "",
    memberIDdata = "",
    mobdata = "",
    dobdata,
    vivek = "insert",
    passData = "",
    userTypeData = "";
  if (props.editdata) {
    emaildata = props.editdata.email;
    namedata = props.editdata.name;
    memberIDdata = props.editdata.mem_id;
    mobdata = props.editdata.ph_no;
    dobdata = new Date(props.editdata.dob).toLocaleDateString("en-CA");
    vivek = props.editdata.user_id;
    passData = props.editdata.password;
    userTypeData = props.editdata.user_type;
  }

  const [formdata, setFormdata] = useState({
    name: namedata,
    email: emaildata,
    memberID: memberIDdata,
    mob: mobdata,
    dob: dobdata,
    userType: userTypeData,
    password: passData,
    vivek: vivek,
  });

  function submitForm(event) {
    if (formdata.vivek === "insert") {
      event.preventDefault();
      axios
        .post("http://localhost:8081/addmember", { formdata })
        .then((resp) => {
          if (resp.data == "Successfully Registered Member") {
            alert("Successfully Registered Member");
            props.addNew();
          } else {
            alert(resp.data);
          }
        })
        .catch((err) => alert("Error While Inserting data"));
    } else {
      axios
        .post("http://localhost:8081/editmember", { formdata })
        .then((resp) => {
          if (resp.data === "Success") {
            alert("Successfully Edited Member Details");
            props.addNew();
          }
        })
        .catch((err) => alert("Error While Inserting Data"));
    }
  }
  return (
    <div className="popup-bg">
      <div className="addmemberpopup-container">
        <button onClick={props.addNew} className="btnclose">
          <FaWindowClose />
        </button>
        <center>
          <h1 className="hone">FILL THE DETAILS </h1>
        </center>
        <form onSubmit={submitForm}>
          <table className="table-addmember">
            <tr>
              <td>Name :</td>
              <td>
                <input
                  value={formdata.name}
                  onChange={(event) =>
                    setFormdata({
                      ...formdata,
                      name: event.target.value,
                    })
                  }
                  className="form-input"
                  type="text"
                  name="name"
                  id="name"
                />
              </td>
              <td>Email :</td>
              <td>
                <input
                  value={formdata.email}
                  onChange={(event) =>
                    setFormdata({
                      ...formdata,
                      email: event.target.value,
                    })
                  }
                  className="form-input"
                  type="text"
                  name="email"
                  id="email"
                />
              </td>
            </tr>

            <tr>
              <td>member ID :</td>
              <td>
                <input
                  value={formdata.memberID}
                  onChange={(event) =>
                    setFormdata({
                      ...formdata,
                      memberID: event.target.value,
                    })
                  }
                  className="form-input"
                  type="text"
                  name="memid"
                  id="memid"
                />
              </td>
              <td>Phone No :</td>
              <td>
                <input
                  value={formdata.mob}
                  onChange={(event) =>
                    setFormdata({
                      ...formdata,
                      mob: event.target.value,
                    })
                  }
                  className="form-input"
                  type="text"
                  name="phone"
                  id="phone"
                />
              </td>
            </tr>

            <tr>
              <td>DOB :</td>
              <td>
                <input
                  defaultValue={formdata.dob}
                  onChange={(event) =>
                    setFormdata({
                      ...formdata,
                      dob: event.target.value,
                    })
                  }
                  className="form-input"
                  type="date"
                  name="dob"
                  id="dob"
                />
              </td>
              <td>User Type :</td>
              <td>
                <input
                  value={formdata.userType}
                  onChange={(event) =>
                    setFormdata({
                      ...formdata,
                      userType: event.target.value,
                    })
                  }
                  className="form-input"
                  type="text"
                  name="type"
                  id="type"
                />
              </td>
            </tr>

            <tr>
              <td>Password :</td>
              <td>
                <input
                  value={formdata.password}
                  onChange={(event) =>
                    setFormdata({
                      ...formdata,
                      password: event.target.value,
                    })
                  }
                  className="form-input"
                  type="password"
                  name="password"
                  id="password"
                />
              </td>
              <td>Confirm Password :</td>
              <td>
                <input
                  value={formdata.password}
                  className="form-input"
                  type="text"
                  name="passwd"
                  id="passwd"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={4} style={{ height: "15vh" }}>
                <input
                  type="hidden"
                  name="vivek"
                  id="vivek"
                  value={vivek}
                  onChange={(event) =>
                    setFormdata({
                      ...formdata,
                      vivek: event.target.value,
                    })
                  }
                />
                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}
