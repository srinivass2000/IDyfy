module.exports = function template(name) {
  let message = `<!DOCTYPE html>
    <html
      lang="en"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name="x-apple-disable-message-reformatting" />
        <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <title>Welcome - [Plain HTML]</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,500"
          rel="stylesheet"
        />
        <style>
          html,
          body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
          }
    
          /* What it does: Stops email clients resizing small text. */
          * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
    
          /* What it does: Centers email on Android 4.4 */
          div[style*="margin: 16px 0"] {
            margin: 0 !important;
          }
    
          /* What it does: Stops Outlook from adding extra spacing to tables. */
          table,
          td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
          }
    
          table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
          }
    
          table table table {
            table-layout: auto;
          }
    
          img {
            -ms-interpolation-mode: bicubic;
          }
    
          *[x-apple-data-detectors],
            /* iOS */
            .x-gmail-data-detectors,
            /* Gmail */
            .x-gmail-data-detectors *,
            .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
    
          .a6S {
            display: none !important;
            opacity: 0.01 !important;
          }
    
          img.g-img + div {
            display: none !important;
          }
    
          /* What it does: Prevents underlining the button text in Windows 10 */
          .button-link {
            text-decoration: none !important;
          }
    
          @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            .email-container {
              min-width: 375px !important;
            }
          }
        </style>
        <style>
          .button-td,
          .button-a {
            transition: all 100ms ease-in;
          }
    
          .button-td:hover,
          .button-a:hover {
            background: #555555 !important;
            border-color: #555555 !important;
          }
    
          /* Media Queries */
          @media screen and (max-width: 480px) {
            .fluid {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              margin-left: auto !important;
              margin-right: auto !important;
            }
    
            .stack-column,
            .stack-column-center {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              direction: ltr !important;
            }
    
            /* And center justify these ones. */
            .stack-column-center {
              text-align: center !important;
            }
    
            .center-on-narrow {
              text-align: center !important;
              display: block !important;
              margin-left: auto !important;
              margin-right: auto !important;
              float: none !important;
            }
    
            table.center-on-narrow {
              display: inline-block !important;
            }
    
            .email-container p {
              font-size: 17px !important;
              line-height: 22px !important;
            }
          }
        </style>
      </head>
    
      <body
        width="100%"
        bgcolor="#F1F1F1"
        style="margin: 0; mso-line-height-rule: exactly"
      >
        <center style="width: 100%; background: #f1f1f1; text-align: left">
          <div
            style="
              display: none;
              font-size: 1px;
              line-height: 1px;
              max-height: 0px;
              max-width: 0px;
              opacity: 0;
              overflow: hidden;
              mso-hide: all;
              font-family: sans-serif;
            "
          >
            (Optional) Welcome to IDyfy ${name}!
          </div>
          <div style="max-width: 680px; margin: auto" class="email-container">
            <table
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              align="center"
              width="100%"
              style="max-width: 680px"
              class="email-container"
            >
              <tr>
                <td bgcolor="#333333">
                  <table
                    role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    width="100%"
                  >
                    <tr>
                      <td style="padding: 30px 40px 30px 40px; text-align: center">
                        <span style="color: #fff; font-size: 30px">IDyfy</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  background="https://i.imgur.com/eZflxhL.jpg"
                  bgcolor="#222222"
                  align="center"
                  valign="top"
                  style="
                    text-align: center;
                    background-position: center center !important;
                    background-size: cover !important;
                  "
                >
                  <div>
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      align="center"
                      width="100%"
                      style="max-width: 500px; margin: auto"
                    >
                      <tr>
                        <td height="20" style="font-size: 20px; line-height: 20px">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="middle">
                          <table>
                            <tr>
                              <td
                                valign="top"
                                style="
                                  text-align: center;
                                  padding: 60px 0 10px 20px;
                                "
                              >
                                <h1
                                  style="
                                    margin: 0;
                                    font-family: 'Montserrat', sans-serif;
                                    font-size: 30px;
                                    line-height: 36px;
                                    color: #ffffff;
                                    font-weight: bold;
                                  "
                                >
                                  WELCOME ${name},
                                </h1>
                              </td>
                            </tr>
                            <tr>
                              <td
                                valign="top"
                                style="
                                  text-align: center;
                                  padding: 10px 20px 15px 20px;
                                  font-family: sans-serif;
                                  font-size: 15px;
                                  line-height: 20px;
                                  color: #fff;
                                "
                              >
                                <p style="margin: 0">
                                  For what reason would it be advisable for me to
                                  think about business content? That might be little
                                  bit risky to have crew member like them.
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td
                                valign="top"
                                align="center"
                                style="
                                  text-align: center;
                                  padding: 15px 0px 60px 0px;
                                "
                              >
                                <center>
                                  <table
                                    role="presentation"
                                    align="center"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    class="center-on-narrow"
                                    style="text-align: center"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          border-radius: 50px;
                                          background: #26a4d3;
                                          text-align: center;
                                        "
                                        class="button-td"
                                      >
                                        <a
                                          href="http://www.google.com"
                                          style="
                                            background: #26a4d3;
                                            border: 15px solid #26a4d3;
                                            font-family: 'Montserrat', sans-serif;
                                            font-size: 14px;
                                            line-height: 1.1;
                                            text-align: center;
                                            text-decoration: none;
                                            display: block;
                                            border-radius: 50px;
                                            font-weight: bold;
                                          "
                                          class="button-a"
                                        >
                                          <span
                                            style="color: #ffffff"
                                            class="button-link"
                                            >&nbsp;&nbsp;&nbsp;&nbsp;ACCESS
                                            ACCOUNT&nbsp;&nbsp;&nbsp;&nbsp;</span
                                          >
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="20" style="font-size: 20px; line-height: 20px">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff">
                  <table
                    role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    width="100%"
                  >
                    <tr>
                      <td style="padding: 40px 40px 20px 40px; text-align: left">
                        <h1
                          style="
                            margin: 0;
                            font-family: 'Montserrat', sans-serif;
                            font-size: 20px;
                            line-height: 26px;
                            color: #333333;
                            font-weight: bold;
                          "
                        >
                          YOUR ACCOUNT IS NOW ACTIVE
                        </h1>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          padding: 0px 40px 20px 40px;
                          font-family: sans-serif;
                          font-size: 15px;
                          line-height: 20px;
                          color: #555555;
                          text-align: left;
                          font-weight: bold;
                        "
                      >
                        <p style="margin: 0">Thanks for choosing our product.</p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          padding: 0px 40px 20px 40px;
                          font-family: sans-serif;
                          font-size: 15px;
                          line-height: 20px;
                          color: #555555;
                          text-align: left;
                          font-weight: normal;
                        "
                      >
                        <p style="margin: 0">
                          For what reason would it be advisable for me to think
                          about business content? That might be little bit risky to
                          have crew member like them. For what reason would it be
                          advisable for me to think about business content?<br /><br />
                          That might be little bit risky to have crew member like
                          them. For what reason would it be advisable for me to
                          think about business content? That might be little bit
                          risky to have crew member like them.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- INTRO : END -->
              <!-- CTA : BEGIN -->
              <tr>
                <td bgcolor="#26a4d3">
                  <table
                    role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    width="100%"
                  >
                    <tr>
                      <td style="padding: 40px 40px 5px 40px; text-align: center">
                        <h1
                          style="
                            margin: 0;
                            font-family: 'Montserrat', sans-serif;
                            font-size: 20px;
                            line-height: 24px;
                            color: #ffffff;
                            font-weight: bold;
                          "
                        >
                          YOUR FEEDBACK MOTIVATE US TO MOVE AHEAD
                        </h1>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          padding: 0px 40px 20px 40px;
                          font-family: sans-serif;
                          font-size: 17px;
                          line-height: 23px;
                          color: #aad4ea;
                          text-align: center;
                          font-weight: normal;
                        "
                      >
                        <p style="margin: 0">
                          Let us know what you think of our product
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        valign="middle"
                        align="center"
                        style="text-align: center; padding: 0px 20px 40px 20px"
                      >
                        <!-- Button : BEGIN -->
                        <table
                          role="presentation"
                          align="center"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          class="center-on-narrow"
                        >
                          <tr>
                            <td
                              style="
                                border-radius: 50px;
                                background: #ffffff;
                                text-align: center;
                              "
                              class="button-td"
                            >
                              <a
                                href="http://www.google.com"
                                style="
                                  background: #ffffff;
                                  border: 15px solid #ffffff;
                                  font-family: 'Montserrat', sans-serif;
                                  font-size: 14px;
                                  line-height: 1.1;
                                  text-align: center;
                                  text-decoration: none;
                                  display: block;
                                  border-radius: 50px;
                                  font-weight: bold;
                                "
                                class="button-a"
                              >
                                <span style="color: #26a4d3" class="button-link"
                                  >&nbsp;&nbsp;&nbsp;&nbsp;GIVE
                                  FEEDBACK&nbsp;&nbsp;&nbsp;&nbsp;</span
                                >
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff">
                  <table
                    role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    width="100%"
                  >
                    <br />
                    <tr>
                      <td align="center">
                        <img
                          src="https://img.icons8.com/dusk/64/000000/ms-share-point.png"
                          width="37"
                          height="37"
                          style="display: block; border: 0px"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="
                          font-family: Open Sans, Helvetica, Arial, sans-serif;
                          font-size: 14px;
                          font-weight: 400;
                          line-height: 24px;
                          padding: 5px 0 10px 0;
                        "
                      >
                        <p
                          style="
                            font-size: 14px;
                            font-weight: 800;
                            line-height: 18px;
                            color: #333333;
                          "
                        >
                          IDyfy<br />
                          PCCE, Verna
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          padding: 0px 40px 10px 40px;
                          font-family: sans-serif;
                          font-size: 12px;
                          line-height: 18px;
                          color: #666666;
                          text-align: center;
                          font-weight: normal;
                        "
                      >
                        <p style="margin: 0">
                          This email was sent to you from noreply@idyfy.tech
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          padding: 0px 40px 40px 40px;
                          font-family: sans-serif;
                          font-size: 12px;
                          line-height: 18px;
                          color: #666666;
                          text-align: center;
                          font-weight: normal;
                        "
                      >
                        <p style="margin: 0">
                          Copyright &copy; 2021-2022 <b>IDyfy</b>, All Rights
                          Reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </center>
      </body>
    </html>
`;
  return message;
};
