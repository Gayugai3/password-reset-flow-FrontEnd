import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Success() {
  const userContextData = useContext(UserContext);
  return (
    <div class="container">
      <div class="row text-center">
        <div class="col-sm-6 col-sm-offset-3">
          <br />
          <br /> <h2 style={{ color: "#0fad00" }}>Success</h2>
          <img src="http://osmhotels.com//assets/check-true.jpg" />
          <h3>Dear, Faisal khan</h3>
          <p style={{ fontSize: "20px", color: "#5C5C5C" }}>
            Thank you for using our website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;
