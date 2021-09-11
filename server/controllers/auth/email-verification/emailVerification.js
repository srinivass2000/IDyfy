const crypto = require("crypto");
const ErrorResponse = require("../../../utils/errorResponse");
const User = require("../../../models/User");

module.exports = verifyEmail = async (req, res, next) => {
  const emailVerificationToken = crypto
    .createHash("sha256")
    .update(req.params.emailVerificationToken)
    .digest("hex");
  // const emailVerificationToken=req.params.emailVerificationToken;

  try {
    // res.json(emailVerificationToken);
    const user = await User.findOne({
      emailVerificationToken,
      emailVerificationTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.emailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationTokenExpiry = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Email Verified!",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
};
