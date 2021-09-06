import React from "react";
import Idyfy_logo from '../../assets/svg/Idyfy_logo.svg';
import Idyfy_name from '../../assets/svg/Idyfy_name.svg';


const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div><img src={Idyfy_logo} alt="IDYFY LOGO"/></div>
        <div><img src={Idyfy_name} alt="IDYFY NAME"/></div>
      </div>
    </div>
  );
};

export default Navbar;
