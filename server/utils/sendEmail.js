const nodemailer = require("nodemailer");

// var SendClean = require("./sendclean");
// var SendClean_client = new SendClean.SendClean(
//   process.env.OWNER_ID,
//   process.env.API_TOKEN,
//   process.env.SENDCLEAN_DOMAIN
// );

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // const mailOptions = {
  //   smtp_user_name: process.env.SMTP_USERNAME,
  //   message: {
  //     from_name: process.env.EMAIL_FROM_NAME,
  //     from_email: process.env.EMAIL_FROM,
  //     to: [{ email: options.to, name: options.to_name, type: "to" }],
  //     subject: options.subject,
  //     html: options.text,
  //     // headers: {
  //     //   "Reply-To": "teamidyfy@gmail.com",
  //     //   "X-Unique-Id": "id ",
  //     // },
  //   },
  // };

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  // SendClean_client.messages.sendMail(
  //   mailOptions,
  //   function (result) {
  //     console.log(result);
  //   },
  //   function (e) {
  //     // SendCleanreturns the error as an object with name and message keys
  //     console.log("A SendCleanerror occurred: " + e.name + " - " + e.message);
  //   }
  // );

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
