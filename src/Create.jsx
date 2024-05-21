import React from "react";
import { useState } from "react";
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, age };
    await axios.post("http://localhost:5000/create", user);
    setName("");
    setEmail("");
    setAge("");

    alert("User Created Successfully");
    window.location = "/";
    
  };

  return (
    <div className="FormDiv">
      <form onSubmit={handleSubmit} >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;
