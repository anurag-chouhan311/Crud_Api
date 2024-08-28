import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewDetails = () => {
  const { studentid } = useParams();
  const [studentData, setStudentData] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/students/" + studentid)
      .then((res) => res.json())
      .then((data) => setStudentData(data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="container_studentTable">
      <h2 className="text-center text-3xl font-bold mb-3">Student Details</h2>
      <div className="deatils flex flex-col gap-3">
        <p>
          <strong className="text-purple-800">ID : </strong>
          {studentData.id}
        </p>
        <p>
          <strong className="text-purple-800">NAME : </strong>
          {studentData.name}
        </p>
        <p>
          <strong className="text-purple-800">PLACE : </strong>
          {studentData.place}
        </p>
        <p>
          <strong className="text-purple-800">PHONE : </strong>
          {studentData.phone}
        </p>
      </div>
      <button className="border-2 py-2 px-4 mt-3 bg-red-500 text-white font-bold rounded-md">
        {" "}
        <Link to={"/"}>Back</Link>
      </button>
    </div>
  );
};

export default ViewDetails;
