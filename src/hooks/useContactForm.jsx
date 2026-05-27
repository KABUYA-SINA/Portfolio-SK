import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function useContactForm() {
  const form = useRef();
  const recaptchaRef = useRef();

  // ========================
  // FORM STATE
  // ========================
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const [textareaValues, setTextAreaValues] = useState("");

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ========================
  // INPUT HANDLER
  // ========================
  const onChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ========================
  // RESET FORM
  // ========================
  const resetForm = () => {
    setValues({ name: "", email: "" });
    setTextAreaValues("");
    recaptchaRef.current?.reset();
  };

  // ========================
  // SUBMIT HANDLER
  // ========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatusMessage("");
    setErrorMessage("");

    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      setErrorMessage("Please verify the reCAPTCHA!");
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_API_SERVICE,
        process.env.REACT_APP_API_TEMP,
        form.current,
        process.env.REACT_APP_API_PUBLIC
      );

      if (result.status === 200) {
        setStatusMessage("Message sent successfully");
        resetForm();
      } else {
        setErrorMessage("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
}