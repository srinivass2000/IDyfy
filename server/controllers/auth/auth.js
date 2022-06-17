const emailVerification = require("../auth/email-verification/emailsend");
const ErrorResponse = require("../../utils/errorResponse");
const User = require("../../models/User");

// Login user
exports.login = async (req, res, next) => {
  var { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check that user exists by email
    email = email.toLowerCase();
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("No user exists with this email", 403));
    }

    // Check that password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    if (user.emailVerified === false) {
      emailVerification(user, res, next);
    } else {
      if (user.suspended === true) {
        return next(new ErrorResponse("Your Account has been suspended", 403));
      } else {
        sendToken(user, 202, res);
      }
    }
  } catch (err) {
    next(err);
  }
};

// Register user
exports.register = async (req, res, next) => {
  var { name, email, password } = req.body;
  email = email.toLowerCase();
  let user = await User.findOne({ email });

  if (!user) {
    try {
      const profile_pic = `https://ui-avatars.com/api/?name=${name}`;
      user = await User.create({
        name,
        email,
        password,
        emailVerified: false,
        profile_pic,
      });

      emailVerification(user, res, next);
    } catch (err) {
      next(err);
    }
  } else {
    return next(new ErrorResponse("User already Exists!", 401));
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token });
};
