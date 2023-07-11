import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function FriendsList() {
  const [friends, setFriends] = useState([]);
  const { authInfo } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: authInfo.token,
        },
      })
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="friendList">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend) => (
        <div key={friend.id}>
          -{friend.name} - {friend.email}
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
