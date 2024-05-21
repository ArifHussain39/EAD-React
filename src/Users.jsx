import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000 /users/${id}`);
    alert("User Deleted Successfully");
    window.location = "/";
  };

  return (
    <>
      <div className="showUsers">
        <button>
          <Link to="/create" style={{ textDecoration: "none" }}>
            Add User
          </Link>
        </button>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button>
                    <Link
                      to={`/update/${user._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      Update
                    </Link>
                  </button>
                  <button onClick={(e) => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
