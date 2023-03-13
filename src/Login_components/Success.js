import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Success() {
  const userContextData = useContext(UserContext);
  const username = localStorage.getItem("userName");
  return (
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-12 ">
          <br />
          <br /> <h2 style={{ color: "#0fad00" }}>Success</h2>
          <img src="https://www.vippng.com/png/full/144-1445023_comment-success-login.png" />
          <h3>{`Dear ${username}`}</h3>
          <p style={{ fontSize: "20px", color: "#5C5C5C" }}>
            Thank you for using our website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;
