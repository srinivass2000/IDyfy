const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Admin = require("../models/Admin");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("AdminBearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    if (!token) {
      // console.log("no token");
      return next(
        new ErrorResponse("Not authorized to access this route", 401)
      );
    }
    try {
      // console.log("here");
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const admin = await Admin.findById(decoded.id);

      if (!admin) {
        return next(new ErrorResponse("No admin found with this id", 404));
      }

      // console.log(admin);
      req.user = admin;
      req.user.isAdmin = true;

      next();
    } catch (err) {
      return next(new ErrorResponse("Not allowed to access this route", 401));
    }
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("re");
    if (!token) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401)
      );
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const user = await User.findById(decoded.id);

      if (!user) {
        return next(new ErrorResponse("No user found with this id", 404));
      }

      if (user.suspended === true) {
        return next(new ErrorResponse("User Account is Suspended", 403));
      }

      // console.log(user)
      req.user = user;

      next();
    } catch (err) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401)
      );
    }
  } else {
    console.log("re1");

    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};
