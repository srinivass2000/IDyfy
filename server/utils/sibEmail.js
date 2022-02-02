var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SIB_API_KEY;

// Uncomment below two lines to configure authorization using: partner-key
// var partnerKey = defaultClient.authentications["partner-key"];
// partnerKey.apiKey = "YOUR API KEY";

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

const sendEmail = (options) => {
  sendSmtpEmail = {
    to: [
      {
        email: options.to,
        name: options.to_name,
      },
    ],
    sender: {
      name: process.env.EMAIL_FROM_NAME,
      email: process.env.EMAIL_FROM,
    },
    subject: options.subject,
    htmlContent: options.text,
    params: {
      name: "Srinivass",
      surname: "Talaulikar",
    },
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log("API called successfully. Returned data: " + data.toString());
      console.log(data);
    },
    function (error) {
      console.error(error);
    }
  );
};

module.exports = sendEmail;
