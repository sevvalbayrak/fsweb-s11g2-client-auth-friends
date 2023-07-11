import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div>
        <h1>FRIENDS DATABASE</h1>
      </div>
      <div className="headerButton">
        <Link exact to="/login">
          <button>LOGIN.</button>
        </Link>
        <Link to="friends">
          <button>FRIENDLIST.</button>
        </Link>
        <Link to="/friends_add">
          <button>ADDFRIEND.</button>
        </Link>
        <Link to="/logout">
          <button>LOGOUT</button>
        </Link>
      </div>
    </div>
  );
}
export default Header;
