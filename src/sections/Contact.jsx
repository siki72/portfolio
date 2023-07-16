"use client";
import React, { useEffect, useReducer, useRef } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { INTIAL_STATE, formReducer } from "@/reducers/form/formReducer.js";
import { ACTIONS_TYPES } from "@/reducers/form/actionsType.js";
import Loading from "@/components/Loading.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  // call reducer
  const [state, dispatch] = useReducer(formReducer, INTIAL_STATE);
  const form = useRef(null);
  const errorRef = useRef();
  let field = null;

  useEffect(() => {
    if (state.success) {
      setTimeout(() => {
        dispatch({ type: ACTIONS_TYPES.HIDE_MESSAGE });
      }, 3000);
    }
    if (state.error) {
      setTimeout(() => {
        dispatch({ type: ACTIONS_TYPES.HIDE_ERROR });
      }, 3000);
    }
    if (state.mailError) {
      setTimeout(() => {
        dispatch({ type: ACTIONS_TYPES.HIDE_ERROR });
      }, 3000);
    }
  }, [state.success, state.error, state.mailError]);

  const sendEmail = async (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS_TYPES.SEND_START });
    if (form.current) {
      const data = new FormData(form.current);
      const fields = {
        firstName: "name",
        lastName: "lastName",
        email: "email",
        phone: "phone",
        message: "message",
      };
      for (const [key, value] of Object.entries(fields)) {
        const fieldValue = data.get(value);
        field = document.getElementById(key);
        console.log(`${key} : ${fieldValue}`);

        if (
          (key === "Téléphone" && fieldValue.length < 10) ||
          fieldValue.length < 2
        ) {
          field.classList.add("failed");
          dispatch({ type: ACTIONS_TYPES.WRONG_ENTRIES });
          return;
        }
      }
      const email = data.get("email");
      if (!validator.isEmail(email)) {
        dispatch({ type: ACTIONS_TYPES.WRONG_ENTRIES });
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
              form.current.reset();
              dispatch({ type: ACTIONS_TYPES.SEND_SUCCES });
            }
          },
          (error) => {
            dispatch({ type: ACTIONS_TYPES.EMAIL_ERROR });
            console.log(error);
          }
        );
    }
  };
  const handleHideError = (e) => {
    return dispatch({ type: "" });
  };

  return (
    <section className="contact" id="contact">
      {state.loading && <Loading />}
      <div className="contact-c">
        <h2 className="contact-c-title">Et maintenant ?</h2>
        <h2 className="contact-c-sub-title">Get in touch</h2>
        <p className="contact-c-text">
          Je suis actuellement à la recherche &apos;opportunités
          professionnelles. N&apos;hésitez pas à me contacter !
        </p>
      </div>
      <motion.form
        onClick={handleHideError}
        onSubmit={sendEmail}
        ref={form}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 },
        }}
      >
        <div className="inputContainer ic1">
          <input
            type="text"
            id="firstName"
            className="input"
            placeholder="Nom"
            name="name"
            onFocus={(e) => e.target.classList.remove("failed")}
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
            onFocus={(e) => e.target.classList.remove("failed")}
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
            onFocus={(e) => e.target.classList.remove("failed")}
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
            onFocus={(e) => e.target.classList.remove("failed")}
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
            onFocus={(e) => e.target.classList.remove("failed")}
          />
          <div className="cut cutmes"></div>
          <label htmlFor="message" className="label">
            Message
          </label>
        </div>
        <div className="inputContainer ic6">
          <button
            id="btn"
            className={`btn ${state.success ? "success" : ""} ${
              state.mailError ? "failed" : ""
            } `}
            type="submit"
          >
            {!state.success && !state.mailError && "Envoyer"}
            {state.success ? "Votre message à été envoyé avec succès" : ""}
            {state.mailError ? "Echec d'envoi, ressayer plus tard" : ""}
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
