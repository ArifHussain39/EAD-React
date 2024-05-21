import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Update() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/users/" + id).then((res) => {
      setCurrentUser(res.data);
      setName(res.data.name);
      setEmail(res.data.email);
      setAge(res.data.age);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, age };
    await axios.put("http://localhost:5000/update/" + id, user);

    alert("User Updated Successfully");
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
        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default Update;
