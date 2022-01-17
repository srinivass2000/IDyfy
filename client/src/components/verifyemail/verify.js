import { React } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
const VerifyEmail = () => {
  const { id } = useParams();
  const history = useHistory();

  axios.post("http://localhost:5000/api/auth/email/verify/" + id).then(
    (res) => {
      // console.log(res.data.token);
      localStorage.setItem("UserToken", res.data.token);
      history.replace("/feed");
      alert("successfully Logged in");
    },
    (err) => {
      // console.log(err);
      history.replace("/");
      alert("Something Went Wrong Pls Try again");
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
