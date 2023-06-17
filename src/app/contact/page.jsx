"use client"
import React, { useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7fw8tc",
        "template_y10yfz7",
        form.current,
        "0AGx-yacdwuJYI7go"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Thank you for message me !", {
            position: toast.POSITION.TOP_RIGHT,
          });
    
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input
                type="text"
                placeholder="Name*"
                name="user_name}"
                className={styles.input}
              />
         <input
                type="text"
                placeholder="Email Address*"
                name="user_email"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Subject*"
                name="from_name"
                className={styles.input}
              />

              <textarea
                className={styles.textArea}
                placeholder="Your message*"
                name="message"
                rows={6}
              ></textarea>
        
        <button className="hero" type="Submit" value="send">Submit</button>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Contact;
