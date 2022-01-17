const emailVerification = require("../auth/email-verification/emailsend");
const ErrorResponse = require("../../utils/errorResponse");
const User = require("../../models/User");

// Login user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check that user exists by email
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
      sendToken(user, 202, res);
    }
  } catch (err) {
    next(err);
  }
};

// Register user
exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });

  if (!user) {
    try {
      user = await User.create({
        name,
        email,
        password,
        emailVerified: false,
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
