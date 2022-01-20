import axios from "axios";
import { toast } from "react-toastify";

const API_URL = " http://localhost:5000/api/auth";

const notify1 = () => toast.success("You succcessfully logged in!");
const notify2 = () => toast.success("Email verification mail sent!");
const notify3 = (text) => toast.error(text);
// const notify4 = () => toast.error("Invalid Credentials!");
const notify5 = () => toast.success("User already exists try to login!");
const notify6 = () => toast.success("Email sent to reset password!");
const notify7 = () => toast.error("This email is not registered!");
const notify8 = () => toast.error("Could not send email pls try later!");
const notify9 = () => toast.success("Successfully logged out!");

const signup = (name, email, confirmpassword, remember, password) => {
  return axios
    .post(API_URL + "/register", {
      name,
      email,
      confirmpassword,
      remember,
      password,
    })
    .then(
      (res) => {
        // console.log(res);
        // alert("verification mail sent");
        notify2();
        // console.log("Verification Email sent");
      },
      (err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        if (err.response.status === 401) {
          // alert("User already exists try to login");
          notify5();
        }
      }
    );
};

const login = (email, remember, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      remember,
      password,
    })
    .then(
      (res) => {
        // console.log(res);
        // console.log(res.status);
        // console.log(res.data);
        if (res.status === 202) {
          localStorage.setItem("UserToken", res.data.token);
          // alert("succcessfully logged in");
          notify1();
        } else if (res.status === 200) {
          // alert("Email verification mail sent");
          notify2();
        }
        return res;
      },
      (err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        // if (err.response.status === 403) {
        //   // alert("No user exists with this email");
        //   notify3();
        // } else if (err.response.status === 401) {
        //   // alert("invalid Credentials");
        //   notify4();
        // }
        notify3(err.response.data.error);
      }
    );
};

const logout = () => {
  localStorage.removeItem("UserToken");
  notify9();
};

const getUser = () => {
  return localStorage.getItem("UserToken");
};

const forgotpswd = (email) => {
  return axios
    .post(API_URL + "/forgotpassword", {
      email,
    })
    .then(
      (res) => {
        // console.log(res);
        // alert("Email sent to reset password");
        notify6();
      },
      (err) => {
        // console.log(err.response);
        if (err.response.status === 404) {
          // alert("This email is not registered");
          notify7();
        } else if (err.response.status === 500) {
          // alert("Could not send email pls try later");
          notify8();
        }
      }
    );
};
const AuthService = {
  signup,
  login,
  logout,
  getUser,
  forgotpswd,
};

export default AuthService;
