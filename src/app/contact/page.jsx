"use client"
import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactAni from "./ContactAni";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l7bwncp",
        "template_r6nvzoe",
        form.current,
        "lOej7hF1MNKpr8k0j"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Thank you for messaging me!", {
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact me for your services</h1>
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <ContactAni />
        </div>

        <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name*"
            name="user_name"
            className="p-3 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address*"
            name="user_email"
            className="p-3 border rounded-md"
          />
          <input
            type="text"
            placeholder="Subject*"
            name="from_name"
            className="p-3 border rounded-md"
          />
          <textarea
            className="p-3 border rounded-md"
            placeholder="Your message*"
            name="message"
            rows={6}
          ></textarea>
          <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all" type="Submit" value="send">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
