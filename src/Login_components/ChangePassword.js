import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { config } from "../config";
import UserContext from "../context/UserContext";

function ChangePassword() {
  let navigate = useNavigate();
  const userContextData = useContext(UserContext);
  const { email } = useParams();
  const formik = useFormik({
    initialValues: {
      password1: "",
      password2: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.password1) {
        errors.salary = "Please enter the password";
      } else if (values.password1.length < 8) {
        errors.password1 = "Length should be more than 8 Characters";
      }
      if (!values.password2) {
        errors.password2 = "Please enter the password";
      } else if (values.password1 != values.password2) {
        errors.password2 = "Password does not match";
      }
      return errors;
    },

    onSubmit: async (values) => {
      try {
        const register = await axios.post(
          `${config.api}/user/changepassword/${email}`,
          values
        );
        console.log(register.data);
        alert(register.data.message);
        navigate("/");
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Reset Password</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type={"text"}
                className="form-control form-control-user mb-2"
                name={"username"}
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="Enter your name"
              />
              {formik.errors.username ? (
                <span style={{ color: "red" }}> {formik.errors.username}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type={"text"}
                className="form-control form-control-user mb-2"
                name={"email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter Email Address..."
              />
              {formik.errors.email ? (
                <span style={{ color: "red" }}> {formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type={"number"}
                className="form-control form-control-user"
                name={"ph_no"}
                onChange={formik.handleChange}
                value={formik.values.ph_no}
                placeholder="Enter ph_no"
              />
              {formik.errors.ph_no ? (
                <span style={{ color: "red" }}> {formik.errors.ph_no}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6 mt-2">
            <div className="form-group">
              <input
                type={"text"}
                className="form-control form-control-user"
                name={"gender"}
                onChange={formik.handleChange}
                value={formik.values.gender}
                placeholder="Enter your gender"
              />
              {formik.errors.gender ? (
                <span style={{ color: "red" }}> {formik.errors.gender}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6 mt-2">
            <div className="form-group">
              <input
                type={"password"}
                className="form-control form-control-user"
                name={"password1"}
                onChange={formik.handleChange}
                value={formik.values.password1}
                placeholder="Enter Password"
              />
              {formik.errors.password1 ? (
                <span style={{ color: "red" }}> {formik.errors.password1}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6 mt-2">
            <div className="form-group">
              <input
                type={"password"}
                className="form-control form-control-user"
                name={"password2"}
                onChange={formik.handleChange}
                value={formik.values.password2}
                placeholder="Confirm Password"
              ></input>

              {formik.errors.password2 ? (
                <span style={{ color: "red" }}> {formik.errors.password2}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-12 mt-2 ">
            <button
              type={"submit"}
              className="btn btn-primary btn-user btn-block m-2"
            >
              Register
            </button>
          </div>
        </div>
        <p className="text-center">
          <Link to="/login">Already have account</Link>
        </p>
      </form>
    </div>
  );
}

export default ChangePassword;
