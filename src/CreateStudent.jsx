import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };
    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        alert("student data saved successfully...");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container_studentTable">
      <h2 className="text-purple-800 text-2xl font-bold">Add New Student</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="id">
          ID:
        </label>
        <input
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
          onMouseDown={() => setValidation(true)}
          className="border-2 outline-none p-1"
          type="text"
          id="id"
          name="id"
        />
        {id.length === 0 && validation && (
          <span className="text-red-700">
            {" "}
            <sup>*</sup> Please Enter An ID
          </span>
        )}
        <label className="font-bold" htmlFor="name">
          NAME:
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          onMouseDown={() => setValidation(true)}
          className="border-2 outline-none p-1"
          type="text"
          id="name"
          name="name"
        />
        {name.length === 0 && validation && (
          <span className="text-red-700">
            {" "}
            <sup>*</sup> Please Enter Your Name
          </span>
        )}
        <label className="font-bold" htmlFor="place">
          PLACE:
        </label>
        <input
          required
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          onMouseDown={() => setValidation(true)}
          className="border-2 outline-none p-1"
          type="text"
          id="place"
          name="place"
        />
        {place.length === 0 && validation && (
          <span className="text-red-700">
            {" "}
            <sup>*</sup> Please Enter Place Name
          </span>
        )}
        <label className="font-bold" htmlFor="phone">
          PHONE:
        </label>
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onMouseDown={() => setValidation(true)}
          className="border-2 outline-none p-1"
          type="text"
          id="phone"
          name="phone"
        />
        {phone.length === 0 && validation && (
          <span className="text-red-700">
            {" "}
            <sup>*</sup> Please Enter Your Phone
          </span>
        )}
        <div className="flex gap-3 items-center">
          <button className="border-2 p-2 mt-3 bg-purple-500 text-white font-bold rounded-md">
            save
          </button>
          <button className="border-2 p-2 mt-3 bg-red-500 text-white font-bold rounded-md">
            {" "}
            <Link to={"/"}>Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStudent;
