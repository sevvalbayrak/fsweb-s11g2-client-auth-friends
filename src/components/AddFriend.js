import { useContext, useState } from "react";
import "../App.css";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function AddFriend() {
  const [newFriend, setNewFriend] = useState({
    name: "",
    email: "",
    age: "",
  });

  const { authInfo } = useContext(AuthContext);

  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...newFriend, age: Number(newFriend.age) };
    const config = {
      method: "post",
      url: "http://localhost:9000/api/friends",
      headers: {
        Authorization: authInfo.token,
        "Content-Type": "application/json",
      },
      data: payload,
    };
    axios(config)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="addFriend">
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit}>
        <label>FRIEND NAME</label>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />

        <label>FRIEND MAIL</label>
        <input
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />

        <label> FRIEND AGE </label>
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={newFriend.age}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
export default AddFriend;
