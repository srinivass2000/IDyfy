import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const API_URL = "/api/admin";

const notify1 = () => toast.success("You succcessfully logged in!");
const notify3 = (text) => toast.error(text);
const notify9 = () => toast.success("Successfully logged out!");

const login = (email, password) => {

  return axios
    .post(API_URL + "/admin-login", {
      email,
      password,
    })
    .then(
      (res) => {
        if (res.status === 202) {
          if (localStorage.getItem("UserToken"))
            localStorage.removeItem("UserToken");
          localStorage.setItem("AdminToken", res.data.token);
          notify1();
        }
        return res;
      },
      (err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        notify3(err.response.data.error);
      }
    );
};

const logout = () => {
  localStorage.removeItem("AdminToken");
  //history.push("/admin");
  notify9();
};

const getUser = () => {
  return localStorage.getItem("AdminToken");
};

const AuthService = {
  login,
  logout,
  getUser,
};

export default AuthService;
