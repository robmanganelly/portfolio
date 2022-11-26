import { send } from "@emailjs/browser";
import React, { useState, useEffect, useRef } from "react";
// import MagicCursor from '../../layout/magic-cursor';
import { customCursor } from "../../plugin/plugin";
import ReCAPTCHA from "react-google-recaptcha";

const touchInfo = [
  {
    icon: "icon-location",
    info: ["Florida U.S."],
    linkTo: "http://maps.google.com/maps/place/Miami,+FL",
  },
  {
    icon: "icon-mail-3",
    info: ["roberto.manganelly", "@gmail.com"],
    linkTo: "mailto:roberto.manganelly@gmail.com",
  },
  { icon: "icon-mobile", info: ["+1 (786) 820-5678"] },
];

function validate(field, value) {
  switch (field) {
    case "email":
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    case "name":
      return (
        value.length > 1 &&
        value.length < 50 &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      );
    case "msg":
      return value.length > 1 && value.length < 500;
    default:
      return false;
  }
}

export default function ContactGlitch({ ActiveIndex }) {
  const captchaRef = useRef(null);

  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    // dataImage();
    customCursor();
  });

  const [form, setForm] = useState({ email: "", name: "", msg: "" });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, msg } = form;

  //Handlers
  const onSubmit = (e) => {
    // TODO send actual message from here.
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    if (
      !!token &&
      validate("email", email) &&
      validate("name", name) &&
      validate("msg", msg)
    ) {      
      send(
        "default_service",
       process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        {
          timestamp: new Date().toLocaleString(),
          from_name: name,
          reply_to: email,
          message: msg,
          "g-recaptcha-response": token,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      setSuccess(true);
      setTimeout(() => {
        setForm({ email: "", name: "", msg: "" });
        setSuccess(false);
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const generateClickHandler = (url) => {};

  return (
    <>
      {/* <!-- CONTACT --> */}
      <div
        className={
          ActiveIndex === 4
            ? "cavani_tm_section active animated rollIn"
            : "cavani_tm_section hidden animated rollOut"
        }
        id="contact_"
      >
        <div className="section_inner">
          <div className="cavani_tm_contact">
            <div className="cavani_tm_title">
              <span>Get in Touch</span>
            </div>
            <div className="short_info">
              <ul>
                {touchInfo.map((item, i) => (
                  <li key={i}>
                    {/*hidden link to call the action */}
                    <a
                      id={`link-${i}`}
                      style={{ display: "none", position: "hidden" }}
                      href={item.linkTo}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {i}
                    </a>

                    {/**actual div containing the li */}
                    <div
                      style={{ cursor: "pointer" }}
                      className="list_inner"
                      onClick={
                        // Ternary operator for calling action based on index
                        i !== 2
                          ? (e) => {
                              return document
                                .getElementById(`link-${i}`)
                                .click();
                            }
                          : (e) => {
                              navigator.clipboard
                                .writeText("+17868205678")
                                .then(() =>
                                  alert(
                                    'Phone Number: "+1 (786) 820 5678"\nsuccessfully copied to clipboard.'
                                  )
                                );
                            }
                      }
                    >
                      <i className={item.icon}></i>
                      <span>
                        {item.info.map((fragment, f) => (
                          <span key={f}>{fragment}</span>
                        ))}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/*<!--FORM SECTION--> */}
            <div className="form">
              <div className="left">
                <div className="fields">
                  {/* Contact Form */}
                  <form className="contact_form" onSubmit={(e) => onSubmit(e)}>
                    <div
                      className="returnmessage"
                      data-success="Your message has been received, we will contact you soon."
                      style={{ display: success ? "block" : "none" }}
                    >
                      <span className="contact_success">
                        Your message has been received, we will contact you
                        soon.
                      </span>
                    </div>
                    <div
                      className="empty_notice"
                      style={{ display: error ? "block" : "none" }}
                    >
                      <span>Error:<br/>Please Check your Input, all fields must be properly completed!</span>
                    </div>
                    {/* */}

                    <div className="fields">
                      <ul>
                        <li
                          className={`input_wrapper ${
                            active === "name" || name ? "active" : ""
                          }`}
                        >
                          <input
                            onFocus={() => setActive("name")}
                            onBlur={() => setActive(null)}
                            onChange={(e) => onChange(e)}
                            value={name}
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Name"
                          />
                        </li>
                        <li
                          className={`input_wrapper ${
                            active === "email" || email ? "active" : ""
                          }`}
                        >
                          <input
                            onFocus={() => setActive("email")}
                            onBlur={() => setActive(null)}
                            onChange={(e) => onChange(e)}
                            value={email}
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                          />
                        </li>
                        <li
                          className={`last ${
                            active === "message" || msg ? "active" : ""
                          }`}
                        >
                          <textarea
                            onFocus={() => setActive("message")}
                            onBlur={() => setActive(null)}
                            name="msg"
                            onChange={(e) => onChange(e)}
                            value={msg}
                            id="message"
                            placeholder="Message"
                          />
                        </li>
                        <li>
                          <ReCAPTCHA
                            ref={captchaRef}
                            sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                          />
                        </li>
                      </ul>
                      <div className="cavani_tm_button">
                        <input
                          className="a"
                          type="submit"
                          id="send_message"
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </form>
                  {/* /Contact Form */}
                </div>
              </div>
              {/* <!--MAP SECTION--> */}
              <div className="right">
                <div className="map_wrap">
                  <div className="map" id="ieatmaps">
                    <iframe
                      height={375}
                      loading="lazy"
                      style={{ width: "100%" }}
                      id="gmap_canvas"
                      // src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      src="https://maps.google.com/maps?q=Miami+FL&t=&z=9&ie=UTF8&iwloc=&output=embed"
                    />
                    <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                    <br />
                  </div>
                </div>
                {/* Get your API here https://www.embedgooglemap.net */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT --> */}
    </>
  );
}
