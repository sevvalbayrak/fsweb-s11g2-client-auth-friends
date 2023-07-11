import React, { useContext, useState } from "react";
import "../App.css";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [user, setUser] = useState({
    username: "workintech",
    password: "wecandoit",
  });
  const { login } = useContext(AuthContext);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <div className="login">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label> USERNAME</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={user.username}
        />

        <label> PASSWORD</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
export default Login;
