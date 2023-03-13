import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config";
import UserContext from "../context/UserContext";

function ForgotPassword() {
  let navigate = useNavigate();
  const userContextData = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      userContextData.setmailid(values.email);
      try {
        let mail = await axios.post(`${config.api}/user/sendmail`, values);
        if (mail.data) {
          alert(`${mail.data.message}`);
          // navigate("/verification");
        } else {
          alert(mail.data.message);
        }
      } catch (error) {
        alert(`${error.response.data.message}`);
      }
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className=" col-lg-5 ">
          <div className="card o-hidden border-0 shadow-lg my-5 p-3 border bg-light">
            <h5 className="text-justify">Forget password</h5>
            <div className="col">
              <form onSubmit={formik.handleSubmit}>
                <div className="col-lg-12 d-flex justify-content-between">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type={"text"}
                        className="form-control form-control-user mb-2"
                        name={"email"}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Enter your Email Address..."
                      />
                      {formik.errors.email ? (
                        <span style={{ color: "red" }}>
                          {" "}
                          {formik.errors.email}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <button className="btn btn-info" type={"submit"}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
