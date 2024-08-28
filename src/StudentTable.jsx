import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/students");
    const response = await data.json();
    setStudents(response);
    // console.log(response);
  };

  const viewDetails = (id) => {
    navigate(`/student/view/${id}`);
  };

  const editDetails = (id) => {
    navigate(`/student/edit/${id}`);
  };
  const deleteDetails = (id) => {
    if (window.confirm("Are you sure to delete this data")) {
      fetch("http://localhost:3000/students/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("student data Delete successfully...");
          navigate("/");
        })
        .catch((err) => console.log(err.message));
    }
  };
  useEffect(() => {
    fetchData();
  }, [students]);
  return (
    <div className="container_studentTable">
      <h2 className="text-2xl font-bold text-[rgb(151,13,151)]">
        Student Records
      </h2>
      <div className="table_container">
        <Link to={"/student/create"} className="btn btn-add">
          {" "}
          Add New Student
        </Link>
        <table className="table_container2 text-white">
          <thead
            style={{
              background: "rgb(151, 13, 151)",
              height: "40px",
              padding: "10px",
              height: "50px",
            }}
          >
            <tr style={{ textAlign: "center" }}>
              <th>S No</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#ccc] text-purple-800">
            {students?.map((item, index) => {
              return (
                <tr key={index} style={{ textAlign: "center", height: "60px" }}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.phone}</td>
                  <td className="flex items-center justify-center gap-4 mt-3">
                    <button
                      onClick={() => viewDetails(item.id)}
                      className=" text-white rounded-md py-1 px-3 bg-yellow-400"
                    >
                      View
                    </button>
                    <button
                      onClick={() => deleteDetails(item.id)}
                      className=" text-white rounded-md py-1 px-3 bg-red-400"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => editDetails(item.id)}
                      className="  text-white rounded-md py-1 px-3 bg-blue-400"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
