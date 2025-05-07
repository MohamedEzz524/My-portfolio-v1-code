import React, { useState } from "react";
import "./contact.css";
import {
  MainTitle,
  faEnvelope,
  faMobileScreen,
  faLocationDot,
  faLinkedin,
  faWhatsapp,
  faGithub,
  faGoogleDrive,
} from "../Imports/ImportCenter";
import ConfirmationMsg from "../Components/Confirmation/ConfirmationMsg";

import ContactInfo from "../Components/Contact-Info/ContactInfo";
import IconLink from "../Components/Icon-Link/IconLink";
//Formspree To send Email Third-party service
import { useForm } from "@formspree/react";
import Stars from "../Components/Stars/StarsRate";
import InputType from "../Components/InputType/InputType";
//footer
import Footer from "../Footer_Section/Footer";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, handleFormSubmit] = useForm("mvgkwwre");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(e);
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setUser({ name: "", email: "", message: "", subject: "" });
    }, 3000);
  };

  return (
    <section className="contact section-app" id="contact">
      <MainTitle title="Contact" />

      <div className="contact-feedback-container">
        <div className="contact-overlay"></div>
        <div className="contact-container">
          {/* send message form */}
          <div className="contact-input">
            <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
              <p className="send-message">Send Message</p>
              <InputType
                type="text"
                placeholder="Your Name"
                user={user}
                value={user.name}
                setUser={setUser}
                name="name"
              />
              <InputType
                type="email"
                placeholder="Email"
                user={user}
                value={user.email}
                setUser={setUser}
                name="email"
              />
              <InputType
                type="text"
                placeholder="Subject"
                user={user}
                value={user.subject}
                setUser={setUser}
                name="subject"
              />
              <InputType
                tag="textarea"
                placeholder="Message"
                user={user}
                value={user.message}
                setUser={setUser}
                name="message"
              />
              <button
                className="send-btn"
                type="submit"
                disabled={state.submitting}
              >
                Send Message
              </button>
            </form>
            {/* confirmation */}
            {messageSent && (
              <ConfirmationMsg message="Message Sent Successfully" />
            )}
          </div>

          {/* side info */}
          <div className="contact-info">
            <p className="get-in">Get in touch</p>
            <ul className="my-contact-info">
              <ContactInfo
                faIcon={faMobileScreen}
                infoName="Phone"
                infoData="(+2) 01033866796"
              />
              <ContactInfo
                faIcon={faLocationDot}
                infoName="Address"
                infoData="Egypt, Sharkia, 10th of Ramadan"
              />
              <ContactInfo
                faIcon={faEnvelope}
                infoName="Email"
                infoData="moelsayed524@gmail.com"
              />
              <ContactInfo
                faIcon={faWhatsapp}
                infoName="Available WhatsApp"
                infoData="(+2) 01033866796"
              />
            </ul>
            <ul className="my-links">
              <IconLink
                alink="https://github.com/MohamedEzz524"
                faIcon={faGithub}
                content="Github"
              />
              <IconLink
                alink="https://linkedin.com/in/mohamed-elsayed-327b77244"
                faIcon={faLinkedin}
                content="LinkedIn"
              />
              <IconLink
                alink="https://drive.google.com/drive/u/0/home"
                faIcon={faGoogleDrive}
                content="Drive"
              />
            </ul>
          </div>
        </div>
        {/* feedback-rate */}s{" "}
        <div className="feedback-rate">
          <div className="feedback-speech">
            <p className="feedback-title">Message</p>
            Your feedback is invaluable in helping me grow, learn, and take
            things to the next level. I would love for you to share your ideas,
            thoughts, or any notes with me—they mean thing for me! and i'm ready
            to discuss anything u would like to Thank you for being a part of my
            journey, and for contributing to something greater together.
          </div>
          <div className="rate">
            <p className="rate-title">Rate Me</p>
            <Stars />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
