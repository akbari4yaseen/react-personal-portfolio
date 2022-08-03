import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_66fuj4d",
      "template_cbqrxed",
      form.current,
      "4d_st4OksIPLMQ1U5"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>info@email.com</h5>
            <a href="mailto:info@email.com">Send a Message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Akbari Dev</h5>
            <a
              href="https://m.me/akbari-yaseen"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+93793828948</h5>
            <a
              href="https://wa.me/+93793828948?text=Hi"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Massage
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
