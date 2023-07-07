"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image.js";
import validator from "validator";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);
  const errorRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [mailError, setMailError] = useState(false);
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [success, error]);
  const sendEmail = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (form.current) {
      const data = new FormData(form.current);
      const fields = {
        Nom: "name",
        Prénom: "lastName",
        Email: "email",
        Téléphone: "phone",
        Message: "message",
      };
      for (const [key, value] of Object.entries(fields)) {
        const fieldValue = data.get(value);
        console.log(`${key} : ${fieldValue}`);

        if (
          (key === "Téléphone" && fieldValue.length < 10) ||
          fieldValue.length < 2
        ) {
          setMailError(true);
          await errorRef.current;
          setLoading(false);
          return (errorRef.current.innerText = `Veuillez bien renseigner le champ : ${key}`);
        }
      }
      const email = data.get("email");
      if (!validator.isEmail(email)) {
        setLoading(false);
        setMailError(true);
        await errorRef.current;
        errorRef.current.innerText = "Veuillez saisir un email valide";
        return;
      }
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_MY_SERVICE_ID,
          process.env.NEXT_PUBLIC_MY_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_MY_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setSuccess(true);
              setLoading(false);
            }
          },
          (error) => {
            setError(true);
            console.log(error);
            setLoading(false);
          }
        );
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="contact-c">
        <h2 className="contact-c-title">Et maintenant ?</h2>
        <h2 className="contact-c-sub-title">Get in touch</h2>
        <p className="contact-c-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga, ipsa
          ratione dignissimos hic quos qui excepturi dolorum eius. Hic sint
          assumenda nesciunt culpa quis.
        </p>
      </div>
      <form onClick={() => setMailError(false)} onSubmit={sendEmail} ref={form}>
        {mailError && (
          <div className="errorMessage">
            <span ref={errorRef}></span>
          </div>
        )}
        <div className="inputContainer ic1">
          <input
            type="text"
            id="firstName"
            className="input"
            placeholder="Nom"
            name="name"
          />
          <div className="cut"></div>
          <label htmlFor="firstName" className="label">
            Nom
          </label>
        </div>
        <div className="inputContainer ic2">
          <input
            type="text"
            id="lastName"
            className="input"
            placeholder="Prénom"
            name="lastName"
          />
          <div className="cut cutpre"></div>
          <label htmlFor="lastName" className="label">
            Prénom
          </label>
        </div>
        <div className="inputContainer ic3">
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Email"
            name="email"
          />
          <div className="cut short"></div>
          <label htmlFor="email" className="label">
            Email
          </label>
        </div>
        <div className="inputContainer ic4">
          <input
            type="phone"
            id="phone"
            className="input"
            placeholder="Téléphone"
            name="phone"
          />
          <div className="cut cuttel"></div>
          <label htmlFor="phone" className="label">
            Téléphone
          </label>
        </div>
        <div className="inputContainer ic5">
          <textarea
            rows={8}
            type="text"
            className="input"
            placeholder="Message"
            name="message"
            id="message"
          />
          <div className="cut cutmes"></div>
          <label htmlFor="message" className="label">
            Message
          </label>
        </div>
        <div className="inputContainer ic6">
          <button
            id="btn"
            className={`btn ${success ? "success" : ""}`}
            type="submit"
          >
            {!success && !error && "Envoyer"}
            {success ? "Votre message à été envoyé avec succès" : ""}
            {error ? "Echec d'envoi, ressayer plus tard" : ""}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
