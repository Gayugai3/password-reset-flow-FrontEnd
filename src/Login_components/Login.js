import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../config";
import UserContext from "../context/UserContext";
import * as Yup from "yup";
// import "./Login.css";


function Login() {
  let navigate = useNavigate();
  const userContextData = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        let login = await axios.post(`${config.api}/user/login`, values);
        if (login.data.token) {
          localStorage.setItem("react_token", login.data.token);
          localStorage.setItem("userName", login.data.name);
          userContextData.setLoginPerson(login.data.name);
          navigate("/success");
        } else {
          alert(login.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h3 className="d-flex justify-content-center py-5">
              Password Reset Flow
            </h3>
            <form onSubmit={formik.handleSubmit}>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name={"email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email ? (
                  <span style={{ color: "red" }}>{formik.errors.email}</span>
                ) : null}
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name={"password"}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password ? (
                  <span style={{ color: "red" }}>{formik.errors.password}</span>
                ) : null}
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <lable>
                  {" "}
                  Already a member? <Link to="/register">Sign Up</Link>
                </lable>

                <Link to="/forgotpassword">Forgot password?</Link>
              </div>
              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="col-lg-12 btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
