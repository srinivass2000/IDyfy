const sendEmail = require("../../../utils/sibEmail");
const ErrorResponse = require("../../../utils/errorResponse");
const template = require("./mail-template");

module.exports = async function emailVerification(user, res, next) {
  let email;
  email = user.email;
  if (!email) {
    return next(new ErrorResponse("No email could not be sent", 404));
  }

  try {
    // Reset Token Gen and add to database hashed (private) version of token
    const emailVerificationToken = user.getemailVerificationToken();

    await user.save();

    const emailVerificationUrl = `https://idyfy.tech/email/verify/${emailVerificationToken}`;

    const message = template(emailVerificationUrl);

    try {
      await sendEmail({
        to: user.email,
        to_name: user.name,
        subject: "Email Verification Request",
        text: message,
      });

      res
        .status(200)
        .json({ success: true, data: "Email Verification Mail Sent" });
    } catch (err) {
      console.log(err);

      user.emailVerificationToken = undefined;
      user.emailVerificationTokenExpiry = undefined;

      await user.save();

      return next(
        new ErrorResponse("Email Verification mail could not be sent", 500)
      );
    }
  } catch (err) {
    next(err);
  }
};
