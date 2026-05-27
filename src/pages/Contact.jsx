import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/Form/FormInput";
import TextArea from "../components/Form/TextArea";
import { BsFillSendFill } from "react-icons/bs";
import useContactForm from "../hooks/useContactForm";

export default function Contact() {

  // ========================
  // NAVIGATION INSTANCE
  // ========================
  const history = useNavigate();

  // ========================
  // CUSTOM FORM HOOK
  // ========================
  const {
    form,
    recaptchaRef,
    values,
    textareaValues,
    setTextAreaValues,
    loading,
    statusMessage,
    errorMessage,
    onChange,
    handleSubmit,
  } = useContactForm(history);

  // ========================
  // FORM INPUT CONFIGURATION
  // ========================
  const inputs = [
    {
      id: "name",
      name: "name",
      label: "name",
      type: "text",
      autoComplete: "name",
      maxLength: 15,
      required: true,
      pattern: "^[A-Za-z ]{3,15}$",
      errorMessage: "Nom invalide (3 à 15 lettres uniquement)",
    },
    {
      id: "email",
      name: "email",
      label: "email",
      type: "email",
      autoComplete: "email",
      required: true,
      errorMessage: "Email invalide",
    },
  ];

  return (
    <>
      <h2 className="contact-title">CONTACT</h2>
      <div className="form">

        {/* ======================== */}
        {/* CONTACT FORM */}
        {/* ======================== */}
        <form className="for-form" ref={form} onSubmit={handleSubmit}>

          {/* ======================== */}
          {/* DYNAMIC INPUTS RENDERING */}
          {/* ======================== */}
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name] || ""}
              onChange={onChange}
              className="form-input"
            />
          ))}

          {/* ======================== */}
          {/* TEXTAREA FIELD */}
          {/* ======================== */}
          <TextArea
            placeholder="Laissez-moi un message ainsi qu'un numéro de téléphone."
            setTextAreaValues={setTextAreaValues}
            value={textareaValues}
          />

          {/* ======================== */}
          {/* RECAPTCHA VERIFICATION */}
          {/* ======================== */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          />

          {/* ======================== */}
          {/* STATUS MESSAGES */}
          {/* ======================== */}
          {statusMessage && (
            <p className="success-message">{statusMessage}</p>
          )}

          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="btn-form"
            disabled={loading}
          >
            {loading ? "Sending..." : <BsFillSendFill />}
          </button>
        </form>
      </div>
    </>
  );
}