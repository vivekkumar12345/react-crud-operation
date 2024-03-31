import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Addmemberheader from "./addmemberheader";
import { FaWindowClose, FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import DeleteMember from "./deletemember";
import Addmemberpopup from "./addmemberpopup";

function Addmemberbody() {
  const [count, setCount] = useState(0);
  let [member, setMember] = useState([]);
  const [modals, setModals] = useState(false);
  const [savemember, setSavemember] = useState([]);
  const [editdata, setEditData] = useState([]);
  function editNew() {
    setModals(!modals);
  }

  function countadd() {
    setCount((c) => c + 1);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8081/memberdata")
      .then((resp) => {
        setMember(resp.data);
        setSavemember(resp.data);
      })
      .catch((err) => console.log(err));
  }, [count]);

  function filtermemberdata(dta) {
    member = savemember;
    console.log(savemember);
    const dtas = dta.toUpperCase();
    const filtered = member.filter(
      (mem) =>
        mem.name.toUpperCase().includes(dtas) ||
        mem.email.toUpperCase().includes(dtas) ||
        mem.mem_id.toUpperCase().includes(dtas)
    );
    setMember(filtered);
  }
  const [deletepop, setDeletepop] = useState(false);
  const [deleteid, setDeleteID] = useState("");

  function updelid(id) {
    setDeleteID(id);
    deletedata();
  }
  function deletedata() {
    setDeletepop(!deletepop);
  }

  return (
    <>
      {deletepop && (
        <DeleteMember
          deletedata={updelid}
          deleteid={deleteid}
          countadd={countadd}
        />
      )}
      {modals && <Addmemberpopup addNew={editNew} editdata={editdata} />}
      <Addmemberheader filterdata={filtermemberdata} countadd={countadd} />
      <div className="addmember-body">
        <center>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Ser No</th>
                <th scope="col">Member ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {member.map((data, i) => (
                <tr key={data.user_id}>
                  <td style={{ textAlign: "center" }}>{i + 1}</td>
                  <td style={{ textAlign: "center" }}>{data.mem_id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>
                    <button
                      onClick={() => {
                        setEditData(data);
                        editNew();
                      }}
                      className="btnclose"
                      style={{ color: "blue" }}
                    >
                      <FaUserEdit />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        updelid(data.user_id);
                      }}
                      className="btnclose"
                      style={{ textAlign: "center" }}
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}

export default Addmemberbody;
