import React from "react";

const TermsAndConditions = () => {
  return (
    <>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      [data-custom-class="body"],\n      [data-custom-class="body"] * {\n        background: transparent !important;\n      }\n\n      [data-custom-class="title"],\n      [data-custom-class="title"] * {\n        font-family: Arial !important;\n        font-size: 26px !important;\n        color: white !important;\n  align: center !important;\n     }\n\n      [data-custom-class="subtitle"],\n      [data-custom-class="subtitle"] * {\n        font-family: Arial !important;\n        color: white !important;\n        font-size: 14px !important;\n  align: center !important;\n    }\n\n      [data-custom-class="heading_1"],\n      [data-custom-class="heading_1"] * {\n        font-family: Arial !important;\n        font-size: 19px !important;\n        color: white !important;\n   align: center !important;\n   }\n\n      [data-custom-class="heading_2"],\n      [data-custom-class="heading_2"] * {\n        font-family: Arial !important;\n        font-size: 17px !important;\n        color: white !important;\n   align: center !important;\n   }\n\n      [data-custom-class="body_text"],\n      [data-custom-class="body_text"] * {\n        color: white !important;\n        font-size: 14px !important;\n        font-family: Arial !important;\n      }\n\n      [data-custom-class="link"],\n      [data-custom-class="link"] * {\n        color: #FF6347 !important;\n        font-size: 14px !important;\n        font-family: Arial !important;\n        word-break: break-word !important;\n      }\n    ',
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n      ul {\n          list-style-type: square;\n      }\n\n      ul&gt;li&gt;ul {\n          list-style-type: circle;\n      }\n\n      ul&gt;li&gt;ul&gt;li&gt;ul {\n          list-style-type: square;\n      }\n\n      ol li {\n          font-family: Arial;\n      }\n    ",
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n      div.c58 {color: #595959;font-size: 14px;font-family: Arial;padding-top:16px;}\n      a.c57 {color: rgb(48, 48, 241) !important;}\n      span.c56 {font-family: Arial; font-size: 15px; line-height: 115%}\n      span.c55 {font-size: 14.6667px;}\n      span.c54 {font-size: 11pt; color: rgb(255, 255, 255); text-transform: uppercase;}\n      span.c53 {color: rgb(255, 255, 255); font-size: 11pt; line-height: 16.8667px}\n      span.c52 {line-height: 115%; font-family: Arial;}\n      span.c51 {font-size: 19px;}\n      span.c50 {font-family: Arial; font-size: 19px; line-height: 115%}\n      span.c49 {font-size: 15px; line-height: 115%; font-family: Arial; color: rgb(255, 255, 255);}\n      div.c48 {line-height: 115%; text-align: left}\n      strong.c47 {color: rgb(255, 255, 255); font-size: 14.6667px;}\n      span.c46 {Calibri;color: #595959; font-family: Arial; font-size: 11.0pt; line-height: 115%; mso-themecolor: text1; mso-themetint: 166}\n      div.c45 {line-height: 1.5; text-align: center}\n      span.c44 {font-size:11.0pt;line-height:115%;font-family:Arial; Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;}\n      div.c43 {text-align: center}\n      div.c42 {line-height: 1}\n      div.c41 {line-height: 17.25px; text-align: left;}\n      span.c40 {color: rgb(255, 255, 255); font-size: 14px}\n      span.c39 {font-size: 14px; color: rgb(255, 255, 255);}\n      div.c38 {line-height: 1; text-align: justify}\n      div.c37 {text-align: justify; line-height: 1.5;}\n      div.c36 {text-align: justify; line-height: 17.25px;}\n      div.c35 {text-align: left; line-height: 1.5;}\n      span.c34 {-webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); color: rgb(255, 255, 255); font-family: sans-serif; font-style: normal; font-variant-caps: normal; font-variant-ligatures: normal; font-weight: 400; letter-spacing: normal; line-height: 16.8667px; orphans: 2; text-align: justify; text-decoration-color: initial; text-decoration-style: initial; text-indent: -29.4px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px}\n      span.c33 {-webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); color: rgb(255, 255, 255); font-family: sans-serif; font-size: 15px; font-style: normal; font-variant-caps: normal; font-variant-ligatures: normal; font-weight: 400; letter-spacing: normal; line-height: 16.8667px; orphans: 2; text-align: justify; text-decoration-color: initial; text-decoration-style: initial; text-indent: -29.4px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px}\n      li.c32 {line-height: 1.5; text-align: left;}\n      span.c31 {-webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); color: rgb(255, 255, 255); font-family: sans-serif; font-size: 11pt; font-style: normal; font-variant-caps: normal; font-variant-ligatures: normal; font-weight: 400; letter-spacing: normal; line-height: 16.8667px; orphans: 2; text-align: justify; text-decoration-color: initial; text-decoration-style: initial; text-indent: -29.4px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px}\n      div.c30 {line-height: 115%}\n      div.c29 {line-height:115%;}\n      div.c28 {line-height: 17.25px;}\n      span.c27 {line-height: 24.5333px; font-size: 19px;}\n      div.c26 {text-align: justify; line-height: 1;}\n      div.c25 {line-height: 115%; text-align: justify; text-justify: inter-ideograph}\n      span.c24 {color: rgb(255, 255, 255); font-size: 14.6667px;}\n      span.c23 {color: rgb(255, 255, 255); font-size: 11pt;}\n      span.c22 {font-size: 11pt; line-height: 16.8667px; color: rgb(255, 255, 255);}\n      div.c21 {line-height: 1;}\n      div.c20 {line-height: 1.5;}\n      span.c19 {font-size:11.0pt;line-height:115%; Arial;mso-fareast-font-family:Calibri;color:#595959;mso-themecolor:text1; mso-themetint:166;}\n      span.c18 {Arial;mso-fareast-font-family: Calibri; color: #595959; font-size: 11.0pt; line-height: 115%; mso-themecolor: text1; mso-themetint: 166}\n      div.c17 {line-height: 1; text-align: left}\n      div.c16 {line-height: 150%; text-align: left}\n      div.c15 {line-height: 115%;}\n      span.c14 {line-height: 115%; font-family: Arial; font-size: 19px;}\n      div.c13 {line-height: 150%; text-align: center}\n      div.c12 {text-align: left}\n      span.c11 {color: rgb(255, 255, 255); font-size: 15px}\n      span.c10 {font-size: 15px;}\n      span.c9 {color: rgb(255, 255, 255);}\n      div.c8 {line-height: 1.5; text-align: left;}\n      span.c7 {color: rgb(127, 127, 127); font-size: 15px}\n      div.c6 {line-height: 17.25px; text-align: left}\n      div.c5 {line-height: 22.5px; text-align: center}\n      span.c4 {color: rgb(255, 255, 255); font-size: 14.6667px; text-align: justify;}\n      div.c3 {line-height: 22.5px; text-align: left}\n      div.c2 {line-height: 1.5; text-align: left}\n      span.c1 {line-height: 22.5px; font-size: 26px;align: center}\n    ",
        }}
      />
      <div className="c17" data-custom-class="body" container="">
        <div className="MsoNormal c16">
          <div className="MsoNormal c13">
            <a name="_2cipo4yr3w5d" />
            <div className="MsoNormal MsoNormal c5">
              <a name="_gm5sejt4p02f" />
              <div className="MsoNormal c2" data-custom-class="title">
                <strong>
                  <span className="c1" style={{ align: "center" }}>
                    {" "}
                    TERMS AND CONDITIONS{" "}
                  </span>
                </strong>
              </div>
              <div className="MsoNormal c3">
                <a name="_7m5b3xg56u7y" />
              </div>
              <div className="MsoNormal c3" data-custom-class="subtitle">
                <br />
              </div>
              <div className="MsoNormal c2" data-custom-class="subtitle">
                <span className="c4">
                  <strong>Last updated February 09, 2022</strong>
                </span>
              </div>
            </div>
            <div className="MsoNormal c6">
              <br />
            </div>
            <div className="MsoNormal c6">
              <br />
            </div>
            <div className="MsoNormal c6">
              <br />
            </div>
            <div className="c8">
              <span className="c7">
                <strong>
                  <span data-custom-class="heading_1">TABLE OF CONTENTS</span>
                </strong>
              </span>
            </div>
            <div className="c8">
              <br />
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#agreement">
                  <span className="c9">1. AGREEMENT TO TERMS</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#ip">
                  <span className="c9">2. INTELLECTUAL PROPERTY RIGHTS</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c11">
                <a data-custom-class="link" href="#userreps">
                  3. USER REPRESENTATIONS
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#userreg">
                  <span className="c9"> 4. USER REGISTRATION</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#prohibited">
                  <span className="c9">5. PROHIBITED ACTIVITIES</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#ugc">
                  <span className="c9">6. USER GENERATED CONTRIBUTIONS</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c11">
                <a data-custom-class="link" href="#license">
                  7. CONTRIBUTION LICENSE
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#reviews">
                  <span className="c9"> 8. GUIDELINES FOR REVIEWS</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#mobile">
                  <span className="c9"> </span>
                </a>
              </span>
            </div>
            <div className="c12">
              <span className="c11">
                <a data-custom-class="link" href="#socialmedia">
                  9. SOCIAL MEDIA
                </a>
                <a data-custom-class="link" href="#agreement" />
              </span>
            </div>
            <div className="c8">
              <span className="c11">
                <a data-custom-class="link" href="#submissions">
                  10. SUBMISSIONS
                </a>
              </span>
            </div>
            <div className="c12">
              <span className="c10">
                <a data-custom-class="link" href="#thirdparty">
                  <span className="c9">
                    11. THIRD-PARTY WEBSITE AND CONTENT
                  </span>
                </a>
                <a data-custom-class="link" href="#agreement" />
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#advertisers">
                  <span className="c9"> </span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c11">
                <a data-custom-class="link" href="#sitemanage">
                  12. SITE MANAGEMENT
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#privacypolicy1">
                  <span className="c9"> 13. PRIVACY POLICY</span>
                </a>
                <a data-custom-class="link" href="#advertisers" />
                <a data-custom-class="link" href="#agreement">
                  <span className="c11"> </span>
                </a>
                <a data-custom-class="link" href="#privacypolicy" />
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#dmca">
                  <span className="c9" />
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#copyright1">
                  <span className="c9"> </span>
                </a>
                <a data-custom-class="link" href="#copyright3">
                  <span className="c9">14. COPYRIGHT INFRINGEMENTS</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#terms" />
                <a data-custom-class="link" href="#terms">
                  <span className="c9">15. TERM AND TERMINATION</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#modifications">
                  <span className="c9">
                    16. MODIFICATIONS AND INTERRUPTIONS
                  </span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#law">
                  <span className="c9">17. GOVERNING LAW</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#disputes">
                  <span className="c9">18. DISPUTE RESOLUTION</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c11">
                <a data-custom-class="link" href="#corrections">
                  19. CORRECTIONS
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#disclaimer">
                  <span className="c9">20. DISCLAIMER</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#liability">
                  <span className="c9">21. LIMITATIONS OF LIABILITY</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c11">
                <a data-custom-class="link" href="#indemnification">
                  22. INDEMNIFICATION
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#userdata">
                  <span className="c9">23. USER DATA</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#electronic">
                  <span className="c9">
                    24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                  </span>
                </a>
              </span>
            </div>
            <div className="MsoNormal c8" />
            <div className="c8">
              <span className="c10">
                <a data-custom-class="link" href="#misc">
                  <span className="c9">25. MISCELLANEOUS</span>
                </a>
              </span>
            </div>
            <div className="c8">
              <span className="c11">
                <a data-custom-class="link" href="#contact">
                  26. CONTACT US
                </a>
              </span>
            </div>
            <div className="c8">
              <br />
            </div>
            <div className="c8">
              <br />
            </div>
          </div>
          <div
            className="MsoNormal c15"
            data-custom-class="heading_1"
            id="agreement"
          >
            <a name="_a7mwfgcrtsqn" />
            <strong>
              <span className="c14">1. AGREEMENT TO TERMS</span>
            </strong>
          </div>
        </div>
        <div className="MsoNormal c17">
          <br />
        </div>
        <div className="MsoNormal MsoNormal c16" data-custom-class="body_text">
          <span className="c19">
            These Terms of Use constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (�you�)
            and IDyfy (" <strong>Company</strong> ," � <strong>we</strong>," �
            <strong>us</strong>
            ," or � <strong>our</strong>�), concerning your access to and use of
            the
            <a
              href="https://idyfy.tech"
              target="_blank"
              data-custom-class="link"
            >
              https://idyfy.tech
            </a>
            website as well as any other media form, media channel, mobile
            website or mobile application related, linked, or otherwise
            connected thereto (collectively, the �Site�).
            <span className="c18">
              We are registered in <span className="c18">India </span> and have
              our registered office at Padre Concei��o College Of Engineering,
              Agnel Technical Education Complex, Agnelganv
            </span>
            , Verna
          </span>
          <span className="c11" data-custom-class="body_text">
            , Goa 403722
          </span>
          <span className="c18">. </span> You agree that by accessing the Site,
          you have read, understood, and agreed to be bound by all of these
          Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN
          YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST
          DISCONTINUE USE IMMEDIATELY.
        </div>
        <div className="MsoNormal c17">
          <br />
        </div>
        <div className="MsoNormal MsoNormal c16" data-custom-class="body_text">
          <span className="c19">
            Supplemental terms and conditions or documents that may be posted on
            the Site from time to time are hereby expressly incorporated herein
            by reference. We reserve the right, in our sole discretion, to make
            changes or modifications to these Terms of Use at any time and for
            any reason. We will alert you about any changes by updating the
            �Last updated� date of these Terms of Use, and you waive any right
            to receive specific notice of each such change. Please ensure that
            you check the applicable Terms every time you use our Site so that
            you understand which Terms apply. You will be subject to, and will
            be deemed to have been made aware of and to have accepted, the
            changes in any revised Terms of Use by your continued use of the
            Site after the date such revised Terms of Use are posted.
          </span>
        </div>
        <div className="MsoNormal c17">
          <br />
        </div>
        <div className="MsoNormal c16">
          <div className="MsoNormal c20" data-custom-class="body_text">
            <span className="c19">
              The information provided on the Site is not intended for
              distribution to or use by any person or entity in any jurisdiction
              or country where such distribution or use would be contrary to law
              or regulation or which would subject us to any registration
              requirement within such jurisdiction or country. Accordingly,
              those persons who choose to access the Site from other locations
              do so on their own initiative and are solely responsible for
              compliance with local laws, if and to the extent local laws are
              applicable.
            </span>
          </div>
          <div className="MsoNormal c20" />
        </div>
        <div className="MsoNormal c17">
          <br />
        </div>
        <div className="MsoNormal MsoNormal c16" data-custom-class="body_text">
          <span className="c11">
            The Site is intended for users who are at least 13 years of age. All
            users who are minors in the jurisdiction in which they reside
            (generally under the age of 18) must have the permission of, and be
            directly supervised by, their parent or guardian to use the Site. If
            you are a minor, you must have your parent or guardian read and
            agree to these Terms of Use prior to you using the Site.
          </span>
        </div>
        <div className="MsoNormal c2">
          <br />
        </div>
        <div className="MsoNormal c16">
          <div className="MsoNormal c20">
            <br />
          </div>
          <div className="MsoNormal c20" data-custom-class="heading_1" id="ip">
            <a name="_4rd71iod99ud" />
            <strong>
              <span className="c14">
                <strong>
                  {" "}
                  <span className="c14">2.�</span>{" "}
                </strong>
                INTELLECTUAL PROPERTY RIGHTS
              </span>
            </strong>
          </div>
        </div>
        <div className="MsoNormal c17">
          <br />
        </div>
        <div className="MsoNormal MsoNormal c16" data-custom-class="body_text">
          <span className="c19">
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the �Content�) and the trademarks, service marks, and
            logos contained therein (the �Marks�) are owned or controlled by us
            or licensed to us, and are protected by copyright and trademark laws
            and various other intellectual property rights and unfair
            competition laws of the United States, international copyright laws,
            and international conventions. The Content and the Marks are
            provided on the Site �AS IS� for your information and personal use
            only. Except as expressly provided in these Terms of Use, no part of
            the Site and no Content or Marks may be copied, reproduced,
            aggregated, republished, uploaded, posted, publicly displayed,
            encoded, translated, transmitted, distributed, sold, licensed, or
            otherwise exploited for any commercial purpose whatsoever, without
            our express prior written permission.
          </span>
        </div>
        <div className="MsoNormal c17">
          <br />
        </div>
        <div className="MsoNormal MsoNormal c16" data-custom-class="body_text">
          <span className="c19">
            Provided that you are eligible to use the Site, you are granted a
            limited license to access and use the Site and to download or print
            a copy of any portion of the Content to which you have properly
            gained access solely for your personal, non-commercial use. We
            reserve all rights not expressly granted to you in and to the Site,
            the Content and the Marks.
          </span>
        </div>
        <div className="MsoNormal c2">
          <br />
        </div>
        <div className="MsoNormal c16">
          <div className="MsoNormal c20">
            <br />
          </div>
          <div
            className="MsoNormal c20"
            data-custom-class="heading_1"
            id="userreps"
          >
            <a name="_vhkegautf00d" />
            <strong>
              <span className="c14">
                <strong>
                  <span className="c14">
                    <strong>
                      <span className="c14">3.</span>
                    </strong>{" "}
                  </span>
                  �
                </strong>
                USER REPRESENTATIONS
              </span>
            </strong>
          </div>
          <div className="MsoNormal c21">
            <br />
          </div>
        </div>
        <div className="MsoNormal c16">
          <div
            className="MsoNormal MsoNormal c25"
            data-custom-class="body_text"
          >
            <span className="c22">
              By using the Site, you represent and warrant that:
            </span>
            <span className="c23">(</span>
            <span className="c24">1</span>
            <span className="c23">
              ) all registration information you submit will be true, accurate,
              current, and complete; (
            </span>
            <span className="c24">2</span>
            <span className="c23">
              ) you will maintain the accuracy of such information and promptly
              update such registration information as necessary
              <span className="c23">;</span> �<span className="c23">(</span>
              <span className="c24">3</span>
              <span className="c23">
                ) you have the legal capacity and you agree to comply with these
                Terms of Use;
              </span>
              <span className="c23">(</span>
              <span className="c24">4</span>
              <span className="c23">) you are not under the age of 13;</span>
            </span>
            <span className="c23">�(</span>
            <span className="c24">5</span>
            <span className="c23">
              ) you are not a minor in the jurisdiction in which you reside , or
              if a minor, you have received parental permission to use the Site
              ; (
            </span>
            <span className="c24">6</span>
            <span className="c23">
              ) you will not access the Site through automated or non-human
              means, whether through a bot, script, or otherwise; (
            </span>
            <span className="c24">7</span>
            <span className="c23">
              ) you will not use the Site for any illegal or unauthorized
              purpose; and (
            </span>
            <span className="c24">8</span>
            <span className="c23">
              ) your use of the Site will not violate any applicable law or
              regulation.
            </span>
          </div>
          <div className="MsoNormal c26">
            <br />
          </div>
          <div
            className="MsoNormal MsoNormal c25"
            data-custom-class="body_text"
          >
            <span className="c22">
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Site (or any portion thereof).
            </span>
          </div>
        </div>
        <div className="MsoNormal c2">
          <br />
        </div>
        <div className="MsoNormal c16">
          <div className="MsoNormal c20">
            <br />
          </div>
          <div className="MsoNormal c21">
            <a name="_esuoutkhaf53" />
            <div
              className="MsoNormal c28"
              data-custom-class="heading_1"
              id="userreg"
            >
              <strong>
                <span className="c27">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">4.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  USER REGISTRATION
                </span>
              </strong>
            </div>
          </div>
          <div className="MsoNormal c21">
            ��
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c22">
                You may be required to register with the Site. You agree to keep
                your password confidential and will be responsible for all use
                of your account and password. We reserve the right to remove,
                reclaim, or change a username you select if we determine, in our
                sole discretion, that such username is inappropriate, obscene,
                or otherwise objectionable.
              </span>
            </div>
          </div>
        </div>
        <div className="MsoNormal c2">
          <br />
        </div>
        <div className="MsoNormal c2">
          <br />
        </div>
        <div className="MsoNormal c16">
          <div className="MsoNormal c20" />
          <div className="MsoNormal c29">
            <a name="_1voziltdxegg" />
            <div
              className="MsoNormal c28"
              data-custom-class="heading_1"
              id="prohibited"
            >
              <strong>
                <span className="c27">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">5.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  PROHIBITED ACTIVITIES
                </span>
              </strong>
            </div>
          </div>
          <div className="MsoNormal c21">
            <br />
          </div>
          <div
            className="MsoNormal MsoNormal c30"
            data-custom-class="body_text"
          >
            <span className="c22">
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </span>
          </div>
          <div className="MsoNormal c21">
            <br />
          </div>
          <div className="MsoNormal c29">
            <div className="MsoNormal c36">
              <div
                className="MsoNormal MsoNormal c6"
                data-custom-class="body_text"
              >
                <span className="c22">
                  As a user of the Site, you agree not to:
                </span>
              </div>
              <ul>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c31">
                    Systematically retrieve data or other content from the Site
                    to create or compile, directly or indirectly, a collection,
                    compilation, database, or directory without written
                    permission from us.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Circumvent, disable, or otherwise interfere with
                    security-related features of the Site, including features
                    that prevent or restrict the use or copying of any Content
                    or enforce limitations on the use of the Site and/or the
                    Content contained therein.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Disparage, tarnish, or otherwise harm, in our opinion, us
                    and/or the Site.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Use any information obtained from the Site in order to
                    harass, abuse, or harm another person.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Make improper use of our support services or submit false
                    reports of abuse or misconduct.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Use the Site in a manner inconsistent with any applicable
                    laws or regulations.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Engage in unauthorized framing of or linking to the Site.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Upload or transmit (or attempt to upload or to transmit)
                    viruses, Trojan horses, or other material, including
                    excessive use of capital letters and spamming (continuous
                    posting of repetitive text), that interferes with any
                    party�s uninterrupted use and enjoyment of the Site or
                    modifies, impairs, disrupts, alters, or interferes with the
                    use, features, functions, operation, or maintenance of the
                    Site.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Engage in any automated use of the system, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Delete the copyright or other proprietary rights notice from
                    any Content.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Attempt to impersonate another user or person or use the
                    username of another user.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Upload or transmit (or attempt to upload or to transmit) any
                    material that acts as a passive or active information
                    collection or transmission mechanism, including without
                    limitation, clear graphics interchange formats (�gifs�), 1�1
                    pixels, web bugs, cookies, or other similar devices
                    (sometimes referred to as �spyware� or �passive collection
                    mechanisms� or �pcms�).
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Interfere with, disrupt, or create an undue burden on the
                    Site or the networks or services connected to the Site.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Harass, annoy, intimidate, or threaten any of our employees
                    or agents engaged in providing any portion of the Site to
                    you.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Attempt to bypass any measures of the Site designed to
                    prevent or restrict access to the Site, or any portion of
                    the Site.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Copy or adapt the Site�s software, including but not limited
                    to Flash, PHP, HTML, JavaScript, or other code.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Except as permitted by applicable law, decipher, decompile,
                    disassemble, or reverse engineer any of the software
                    comprising or in any way making up a part of the Site.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Except as may be the result of standard search engine or
                    Internet browser usage, use, launch, develop, or distribute
                    any automated system, including without limitation, any
                    spider, robot, cheat utility, scraper, or offline reader
                    that accesses the Site, or using or launching any
                    unauthorized script or other software.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Use a buying agent or purchasing agent to make purchases on
                    the Site.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c33">
                    Make any unauthorized use of the Site, including collecting
                    usernames and/or email addresses of users by electronic or
                    other means for the purpose of sending unsolicited email, or
                    creating user accounts by automated means or under false
                    pretenses.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c10">
                    <span className="c34">
                      Use the Site as part of any effort to compete with us or
                      otherwise use the Site and/or the Content for any
                      revenue-generating endeavor or commercial enterprise.
                    </span>
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c10">
                    <span className="c34">
                      Use the Site to advertise or offer to sell goods and
                      services.
                    </span>
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c10">
                    <span className="c34">
                      Sell or otherwise transfer your profile.
                    </span>
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c10">No offensive talks </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c10">No insulting </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c10">No hate speech </span>
                </li>
              </ul>
              <div className="MsoNormal c35">
                <a name="_zbbv9tgty199" />
              </div>
            </div>
            <div className="MsoNormal c37">
              <br />
            </div>
            <div className="MsoNormal c37">
              <br />
            </div>
            <div
              className="MsoNormal MsoNormal c38"
              data-custom-class="heading_1"
              id="ugc"
            >
              <strong>
                <span className="c27">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">6.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  USER GENERATED CONTRIBUTIONS
                </span>
              </strong>
            </div>
            <div className="MsoNormal c26">
              <br />
            </div>
            <div className="MsoNormal c26">
              <div className="MsoNormal c8" data-custom-class="body_text">
                <span className="c22">
                  The Site may invite you to chat, contribute to, or participate
                  in blogs, message boards, online forums, and other
                  functionality, and may provide you with the opportunity to
                  create, submit, post, display, transmit, perform, publish,
                  distribute, or broadcast content and materials to us or on the
                  Site, including but not limited to text, writings, video,
                  audio, photographs, graphics, comments, suggestions, or
                  personal information or other material (collectively,
                  "Contributions"). Contributions may be viewable by other users
                  of the Site and through third-party websites. As such, any
                  Contributions you transmit may be treated as non-confidential
                  and non-proprietary. When you create or make available any
                  Contributions, you thereby represent and warrant that:
                </span>
              </div>
              <ul>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    The creation,
                    <span className="c39">
                      distribution, transmission, public display, or
                      performance, and the accessing, downloading, or copying of
                      your Contributions do not and will not infringe the
                      proprietary rights, including but not limited to the
                      copyright, patent, trademark, trade secret, or moral
                      rights of any third party.
                    </span>
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c40">
                    You are the creator and owner of or have the necessary
                    licenses, rights, consents, releases, and permissions to use
                    and to authorize us, the Site, and other users of the Site
                    to use your Contributions in any manner contemplated by the
                    Site and these Terms of Use.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    You have the written consent, release, and/or permission of
                    each and every identifiable individual person in your
                    Contributions to use the name or likeness of each and every
                    such identifiable individual person to enable inclusion and
                    use of your Contributions in any manner contemplated by the
                    Site and these Terms of Use.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions are not false, inaccurate, or misleading.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions are not unsolicited or unauthorized
                    advertising, promotional materials, pyramid schemes, chain
                    letters, spam, mass mailings, or other forms of
                    solicitation.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions are not obscene, lewd, lascivious,
                    filthy, violent, harassing, libelous, slanderous, or
                    otherwise objectionable (as determined by us).
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions do not ridicule, mock, disparage,
                    intimidate, or abuse anyone.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions are not used to harass or threaten (in
                    the legal sense of those terms) any other person and to
                    promote violence against a specific person or class of
                    people.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions do not violate any applicable law,
                    regulation, or rule.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions do not violate the privacy or publicity
                    rights of any third party.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions do not violate any applicable law
                    concerning child pornography, or otherwise intended to
                    protect the health or well-being of minors.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions do not include any offensive comments
                    that are connected to race, national origin, gender, sexual
                    preference, or physical handicap.
                  </span>
                </li>
                <li className="MsoNormal c32" data-custom-class="body_text">
                  <span className="c39">
                    Your Contributions do not otherwise violate, or link to
                    material that violates, any provision of these Terms of Use,
                    or any applicable law or regulation.
                  </span>
                </li>
              </ul>
              <div className="MsoNormal c8" data-custom-class="body_text">
                <span className="c22">
                  Any use of the Site in violation of the foregoing violates
                  these Terms of Use and may result in, among other things,
                  termination or suspension of your rights to use the Site.
                </span>
              </div>
            </div>
          </div>
          <div className="MsoNormal c20">
            <br />
          </div>
          <div className="MsoNormal c20">
            <br />
          </div>
          <div className="MsoNormal c29">
            <div className="MsoNormal c26">
              <div
                className="MsoNormal c8"
                data-custom-class="heading_1"
                id="license"
              >
                <strong>
                  <span className="c27">
                    <strong>
                      <span className="c14">
                        <strong>
                          <span className="c14">7.</span>
                        </strong>{" "}
                      </span>
                      �
                    </strong>
                    CONTRIBUTION LICENSE
                  </span>
                </strong>
              </div>
              <div className="MsoNormal c41" />
            </div>
            <div className="MsoNormal c26">
              <br />
            </div>
            <div
              className="MsoNormal MsoNormal c38"
              data-custom-class="body_text"
            >
              <span className="c22">
                By posting your Contributions to any part of the Site �or making
                Contributions accessible to the Site by linking your account
                from the Site to any of your social networking accounts , you
                automatically grant, and you represent and warrant that you have
                the right to grant, to us an unrestricted, unlimited,
                irrevocable, perpetual, non-exclusive, transferable,
                royalty-free, fully-paid, worldwide right, and license to host,
                use, copy, reproduce, disclose, sell, resell, publish,
                broadcast, retitle, archive, store, cache, publicly perform,
                publicly display, reformat, translate, transmit, excerpt (in
                whole or in part), and distribute such Contributions (including,
                without limitation, your image and voice) for any purpose,
                commercial, advertising, or otherwise, and to prepare derivative
                works of, or incorporate into other works, such Contributions,
                and grant and authorize sublicenses of the foregoing. The use
                and distribution may occur in any media formats and through any
                media channels.
              </span>
            </div>
            <div className="MsoNormal c26">
              <br />
            </div>
            <div
              className="MsoNormal MsoNormal c38"
              data-custom-class="body_text"
            >
              <span className="c22">
                This license will apply to any form, media, or technology now
                known or hereafter developed, and includes our use of your name,
                company name, and franchise name, as applicable, and any of the
                trademarks, service marks, trade names, logos, and personal and
                commercial images you provide. You waive all moral rights in
                your Contributions, and you warrant that moral rights have not
                otherwise been asserted in your Contributions.
              </span>
            </div>
            <div className="MsoNormal c26">
              <br />
            </div>
            <div
              className="MsoNormal MsoNormal c38"
              data-custom-class="body_text"
            >
              <span className="c22">
                We do not assert any ownership over your Contributions. You
                retain full ownership of all of your Contributions and any
                intellectual property rights or other proprietary rights
                associated with your Contributions. We are not liable for any
                statements or representations in your Contributions provided by
                you in any area on the Site. You are solely responsible for your
                Contributions to the Site and you expressly agree to exonerate
                us from any and all responsibility and to refrain from any legal
                action against us regarding your Contributions.
              </span>
            </div>
            <div className="MsoNormal c26">
              <br />
            </div>
            <div className="MsoNormal c8" data-custom-class="body_text">
              <span className="c22">
                We have the right, in our sole and absolute discretion, (1) to
                edit, redact, or otherwise change any Contributions; (2) to
                re-categorize any Contributions to place them in more
                appropriate locations on the Site; and (3) to pre-screen or
                delete any Contributions at any time and for any reason, without
                notice. We have no obligation to monitor your Contributions.
              </span>
            </div>
            <div className="MsoNormal c20">
              <br />
            </div>
            <div className="MsoNormal c20">
              <br />
            </div>
            <div className="MsoNormal c21" />
            <div
              className="MsoNormal MsoNormal c42"
              data-custom-class="heading_1"
              id="reviews"
            >
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">8.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  GUIDELINES FOR REVIEWS
                </span>
              </strong>
            </div>
            <div className="MsoNormal c21">
              <br />
            </div>
            <div className="MsoNormal c8" data-custom-class="body_text">
              <span className="c22">
                We may provide you areas on the Site to leave reviews or
                ratings. When posting a review, you must comply with the
                following criteria: (1) you should have firsthand experience
                with the person/entity being reviewed; (2) your reviews should
                not contain offensive profanity, or abusive, racist, offensive,
                or hate language; (3) your reviews should not contain
                discriminatory references based on religion, race, gender,
                national origin, age, marital status, sexual orientation, or
                disability; (4) your reviews should not contain references to
                illegal activity; (5) you should not be affiliated with
                competitors if posting negative reviews; (6) you should not make
                any conclusions as to the legality of conduct; (7) you may not
                post any false or misleading statements; and (8) you may not
                organize a campaign encouraging others to post reviews, whether
                positive or negative.
              </span>
            </div>
            <div className="MsoNormal c21">
              <br />
            </div>
            <div className="MsoNormal c8" data-custom-class="body_text">
              <span className="c22">
                We may accept, reject, or remove reviews in our sole discretion.
                We have absolutely no obligation to screen reviews or to delete
                reviews, even if anyone considers reviews objectionable or
                inaccurate. Reviews are not endorsed by us, and do not
                necessarily represent our opinions or the views of any of our
                affiliates or partners. We do not assume liability for any
                review or for any claims, liabilities, or losses resulting from
                any review. By posting a review, you hereby grant to us a
                perpetual, non-exclusive, worldwide, royalty-free, fully-paid,
                assignable, and sublicensable right and license to reproduce,
                modify, translate, transmit by any means, display, perform,
                and/or distribute all content relating to reviews.
              </span>
            </div>
            <div className="MsoNormal c20">
              <br />
            </div>
            <div className="MsoNormal c20">
              <br />
            </div>
            <div className="MsoNormal c20" />
          </div>
          <div className="MsoNormal c15">
            <span className="c10">
              <a name="_6nl7u6ag6use" />
            </span>
          </div>
        </div>
        <div className="c43" />
        <div
          className="MsoNormal c15"
          data-custom-class="heading_1"
          id="socialmedia"
        >
          <strong>
            <span className="c14">
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">9.</span>
                  </strong>{" "}
                </span>
                �
              </strong>
              SOCIAL MEDIA
            </span>
          </strong>
        </div>
        <div className="c21">
          <br />
        </div>
        <div className="MsoNormal c20" data-custom-class="body_text">
          <span className="c44">
            As part of the functionality of the Site, you may link your account
            with online accounts you have with third-party service providers
            (each such account, a �Third-Party Account�) by either: (1)
            providing your Third-Party Account login information through the
            Site; or (2) allowing us to access your Third-Party Account, as is
            permitted under the applicable terms and conditions that govern your
            use of each Third-Party Account. You represent and warrant that you
            are entitled to disclose your Third-Party Account login information
            to us and/or grant us access to your Third-Party Account, without
            breach by you of any of the terms and conditions that govern your
            use of the applicable Third-Party Account, and without obligating us
            to pay any fees or making us subject to any usage limitations
            imposed by the third-party service provider of the Third-Party
            Account. By granting us access to any Third-Party Accounts, you
            understand that (1) we may access, make available, and store (if
            applicable) any content that you have provided to and stored in your
            Third-Party Account (the �Social Network Content�) so that it is
            available on and through the Site via your account, including
            without limitation any friend lists and (2) we may submit to and
            receive from your Third-Party Account additional information to the
            extent you are notified when you link your account with the
            Third-Party Account. Depending on the Third-Party Accounts you
            choose and subject to the privacy settings that you have set in such
            Third-Party Accounts, personally identifiable information that you
            post to your Third-Party Accounts may be available on and through
            your account on the Site. Please note that if a Third-Party Account
            or associated service becomes unavailable or our access to such
            Third Party Account is terminated by the third-party service
            provider, then Social Network Content may no longer be available on
            and through the Site. You will have the ability to disable the
            connection between your account on the Site and your Third-Party
            Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE
            THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY
            ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH
            THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any
            Social Network Content for any purpose, including but not limited
            to, for accuracy, legality, or non-infringement, and we are not
            responsible for any Social Network Content. You acknowledge and
            agree that we may access your email address book associated with a
            Third-Party Account and your contacts list stored on your mobile
            device or tablet computer solely for purposes of identifying and
            informing you of those contacts who have also registered to use the
            Site. You can deactivate the connection between the Site and your
            Third-Party Account by contacting us using the contact information
            below or through your account settings (if applicable). We will
            attempt to delete any information stored on our servers that was
            obtained through such Third-Party Account, except the username and
            profile picture that become associated with your account.
          </span>
        </div>
        <div className="MsoNormal c20">
          <br />
        </div>
        <div className="MsoNormal c20">
          <br />
        </div>
        <div className="c45" />
        <div
          className="MsoNormal c15"
          data-custom-class="heading_1"
          id="submissions"
        >
          <strong>
            <span className="c14">
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">10.</span>
                  </strong>{" "}
                </span>
                �
              </strong>
              SUBMISSIONS
            </span>
          </strong>
        </div>
        <div className="c21">
          <br />
        </div>
        <div className="MsoNormal c20" data-custom-class="body_text">
          <span className="c46">
            You acknowledge and agree that any questions, comments, suggestions,
            ideas, feedback, or other information regarding the Site
            ("Submissions") provided by you to us are non-confidential and shall
            become our sole property. We shall own exclusive rights, including
            all intellectual property rights, and shall be entitled to the
            unrestricted use and dissemination of these Submissions for any
            lawful purpose, commercial or otherwise, without acknowledgment or
            compensation to you. You hereby waive all moral rights to any such
            Submissions, and you hereby warrant that any such Submissions are
            original with you or that you have the right to submit such
            Submissions. You agree there shall be no recourse against us for any
            alleged or actual infringement or misappropriation of any
            proprietary right in your Submissions.
          </span>
        </div>
        <div className="MsoNormal c20">
          <br />
        </div>
        <div className="c20">
          <br />
        </div>
        <div className="c43" />
        <div
          className="MsoNormal c15"
          data-custom-class="heading_1"
          id="thirdparty"
        >
          <strong>
            <span className="c14">
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">11.</span>
                  </strong>{" "}
                </span>
                �
              </strong>
              THIRD-PARTY WEBSITE AND CONTENT
            </span>
          </strong>
        </div>
        <div className="c21">
          <br />
        </div>
        <div className="MsoNormal c20" data-custom-class="body_text">
          <span className="c44">
            The Site may contain (or you may be sent via the Site) links to
            other websites ("Third-Party Websites") as well as articles,
            photographs, text, graphics, pictures, designs, music, sound, video,
            information, applications, software, and other content or items
            belonging to or originating from third parties ("Third-Party
            Content"). Such Third-Party Websites and Third-Party Content are not
            investigated, monitored, or checked for accuracy, appropriateness,
            or completeness by us, and we are not responsible for any
            Third-Party Websites accessed through the Site or any Third-Party
            Content posted on, available through, or installed from the Site,
            including the content, accuracy, offensiveness, opinions,
            reliability, privacy practices, or other policies of or contained in
            the Third-Party Websites or the Third-Party Content. Inclusion of,
            linking to, or permitting the use or installation of any Third-Party
            Websites or any Third-Party Content does not imply approval or
            endorsement thereof by us. If you decide to leave the Site and
            access the Third-Party Websites or to use or install any Third-Party
            Content, you do so at your own risk, and you should be aware these
            Terms of Use no longer govern. You should review the applicable
            terms and policies, including privacy and data gathering practices,
            of any website to which you navigate from the Site or relating to
            any applications you use or install from the Site. Any purchases you
            make through Third-Party Websites will be through other websites and
            from other companies, and we take no responsibility whatsoever in
            relation to such purchases which are exclusively between you and the
            applicable third party. You agree and acknowledge that we do not
            endorse the products or services offered on Third-Party Websites and
            you shall hold us harmless from any harm caused by your purchase of
            such products or services. Additionally, you shall hold us harmless
            from any losses sustained by you or harm caused to you relating to
            or resulting in any way from any Third-Party Content or any contact
            with Third-Party Websites.
          </span>
        </div>
        <div className="MsoNormal c20">
          <br />
        </div>
        <div className="c20">
          <br />
        </div>
        <div className="c43" />
        <div className="c17">
          <div className="MsoNormal c15">
            <span className="c10">
              <a name="_29ce8o9pbtmi" />
            </span>
          </div>
          <div
            className="MsoNormal c15"
            data-custom-class="heading_1"
            id="sitemanage"
          >
            <a name="_wj13r09u8u3u" />
            <strong>
              <span className="c14">
                <strong>
                  <span className="c14">
                    <strong>
                      <span className="c14">12.</span>
                    </strong>{" "}
                  </span>
                  �
                </strong>
                SITE MANAGEMENT
              </span>
            </strong>
          </div>
        </div>
        <div className="c17">
          <br />
        </div>
        <div className="MsoNormal c2" data-custom-class="body_text">
          <span className="c44">
            We reserve the right, but not the obligation, to: (1) monitor the
            Site for violations of these Terms of Use; (2) take appropriate
            legal action against anyone who, in our sole discretion, violates
            the law or these Terms of Use, including without limitation,
            reporting such user to law enforcement authorities; (3) in our sole
            discretion and without limitation, refuse, restrict access to, limit
            the availability of, or disable (to the extent technologically
            feasible) any of your Contributions or any portion thereof; (4) in
            our sole discretion and without limitation, notice, or liability, to
            remove from the Site or otherwise disable all files and content that
            are excessive in size or are in any way burdensome to our systems;
            and (5) otherwise manage the Site in a manner designed to protect
            our rights and property and to facilitate the proper functioning of
            the Site.
          </span>
        </div>
        <div className="c2">
          <br />
        </div>
        <div className="c2">
          <div className="MsoNormal c20">
            <br />
          </div>
          <div className="MsoNormal c20">
            <a name="_jugvcvcw0oj9" />
          </div>
          <div
            className="MsoNormal c20"
            data-custom-class="heading_1"
            id="privacypolicy1"
          >
            <strong>
              <span className="c14">
                <strong>
                  <span className="c14">
                    <strong>
                      <span className="c14">13.</span>
                    </strong>{" "}
                  </span>
                  �
                </strong>
                PRIVACY POLICY
              </span>
            </strong>
          </div>
          <div className="MsoNormal c21">
            <br />
          </div>
          <div className="MsoNormal c20" data-custom-class="body_text">
            <span className="c44">
              We care about data privacy and security.�
            </span>
            <span className="c24">Please review our Privacy Policy:</span>
            <strong className="c47">
              �
              <a
                href="https://idyfy.tech/privacy-policy"
                target="_blank"
                data-custom-class="link"
              >
                https://idyfy.tech/privacy-policy
              </a>
            </strong>
            <span className="c24">.�</span>
            <span className="c23">
              By using the Site, you agree to be bound by our Privacy Policy,
              which is incorporated into these Terms of Use. Please be advised
              the Site is hosted in{" "}
              <span className="c22">the United States</span> . If you access the
              Site from any other region of the world with laws or other
              requirements governing personal data collection, use, or
              disclosure that differ from applicable laws in
              <span className="c22">the United States</span> , then through your
              continued use of the Site, you are transferring your data to
              <span className="c22">the United States</span> , and you agree to
              have your data transferred to and processed in
              <span className="c22">the United States</span> .
            </span>
          </div>
        </div>
        <div className="c2">
          <br />
        </div>
        <div className="c2">
          <br />
        </div>
        <div className="c17">
          <div className="c37" />
          <div className="MsoNormal c15">
            <span className="c10">
              <a name="_n081pott8yce" />
            </span>
          </div>
          <div className="MsoNormal c21">
            <span className="c10">
              <a name="_sg28ikxq3swh" />
            </span>
          </div>
          <div
            className="MsoNormal c15"
            data-custom-class="heading_1"
            id="copyright3"
          >
            <strong>
              <span className="c14">
                <strong>
                  <span className="c14">
                    <strong>
                      <span className="c14">14.</span>
                    </strong>{" "}
                  </span>
                  �
                </strong>
                COPYRIGHT INFRINGEMENTS
              </span>
            </strong>
          </div>
          <div className="c17">
            <br />
          </div>
          <div data-custom-class="body_text" className="c2">
            <span className="c10">
              We respect the intellectual property rights of others. If you
              believe that any material available on or through the Site
              infringes upon any copyright you own or control, please
              immediately notify us using the contact information provided below
              (a �Notification�). A copy of your Notification will be sent to
              the person who posted or stored the material addressed in the
              Notification. Please be advised that pursuant to applicable law
              you may be held liable for damages if you make material
              misrepresentations in a Notification. Thus, if you are not sure
              that material located on or linked to by the Site infringes your
              copyright, you should consider first contacting an attorney.
            </span>
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c2" />
          <div
            className="MsoNormal c48"
            data-custom-class="heading_1"
            id="terms"
          >
            <a name="_k3mndam4w6w1" />
            <strong>
              <span className="c14">
                <strong>
                  <span className="c14">
                    <strong>
                      <span className="c14">15.</span>
                    </strong>{" "}
                  </span>
                  �
                </strong>
                TERM AND TERMINATION
              </span>
            </strong>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c49">
              These Terms of Use shall remain in full force and effect while you
              use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS
              OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE
              (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
              REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH
              OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE
              TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR
              ACCOUNT AND� ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY
              TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
            </span>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c44">
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </span>
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="modifications"
            >
              <a name="_e2dep1hfgltt" />
              <strong>
                <span className="c50">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">16.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  MODIFICATIONS AND INTERRUPTIONS
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c44">
              We reserve the right to change, modify, or remove the contents of
              the Site at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Site. We also reserve the right to modify or
              discontinue all or part of the Site without notice at any time. We
              will not be liable to you or any third party for any modification,
              price change, suspension, or discontinuance of the Site.
            </span>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c44">
              We cannot guarantee the Site will be available at all times. We
              may experience hardware, software, or other problems or need to
              perform maintenance related to the Site, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the Site
              at any time or for any reason without notice to you. You agree
              that we have no liability whatsoever for any loss, damage, or
              inconvenience caused by your inability to access or use the Site
              during any downtime or discontinuance of the Site. Nothing in
              these Terms of Use will be construed to obligate us to maintain
              and support the Site or to supply any corrections, updates, or
              releases in connection therewith.
            </span>
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="law"
            >
              <a name="_p6vbf8atcwhs" />
              <strong>
                <span className="c52">
                  <span className="c51">
                    <strong>
                      <span className="c14">
                        <strong>
                          <span className="c14">17.</span>
                        </strong>{" "}
                      </span>
                      �
                    </strong>
                    GOVERNING LAW
                  </span>
                  �
                </span>
              </strong>
            </div>
            <div className="MsoNormal c21">
              <br />
            </div>
            <div className="MsoNormal c15" />
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c53">
                These Terms shall be governed by and defined following the laws
                of{" "}
                <span className="c53">
                  {" "}
                  <span className="c53">India</span>{" "}
                </span>
              </span>
              . IDyfy and yourself irrevocably consent that the courts of
              <span className="c53">
                {" "}
                <span className="c53">India</span>{" "}
              </span>{" "}
              �shall have exclusive jurisdiction to resolve any dispute which
              may arise in connection with these terms.
            </div>
            <div className="MsoNormal c20" />
            <div className="MsoNormal c20">
              <br />
            </div>
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="disputes"
            >
              <a name="_v5i5tjw62cyw" />
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">
                          <strong>
                            <span className="c14">18.</span>
                          </strong>
                        </span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  DISPUTE RESOLUTION
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c15" />
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c22">
                You agree to irrevocably submit all disputes related to Terms or
                the relationship established by this Agreement to the
                jurisdiction of the India
              </span>
              courts. IDyfy shall also maintain the right to bring proceedings
              as to the substance of the matter in the courts of the country
              where you reside or, if these Terms are entered into in the course
              of your trade or profession, the state of your principal place of
              business.
            </div>
            <div className="MsoNormal c21">
              <span className="c22" />
            </div>
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="corrections"
            >
              <a name="_mjgzo07ttzx5" />
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">19.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  CORRECTIONS
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c44">
              There may be information on the Site that contains typographical
              errors, inaccuracies, or omissions, including descriptions,
              pricing, availability, and various other information. We reserve
              the right to correct any errors, inaccuracies, or omissions and to
              change or update the information on the Site at any time, without
              prior notice.
            </span>
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="disclaimer"
            >
              <a name="_gvi74blrahf9" />
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">20.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  DISCLAIMER
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c44">
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
              THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE
              RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND
              YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
              ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE�S CONTENT OR THE
              CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO
              LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
              INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
              PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
              ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR
              USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
              AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION
              OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS,
              VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
              THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
              OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE
              OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
              TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT
              WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY
              PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH
              THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
              APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE
              WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING
              ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF
              PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE
              THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
              JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            </span>
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="liability"
            >
              <a name="_4pjah3d0455q" />
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">21.�</span>
                      </strong>
                    </span>{" "}
                  </strong>
                  LIMITATIONS OF LIABILITY
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c44">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING
              ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU
              FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION,
              WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO
              US �
              <span className="c54">
                DURING THE one (1) mONTH PERIOD PRIOR TO ANY CAUSE OF ACTION
                ARISING
              </span>
              . CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
              LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION
              OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE
              ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY
              HAVE ADDITIONAL RIGHTS.
            </span>
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="indemnification"
            >
              <a name="_k5ap68aj1dd4" />
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">22.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  INDEMNIFICATION
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c44">
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys� fees and expenses, made by any third party due to or
              arising out of: (1) your Contributions;� ({" "}
              <span className="c55">2</span>) use of the Site; ({" "}
              <span className="c55">3</span>) breach of these Terms of Use; (
              <span className="c55">4</span>) any breach of your representations
              and warranties set forth in these Terms of Use; (
              <span className="c55">5</span>) your violation of the rights of a
              third party, including but not limited to intellectual property
              rights; or ( <span className="c55">6</span>) any overt harmful act
              toward any other user of the Site with whom you connected via the
              Site. Notwithstanding the foregoing, we reserve the right, at your
              expense, to assume the exclusive defense and control of any matter
              for which you are required to indemnify us, and you agree to
              cooperate, at your expense, with our defense of such claims. We
              will use reasonable efforts to notify you of any such claim,
              action, or proceeding which is subject to this indemnification
              upon becoming aware of it.
            </span>
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="userdata"
            >
              <a name="_ftgg17oha0ep" />
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">
                          <strong>
                            <span className="c14">23.</span>
                          </strong>
                        </span>{" "}
                      </strong>
                      �
                    </span>{" "}
                  </strong>
                  USER DATA
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c44">
              We will maintain certain data that you transmit to the Site for
              the purpose of managing the performance of the Site, as well as
              data relating to your use of the Site. Although we perform regular
              routine backups of data, you are solely responsible for all data
              that you transmit or that relates to any activity you have
              undertaken using the Site. You agree that we shall have no
              liability to you for any loss or corruption of any such data, and
              you hereby waive any right of action against us arising from any
              such loss or corruption of such data.
            </span>
          </div>
          <div className="c2">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="electronic"
            >
              <a name="_dkovrslqodui" />
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">24.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c44">
                Visiting the Site, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications, and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email and on the Site,
                satisfy any legal requirement that such communication be in
                writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY
                OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or
                requirements under any statutes, regulations, rules, ordinances,
                or other laws in any jurisdiction which require an original
                signature or delivery or retention of non-electronic records, or
                to payments or the granting of credits by any means other than
                electronic means.
              </span>
            </div>
            <div className="MsoNormal c20">
              <br />
            </div>
            <div className="MsoNormal c20">
              <br />
            </div>
            <div className="MsoNormal c20" />
            <div
              className="MsoNormal c15"
              data-custom-class="heading_1"
              id="misc"
            >
              <a name="_d4jvmcnxg0wt" />
              <strong>
                <span className="c14">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">25.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  MISCELLANEOUS
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c44">
                These Terms of Use and any policies or operating rules posted by
                us on the Site or in respect to the Site constitute the entire
                agreement and understanding between you and us. Our failure to
                exercise or enforce any right or provision of these Terms of Use
                shall not operate as a waiver of such right or provision. These
                Terms of Use operate to the fullest extent permissible by law.
                We may assign any or all of our rights and obligations to others
                at any time. We shall not be responsible or liable for any loss,
                damage, delay, or failure to act caused by any cause beyond our
                reasonable control. If any provision or part of a provision of
                these Terms of Use is determined to be unlawful, void, or
                unenforceable, that provision or part of the provision is deemed
                severable from these Terms of Use and does not affect the
                validity and enforceability of any remaining provisions. There
                is no joint venture, partnership, employment or agency
                relationship created between you and us as a result of these
                Terms of Use or use of the Site. You agree that these Terms of
                Use will not be construed against us by virtue of having drafted
                them. You hereby waive any and all defenses you may have based
                on the electronic form of these Terms of Use and the lack of
                signing by the parties hereto to execute these Terms of Use.
              </span>
            </div>
            <div className="MsoNormal c21" />
            <div className="MsoNormal c21">
              <br />
            </div>
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c10">__________</span>
            </div>
          </div>
          <div className="c2" />
          <div className="c2">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20">
              <br />
            </div>
            <div
              className="MsoNormal c20"
              data-custom-class="heading_1"
              id="contact"
            >
              <a name="_t4pq5cwn486q" />
              <strong>
                <span className="c50">
                  <strong>
                    <span className="c14">
                      <strong>
                        <span className="c14">26.</span>
                      </strong>{" "}
                    </span>
                    �
                  </strong>
                  CONTACT US
                </span>
              </strong>
            </div>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="MsoNormal c2" data-custom-class="body_text">
            <span className="c44">
              In order to resolve a complaint regarding the Site or to receive
              further information regarding use of the Site, please contact us
              at:
            </span>
          </div>
          <div className="c17">
            <br />
          </div>
          <div className="c12">
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c49">
                {" "}
                <strong>IDyfy</strong>{" "}
              </span>
            </div>
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c9">
                <strong>
                  <span className="c10">
                    Padre Concei��o College Of Engineering, Agnel Technical
                    Education Complex, Agnelganv
                  </span>
                </strong>
              </span>
            </div>
            <div className="MsoNormal c20" data-custom-class="body_text" />
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c9">
                <strong>
                  <span className="c10">Verna , Goa</span>
                </strong>
              </span>
              <span className="c9">
                <strong>
                  <span className="c10">403722 </span>
                </strong>
              </span>
            </div>
            <div className="MsoNormal c20">
              <span className="c9">
                <strong>
                  <span className="c10"> </span>
                </strong>
              </span>
            </div>
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c9">
                <strong>
                  <span className="c10"> India </span>
                </strong>
              </span>
            </div>
            <div className="MsoNormal c20">
              <span className="c9">
                <strong>
                  <span className="c11">
                    <strong>
                      <span className="c10"> </span>
                    </strong>
                  </span>
                </strong>
              </span>
            </div>
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c9">
                <strong>
                  <span className="c10">Phone:�</span>
                </strong>
                <strong>
                  <span className="c56">9657735214 </span>
                </strong>
              </span>
            </div>
            <div className="MsoNormal c20" data-custom-class="body_text" />
            <div className="MsoNormal c20" data-custom-class="body_text">
              <span className="c49">
                {" "}
                <strong>support@idyfy.tech</strong>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TermsAndConditions;
