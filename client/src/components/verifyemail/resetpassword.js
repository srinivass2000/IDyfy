import { React, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
const ResetPassword = () => {
  const { id } = useParams();
  const history = useHistory();
  const initialState = {
    password: "",
    confirmpassword: "",
  };
  const [pswd, setPwsd] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(id, pswd.password);
    if (pswd.password === pswd.confirmpassword) {
      axios
        .put("http://localhost:5000/api/auth/passwordreset/" + id, {
          password: pswd.password,
        })
        .then(
          (res) => {
            // console.log(res.data.token);
            localStorage.setItem("UserToken", res.data.token);
            history.replace("/feed");
            alert("successfully reseted password");
          },
          (err) => {
            console.log(err);
            history.push("/");
            alert("Invalid token");
          }
        );
    } else {
      alert("Password and Confirm Password doesnt match");
    }
  };
  const handleChange = (e) => {
    setPwsd({ ...pswd, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div class="mt-10 d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div>
            <p style={{ "font-size": "24px" }} className="text-white my-3">
              Enter your new credentials
            </p>
            <input
              type="password"
              name="password"
              placeholder="New Password"
              onChange={handleChange}
              className="form-control form_box my-2"
            />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="form-control form_box"
            />
            <input type="submit" className="my-8 h-10 mb-10 btn button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
