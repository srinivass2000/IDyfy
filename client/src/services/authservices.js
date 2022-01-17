import axios from "axios";

const API_URL = " http://localhost:5000/api/auth";

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
        alert("verification mail sent");
        // console.log("Verification Email sent");
      },
      (err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        if (err.response.status === 401) {
          alert("User already exists try to login");
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
          alert("succcessfully logged in");
        } else if (res.status === 200) {
          alert("Email verification mail sent");
        }
        return res;
      },
      (err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        if (err.response.status === 403) {
          alert("No user exists with this email");
        } else if (err.response.status === 401) {
          alert("invalid Credentials");
        }
      }
    );
};

const logout = () => {
  localStorage.removeItem("UserToken");
};

const getUser = () => {
  return localStorage.getItem("UserToken");
};

const AuthService = {
  signup,
  login,
  logout,
  getUser,
};

export default AuthService;
