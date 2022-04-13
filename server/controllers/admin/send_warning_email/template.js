module.exports = function template(user, idea) {
  let message = `
  <!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      /* FONTS */
      @media screen {
        @font-face {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          src: local("Lato Regular"), local("Lato-Regular"),
            url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff)
              format("woff");
        }

        @font-face {
          font-family: "Lato";
          font-style: normal;
          font-weight: 700;
          src: local("Lato Bold"), local("Lato-Bold"),
            url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff)
              format("woff");
        }

        @font-face {
          font-family: "Lato";
          font-style: italic;
          font-weight: 400;
          src: local("Lato Italic"), local("Lato-Italic"),
            url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff)
              format("woff");
        }

        @font-face {
          font-family: "Lato";
          font-style: italic;
          font-weight: 700;
          src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
            url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff)
              format("woff");
        }
      }

      /* CLIENT-SPECIFIC STYLES */
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        -ms-interpolation-mode: bicubic;
      }

      /* RESET STYLES */
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
      }

      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      /* MOBILE STYLES */
      @media screen and (max-width: 600px) {
        h1 {
          font-size: 32px !important;
          line-height: 32px !important;
        }
      }

      /* ANDROID CENTER FIX */
      div[style*="margin: 16px 0;"] {
        margin: 0 !important;
      }

      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
        max-width: 300px;
        margin: auto;
        text-align: center;
        font-family: arial;
        /* background-color: ; */
      }

      .price {
        color: grey;
        font-size: 22px;
      }

      .card button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: rgb(219, 54, 54);
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
      }

      .card button:hover {
        opacity: 0.7;
      }
    </style>
  </head>
  <body
    style="
      background-color: #f4f4f4;
      margin: 0 !important;
      padding: 0 !important;
    "
  >
    <div
      class="litmus-builder-preview-text"
      style="
        display: none;
        font-size: 1px;
        color: #333333;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      "
    >
      Warning for overstepping acceptable conduct of terms and conditions of
      IDyfy&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
    </div>

    <!-- HIDDEN PREHEADER TEXT -->
    <div
      style="
        display: none;
        font-size: 1px;
        color: #fefefe;
        line-height: 1px;
        font-family: 'Lato', Helvetica, Arial, sans-serif;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      "
    >
      Warning for overstepping acceptable conduct of terms and conditions of
      IDyfy
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <!-- LOGO -->
      <tr>
        <td bgcolor="#ec6d64" align="center">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td
                align="center"
                valign="top"
                style="padding: 40px 10px 40px 10px"
              >
                <a href="https://idyfy.tech" target="_blank">
                  <img
                    alt="Logo"
                    src="https://i.ibb.co/7p0d0K5/idyfy-footer-1.png"
                    height="400"
                    width="1000"
                    style="
                      display: block;
                      width: auto;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      color: #ffffff;
                      font-size: 18px;
                    "
                    border="0"
                  />
                </a>
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
        </td>
      </tr>
      <!-- HERO -->
      <tr>
        <td bgcolor="#ec6d64" align="center" style="padding: 0px 10px 0px 10px">
          <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td
                bgcolor="#ffffff"
                align="center"
                valign="top"
                style="
                  padding: 40px 20px 20px 20px;
                  border-radius: 4px 4px 0px 0px;
                  color: #111111;
                  font-size: 48px;
                  font-weight: 400;
                  letter-spacing: 4px;
                  line-height: 48px;
                  background-color: #ffffff;
                "
              >
                <b> Violations of Terms and conditions</b>
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
        </td>
      </tr>
      <!-- COPY BLOCK -->
      <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
          <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <!-- COPY -->
            <tr>
              <td
                bgcolor="#ffffff"
                align="left"
                style="
                  padding: 20px 30px 40px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 25px;
                  background-color: #ffffff;
                "
              >
                Dear <strong>${user.name}</strong>,<br /><br />This email is
                to serve an official warning to you for the beach of terms and
                conditions. We have observed a problem in your below mentioned
                Idea. This kind of misconduct is not acceptable in the workplace
                and is against Company Policy listed under section 405.<br /><br />Our
                policy and guidelines are quite clear regarding the
                representation of Ideas on our platform and code of conduct
                expected.<br /><br />

                <br />
                Below is the mentioned Idea which requires your action
                <br />
                <div class="card">
                  <h1 style="padding-top: 30px">${idea.title}</h1>

                  <p style="color: grey">${idea.description}</p>
                  <a
                    target="_blank"
                    href="https://idyfy.tech/idea/${idea._id.toString()}"
                  >
                    <button
                      class="rounded bg-red-500 text-white text-lg py-4 px-6"
                      style="background-color:red, text-color:white"
                    >
                      Take Action
                    </button>
                  </a>
                </div>

                <br />Since you have been found to be violating the rules, we
                are hereby putting you on a warning period of 3 Days. During
                this period, your behavior will be monitored.<br /><br />Any
                re-occurrence of such behaviour will ensure further strict
                action such as:<br /><br /><strong
                  >(a) Suspension of your account or</strong
                ><br /><br /><strong
                  >(b) Termination without prior notice.</strong
                ><br /><br />We expect you to show immediate improvements.
                Looking forward to seeing positive outcomes of this email.<br /><br />Sincerely<br /><br />Team
                IDyfy
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
        </td>
      </tr>
      <!-- COPY CALLOUT -->

      <!-- SUPPORT CALLOUT -->
      <tr>
        <td
          bgcolor="#f4f4f4"
          align="center"
          style="padding: 30px 10px 0px 10px"
        >
          <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <!-- HEADLINE -->
            <tr>
              <td
                bgcolor="#FFE0DE"
                align="center"
                style="
                  padding: 30px 30px 30px 30px;
                  border-radius: 4px 4px 4px 4px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 25px;
                "
              >
                <h2
                  style="
                    font-size: 20px;
                    font-weight: 400;
                    color: #111111;
                    margin: 0;
                  "
                >
                  Need help?
                </h2>
                <p style="margin: 0">
                  <a
                    style="color: #a42219"
                    href="mailto:support@idyfy.tech"
                    target="_blank"
                    rel="noopener"
                    >Please feel free to email us on support@idyfy.tech</a
                  >
                </p>
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
        </td>
      </tr>
      <!-- FOOTER -->
      <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
          <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <!-- NAVIGATION -->

            <!-- PERMISSION REMINDER -->
            <tr>
              <td
                bgcolor="#f4f4f4"
                align="left"
                style="
                  padding: 0px 30px 30px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 18px;
                "
              ></td>
            </tr>
            <!-- UNSUBSCRIBE -->
            <tr>
              <td
                bgcolor="#f4f4f4"
                align="left"
                style="
                  padding: 0px 30px 30px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 18px;
                "
              >
                <p style="margin: 0">
                  You received this email because we had problems with your
                  Idea. If it looks weird,
                  <a
                    style="color: #111111; font-weight: bold"
                    href="http://litmus.com"
                    target="_blank"
                    rel="noopener"
                    >view it in your browser</a
                  >.
                </p>
              </td>
            </tr>
            <!-- ADDRESS -->
            <tr>
              <td
                bgcolor="#f4f4f4"
                align="left"
                style="
                  padding: 0px 30px 30px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 18px;
                "
              >
                <p style="margin: 0">
                  <strong>IDyfy</strong><br />Padre Conceicao College Of
                  Engineering,<br />Agnel Technical Education Complex, Agnelganv
                  Verna, Goa 403722 India <br /><strong>Phone</strong>:
                  9657735214 <strong>mail</strong>: support@idyfy.tech
                </p>
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
        </td>
      </tr>
    </table>
  </body>
</html>

    `;

  return message;
};
