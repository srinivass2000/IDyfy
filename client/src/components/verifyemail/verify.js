import { React } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const { id } = useParams();
  const history = useHistory();
  const notify1 = () => toast.success("Successfully Logged in !");
  const notify2 = () => toast.error("Something Went Wrong Pls Try again !");

  axios.post("http://localhost:5000/api/auth/email/verify/" + id).then(
    (res) => {
      // console.log(res.data.token);
      localStorage.setItem("UserToken", res.data.token);
      history.replace("/feed");
      // alert("successfully Logged in");
      notify1();
    },
    (err) => {
      // console.log(err);
      history.replace("/");
      // alert("Something Went Wrong Pls Try again");
      notify2();
    }
  );
  // console.log(id);

  return (
    <div className="container">
      <div class="mt-10 d-flex justify-content-center">
        <div class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
