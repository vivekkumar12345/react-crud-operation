import React from "react";
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";

function DeleteMember(props) {
  function handlesubmit(event) {
    event.preventDefault();
    const ids = props.deleteid;
    axios
      .post("http://localhost:8081/deletemember", { ids })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    props.deletedata();
    props.countadd();
  }
  return (
    <>
      <div className="popup-bg">
        <div
          className="addmemberpopup-container"
          style={{
            height: "40vh",
            width: "40%",
            marginLeft: "30%",
            marginTop: "30vh",
          }}
        >
          <button onClick={props.deletedata} className="btnclose">
            <FaWindowClose />
          </button>
          <div style={{ width: "100%", height: "8vh" }}></div>
          <center>
            <form onSubmit={handlesubmit}>
              <p>
                Are you sure you want to delete Member id{" "}
                <span style={{ color: "red", fontWeight: "bolder" }}>
                  {props.deleteid}
                </span>
              </p>
              <div style={{ width: "100%", height: "4vh" }}></div>
              <button
                className="btn btn-success"
                style={{ marginLeft: "1%", width: "30%" }}
              >
                Yes
              </button>
              <button
                className="btn btn-danger"
                onClick={props.deletedata}
                style={{ marginLeft: "10%", width: "30%" }}
              >
                Cancel
              </button>
            </form>
          </center>
        </div>
      </div>
    </>
  );
}

export default DeleteMember;
