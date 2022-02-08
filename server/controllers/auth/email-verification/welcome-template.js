module.exports = function template(name) {
  let message = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>IDyfy - welcome</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          a {
            outline: none;
            color: #5277ff;
            text-decoration: underline;
          }
          a:hover {
            text-decoration: none !important;
          }
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
          }
          .rollover:hover,
          .button:hover {
            opacity: 0.8;
          }
          .rollover,
          .button {
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -ms-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
          .rollover a:hover,
          .button a:hover {
            text-decoration: none !important;
          }
          .n-link a {
            color: #5277ff !important;
            text-decoration: none !important;
          }
          .hover:hover {
            text-decoration: underline !important;
          }
          a img {
            border: none;
          }
          table td {
            mso-line-height-rule: exactly;
          }
          .ExternalClass,
          .ExternalClass a,
          .ExternalClass span,
          .ExternalClass b,
          .ExternalClass br,
          .ExternalClass p,
          .ExternalClass div {
            line-height: inherit;
          }
          .address {
            color: #939ca5 !important;
            background: none !important;
            text-decoration: none !important;
          }
          .address span,
          .address * {
            color: #939ca5 !important;
            text-decoration: none !important;
            border: none !important;
            cursor: auto !important;
            pointer-events: none;
            background: none !important;
          }
          .address a:hover {
            text-decoration: underline !important;
          }
          img {
            max-width: 100%;
            height: auto;
          }
          @media only screen and (max-width: 500px) {
            table[class="flexible"] {
              width: 100% !important;
            }
            table[class="table-center"] {
              float: none !important;
              margin: 0 auto !important;
            }
            table[class="table-left"] {
              float: none !important;
              margin: 0 auto 0 0 !important;
            }
            *[class="hide"] {
              display: none !important;
              width: 0 !important;
              height: 0 !important;
              padding: 0 !important;
              font-size: 0 !important;
              line-height: 0 !important;
            }
            span[class="db"] {
              display: block !important;
            }
            td[class="image-m"] {
              display: table-cell !important;
            }
            td[class="image-m"] img {
              display: block !important;
              width: 100% !important;
              height: auto !important;
            }
            td[class="img-flex"] img {
              width: 100% !important;
              height: auto !important;
            }
            img[class="img-flex"] {
              width: 100% !important;
              height: auto !important;
            }
            td[class="aligncenter"] {
              text-align: center !important;
            }
            td[class="alignleft"] {
              text-align: left !important;
            }
            tr[class="table-holder"] {
              display: table !important;
              width: 100% !important;
            }
            th[class="tcap"] {
              display: table-caption !important;
              width: 100% !important;
            }
            th[class="thead"] {
              display: table-header-group !important;
              width: 100% !important;
            }
            th[class="trow"] {
              display: table-row !important;
              width: 100% !important;
            }
            th[class="tfoot"] {
              display: table-footer-group !important;
              width: 100% !important;
            }
            th[class="flex"] {
              display: block !important;
              width: 100% !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              border-left: none !important;
              border-right: none !important;
            }
            /*custom*/
            td[class="heading"] {
              font-size: 26px !important;
              line-height: 32px !important;
            }
            td[class="indent-01"] {
              padding-top: 34px !important;
            }
            td[class="indent-02"] {
              padding-bottom: 44px !important;
            }
            td[class="indent-03"] {
              border-top-width: 10px !important;
              padding-bottom: 0 !important;
            }
            td[class="indent-04"] {
              padding-top: 36px !important;
              padding-bottom: 60px !important;
            }
            td[class="height-01"] {
              height: 50px !important;
            }
          }
        </style>
      </head>
    
      <body
        style="
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        "
        bgcolor="#f0f4f7"
      >
        <table
          style="min-width: 320px"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          bgcolor="#f0f4f7"
        >
          <tbody>
            <tr>
              <td style="line-height: 0">
                <div
                  style="display: none; white-space: nowrap; font: 15px/1px courier"
                >
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
              </td>
            </tr>
            <tr>
              <td class="hide">
                <table
                  width="630"
                  cellpadding="0"
                  cellspacing="0"
                  style="width: 630px !important"
                >
                  <tbody>
                    <tr>
                      <td style="min-width: 630px; font-size: 0; line-height: 0">
                        &nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <!-- top container -->
            <tr>
              <td
                bgcolor="#184da1"
                style="
                  background-image: url('https://mixpanel.com/wp-content/uploads/2017/12/dc-linear-bg.jpg');
                  background-position: center bottom;
                  background-repeat: repeat;
                  background-size: auto 100%;
                "
                valign="top"
                align="center"
              >
                <table
                  class="flexible"
                  style="margin: 0 auto"
                  width="630"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tbody>
                    <tr>
                      <td style="padding: 0 15px" valign="top">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <!-- header -->
                          <tbody>
                            <tr>
                              <td
                                class="indent-01"
                                style="padding: 48px 20px 31px"
                                align="center"
                                valign="top"
                              >
                                <div
                                  class="mktoImg"
                                  id="logo"
                                  mktoname="Logo image"
                                >
                                  <a
                                    href="https://mixpanel.com/"
                                    target="_blank"
                                    style="text-decoration: none; color: #ffffff"
                                  >
                                    <img
                                      src="../../../client/src/assets/svg/Idyfy_name.svg"
                                      width="140"
                                      height="47"
                                      alt="IDyfy"
                                      border="0"
                                      style="
                                        vertical-align: top;
                                        max-width: 100%;
                                        width: 140px;
                                        height: 47px;
                                      "
                                    />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <!-- main content container top part -->
                            <tr>
                              <td
                                style="
                                  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.05);
                                  border-radius: 5px 5px 0 0;
                                  border-bottom: 1px solid #ffffff;
                                "
                                bgcolor="#ffffff"
                                valign="top"
                              >
                                <table width="100%" cellspacing="0" cellpadding="0">
                                  <tbody>
                                    <tr>
                                      <td
                                        style="padding: 34px 20px 6px"
                                        align="center"
                                        valign="top"
                                      >
                                        <table
                                          class="flexible"
                                          style="margin: 0 auto"
                                          align="center"
                                          width="476"
                                          cellpadding="0"
                                          cellspacing="0"
                                        >
                                          <tbody>
                                            <tr>
                                              <td valign="top">
                                                <table
                                                  class="mktoContainer"
                                                  id="mkto-container"
                                                  width="100%"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                >
                                                  <!-- date -->
                                                  <tbody>
                                                    <tr
                                                      class="mktoModule"
                                                      id="date"
                                                      mktoname="Date"
                                                    >
                                                      <td
                                                        style="padding-bottom: 21px"
                                                        valign="top"
                                                      >
                                                        <table
                                                          style="margin: 0 auto"
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                          align="center"
                                                        >
                                                          <tbody>
                                                            <tr>
                                                              <td
                                                                style="
                                                                  border-radius: 100px;
                                                                  font: bold 10px/13px
                                                                      Arial,
                                                                    Helvetica,
                                                                    Verdana,
                                                                    Helvetica,
                                                                    sans-serif;
                                                                  color: #68778d;
                                                                  text-transform: uppercase;
                                                                  mso-padding-top-alt: 6px;
                                                                  mso-padding-bottom-alt: 6px;
                                                                  mso-padding-left-alt: 18px;
                                                                  mso-padding-right-alt: 18px;
                                                                "
                                                                align="center"
                                                                bgcolor="#edf1f3"
                                                              >
                                                                <div
                                                                  class="mktoText"
                                                                  id="date-txt"
                                                                  mktoname="Text"
                                                                >
                                                                  <span
                                                                    style="
                                                                      display: block;
                                                                      padding-top: 6px;
                                                                      padding-bottom: 6px;
                                                                      padding-left: 18px;
                                                                      padding-right: 18px;
                                                                    "
                                                                    >Getting
                                                                    Started</span
                                                                  >
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <!-- main heading -->
                                                    <tr
                                                      class="mktoModule"
                                                      id="main-heading"
                                                      mktoname="Main heading"
                                                    >
                                                      <td
                                                        class="indent-02"
                                                        style="padding-bottom: 78px"
                                                        valign="top"
                                                      >
                                                        <table
                                                          width="100%"
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                        >
                                                          <tbody>
                                                            <tr>
                                                              <td
                                                                class="heading"
                                                                style="
                                                                  font: bold 28px/34px
                                                                      Arial,
                                                                    Helvetica,
                                                                    Verdana,
                                                                    Helvetica,
                                                                    sans-serif;
                                                                  color: #353d58;
                                                                "
                                                                align="center"
                                                              >
                                                                <div
                                                                  class="mktoText"
                                                                  id="main-heading-txt"
                                                                  mktoname="Text"
                                                                >
                                                                  Welcome to IDyfy!
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <!-- main content top part -->
                                                    <tr
                                                      class="mktoModule"
                                                      id="main-content-top-part"
                                                      mktoname="Main content top part"
                                                    >
                                                      <td
                                                        style="
                                                          font: 16px/32px Arial,
                                                            Helvetica, Verdana,
                                                            Helvetica, sans-serif;
                                                          color: #475171;
                                                        "
                                                      >
                                                        <div
                                                          class="mktoText"
                                                          id="main-content-top-part-content"
                                                          mktoname="Content"
                                                        >
                                                          Hi ${name},
                                                          <br />
                                                          <br />Welcome to IDyfy!
                                                          <br />
                                                          <br />IDyfy empowers you
                                                          to see what your customers
                                                          are doing in your product
                                                          so that you can make
                                                          data-driven decisions and
                                                          identify areas of
                                                          improvement. Mixpanel
                                                          already includes insights
                                                          on your customers, so you
                                                          can get started now.
                                                          <br />
                                                          <br />Here are 3 ways you
                                                          can get started today and
                                                          improve your daily
                                                          decision-making:
                                                          <br />
                                                          <br />
                                                          <b
                                                            >1. Stay on top of user
                                                            activity</b
                                                          >
    
                                                          <br />
                                                          <br />With Mixpanel, you
                                                          can go beyond page views
                                                          to see how your product is
                                                          performing. Use
                                                          <b
                                                            ><a
                                                              class="hover"
                                                              href="https://help.mixpanel.com/hc/en-us/articles/115004575586?utm_medium=email&amp;utm_source=nurture&amp;utm_campaign=external-email&amp;utm_content=Welcome-to-Mixpanel&amp;utm_term=Onboarding"
                                                              target="_blank"
                                                              style="
                                                                text-decoration: none;
                                                                color: #00b4fe;
                                                              "
                                                              >Insights</a
                                                            ></b
                                                          >
                                                          to see top user actions
                                                          over time with
                                                          up-to-the-second live
                                                          reporting.
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style="
                                          border-bottom: 8px solid #ffffff;
                                          font-size: 0;
                                          line-height: 0;
                                        "
                                        height="1px"
                                        bgcolor="#ffffff"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <!-- bottom container -->
            <tr>
              <td align="center" valign="top">
                <table
                  class="flexible"
                  style="margin: 0 auto"
                  width="630"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tbody>
                    <tr>
                      <td style="padding: 0 15px" valign="top">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td
                                class="indent-03"
                                style="
                                  box-shadow: 0 15px 13px rgba(0, 0, 0, 0.05);
                                  border-top: 8px solid #ffffff;
                                  padding-bottom: 7px;
                                  font-size: 0;
                                  line-height: 0;
                                "
                                height="1px"
                                bgcolor="#ffffff"
                              >
                                &nbsp;
                              </td>
                            </tr>
                            <tr>
                              <td valign="top">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <!-- main content container middle part -->
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          box-shadow: 0 15px 13px
                                            rgba(0, 0, 0, 0.05);
                                          padding: 0 20px;
                                        "
                                        bgcolor="#ffffff"
                                        align="center"
                                        valign="top"
                                      >
                                        <table
                                          class="flexible"
                                          style="margin: 0 auto"
                                          align="center"
                                          width="476"
                                          cellpadding="0"
                                          cellspacing="0"
                                        >
                                          <!-- main content bottom part -->
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  font: 16px/32px Arial, Helvetica,
                                                    Verdana, Helvetica, sans-serif;
                                                  color: #475171;
                                                "
                                              >
                                                <div
                                                  class="mktoText"
                                                  id="main-content-bottom-part"
                                                  mktoname="Main content bottom part"
                                                >
                                                  <b
                                                    >2. Manage your customer
                                                    lifecycle</b
                                                  >
    
                                                  <br />
                                                  <br />
                                                  <b
                                                    ><a
                                                      class="hover"
                                                      href="https://mixpanel.com/funnels/?utm_medium=email&amp;utm_source=nurture&amp;utm_campaign=external-email&amp;utm_content=Welcome-to-Mixpanel&amp;utm_term=Onboarding"
                                                      target="_blank"
                                                      style="
                                                        text-decoration: none;
                                                        color: #00b4fe;
                                                      "
                                                      >Funnels</a
                                                    ></b
                                                  >
                                                  helps you see where and why users
                                                  drop off. You can also identify
                                                  which users come back over time
                                                  and the actions that cause users
                                                  to convert.
                                                  <br />
                                                  <br />
                                                  <b>3. Engage with customers</b>
    
                                                  <br />
                                                  <br />Mixpanel lets you take
                                                  action through
                                                  <b
                                                    ><a
                                                      class="hover"
                                                      href="https://help.mixpanel.com/hc/en-us/articles/115004602143?utm_medium=email&amp;utm_source=nurture&amp;utm_campaign=external-email&amp;utm_content=Welcome-to-Mixpanel&amp;utm_term=Onboarding"
                                                      target="_blank"
                                                      style="
                                                        text-decoration: none;
                                                        color: #00b4fe;
                                                      "
                                                      >messages and campaigns</a
                                                    ></b
                                                  >
                                                  that engage with customers at
                                                  multiple touch points including
                                                  email, SMS, push, in-app, and
                                                  webhooks.
                                                  <br />
                                                  <br />Our customer support team is
                                                  here to help get you started. Just
                                                  reply to this email so they can
                                                  help.
                                                  <br />
                                                  <br />
                                                  <b>Enjoy!</b>
    
                                                  <br />
                                                  <br />-The IDyfy Team
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- main content container bottom part -->
                                    <tr>
                                      <td
                                        class="height-01"
                                        style="
                                          box-shadow: 0 15px 13px
                                            rgba(0, 0, 0, 0.02);
                                          border-radius: 0 0 5px 5px;
                                          font-size: 1px;
                                          line-height: 1px;
                                          border-top: 1px solid #ffffff;
                                        "
                                        height="98"
                                        bgcolor="#ffffff"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- footer -->
                                    <tr>
                                      <td
                                        class="indent-04"
                                        style="padding: 60px 20px 100px"
                                        valign="top"
                                      >
                                        <table
                                          width="100%"
                                          cellpadding="0"
                                          cellspacing="0"
                                        >
                                          <!-- social networks -->
                                          <tbody>
                                            <tr>
                                              <td
                                                style="padding: 0 0 9px"
                                                align="center"
                                                valign="top"
                                              >
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  style="margin: 0 auto"
                                                  align="center"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        width="30"
                                                        style="padding: 1px 7px"
                                                        valign="top"
                                                      >
                                                        <table
                                                          width="100%"
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                        >
                                                          <tbody>
                                                            <tr>
                                                              <td
                                                                class="rollover"
                                                                valign="top"
                                                                align="center"
                                                              >
                                                                <div
                                                                  class="mktoImg"
                                                                  id="facebook-icon"
                                                                  mktoname="Social network icon"
                                                                >
                                                                  <a
                                                                    href="https://www.facebook.com/mixpanel/"
                                                                    target="_blank"
                                                                    style="
                                                                      text-decoration: none;
                                                                      color: #939ca5;
                                                                      text-transform: uppercase;
                                                                    "
                                                                  >
                                                                    <img
                                                                      src="https://discover.mixpanel.com/rs/461-OYV-624/images/ico-facebooklc.png"
                                                                      width="30"
                                                                      height="auto"
                                                                      border="0"
                                                                      style="
                                                                        vertical-align: top;
                                                                        font: 9px/12px
                                                                            Arial,
                                                                          Helvetica,
                                                                          Verdana,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        color: #2f2f2f;
                                                                        max-width: 100%;
                                                                        height: auto;
                                                                      "
                                                                      alt="FB"
                                                                    />
                                                                  </a>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                      <td
                                                        width="30"
                                                        style="padding: 1px 7px"
                                                        valign="top"
                                                      >
                                                        <table
                                                          width="100%"
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                        >
                                                          <tbody>
                                                            <tr>
                                                              <td
                                                                class="rollover"
                                                                valign="top"
                                                                align="center"
                                                              >
                                                                <div
                                                                  class="mktoImg"
                                                                  id="twitter-icon"
                                                                  mktoname="Social network icon"
                                                                >
                                                                  <a
                                                                    href="https://twitter.com/mixpanel"
                                                                    target="_blank"
                                                                    style="
                                                                      text-decoration: none;
                                                                      color: #939ca5;
                                                                      text-transform: uppercase;
                                                                    "
                                                                  >
                                                                    <img
                                                                      src="https://discover.mixpanel.com/rs/461-OYV-624/images/ico-twitterlc.png"
                                                                      width="30"
                                                                      height="auto"
                                                                      border="0"
                                                                      style="
                                                                        vertical-align: top;
                                                                        font: 9px/12px
                                                                            Arial,
                                                                          Helvetica,
                                                                          Verdana,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        color: #2f2f2f;
                                                                        max-width: 100%;
                                                                        height: auto;
                                                                      "
                                                                      alt="twitter"
                                                                    />
                                                                  </a>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                      <td
                                                        width="30"
                                                        style="padding: 1px 7px"
                                                        valign="top"
                                                      >
                                                        <table
                                                          width="100%"
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                        >
                                                          <tbody>
                                                            <tr>
                                                              <td
                                                                class="rollover"
                                                                valign="top"
                                                                align="center"
                                                              >
                                                                <div
                                                                  class="mktoImg"
                                                                  id="linkedin-icon"
                                                                  mktoname="Social network icon"
                                                                >
                                                                  <a
                                                                    href="https://www.linkedin.com/company/mixpanel-inc-"
                                                                    target="_blank"
                                                                    style="
                                                                      text-decoration: none;
                                                                      color: #939ca5;
                                                                      text-transform: uppercase;
                                                                    "
                                                                  >
                                                                    <img
                                                                      src="https://discover.mixpanel.com/rs/461-OYV-624/images/ico-linkedinlc.png"
                                                                      width="30"
                                                                      height="auto"
                                                                      border="0"
                                                                      style="
                                                                        vertical-align: top;
                                                                        font: 9px/12px
                                                                            Arial,
                                                                          Helvetica,
                                                                          Verdana,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        color: #2f2f2f;
                                                                        max-width: 100%;
                                                                        height: auto;
                                                                      "
                                                                      alt="linkedin"
                                                                    />
                                                                  </a>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                style="
                                                  font: italic 10px/12px Arial,
                                                    Helvetica, Verdana, Helvetica,
                                                    sans-serif;
                                                  color: #939ca5;
                                                  padding: 0 0 10px;
                                                "
                                                align="center"
                                              >
                                                <div
                                                  class="mktoText"
                                                  id="footer-txt-1"
                                                  mktoname="Footer text one"
                                                >
                                                  Helping the world learn from its
                                                  data
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                style="
                                                  padding: 0 0 10px;
                                                  line-height: 6px;
                                                  mso-line-height-rule: at-least;
                                                "
                                                valign="top"
                                                align="center"
                                              >
                                                <div
                                                  class="mktoImg"
                                                  id="dots"
                                                  mktoname="Dots image"
                                                >
                                                  <img
                                                    src="https://discover.mixpanel.com/rs/461-OYV-624/images/dotslc.png"
                                                    height="6"
                                                    width="23"
                                                    alt="***"
                                                    border="0"
                                                    style="
                                                      vertical-align: top;
                                                      font: 9px/12px Arial,
                                                        Helvetica, Verdana,
                                                        Helvetica, sans-serif;
                                                      color: #2f2f2f;
                                                      max-width: 100%;
                                                      width: 23px;
                                                      height: 6px;
                                                    "
                                                  />
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                style="
                                                  font: 10px/12px Arial, Helvetica,
                                                    Verdana, Helvetica, sans-serif;
                                                  color: #939ca5;
                                                  padding: 0 0 10px;
                                                "
                                                align="center"
                                              >
                                                <div
                                                  class="mktoText"
                                                  id="footer-txt-2"
                                                  mktoname="Footer text two"
                                                >
                                                  <span class="address"
                                                    >Mixpanel, Inc, 405 Howard St,
                                                    Floor 2, <br />
                                                    San Francisco, CA 94105</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                style="
                                                  font: 10px/12px Arial, Helvetica,
                                                    Verdana, Helvetica, sans-serif;
                                                  color: #939ca5;
                                                  padding: 0 0 10px;
                                                "
                                                align="center"
                                              >
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <img
          src="http://api.mixpanel.com/track?data=eyJldmVudCI6ICIkY2FtcGFpZ25fb3BlbiIsICJwcm9wZXJ0aWVzIjogeyJ0b2tlbiI6ICJtZXRyaWNzLTEiLCAiZGlzdGluY3RfaWQiOiAiYW5kcmV3a0BjYW1wYWlnbm1vbml0b3IuY29tIiwgInR5cGUiOiAiZW1haWwiLCAiY2FtcGFpZ25faWQiOiAyODQyMTY3LCAiam91cm5leV9pZCI6IDEyfX0%3D&img=1"
        />
      </body>
    </html>
    
  
`;
  return message;
};
