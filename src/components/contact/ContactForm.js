import React, { useState } from "react";
import FormBanner from "./FormBanner";
import SubmitButton from "../general/buttons/SubmitButton";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const defaultError = "There was an issue with your submission. Please try again."

export default function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionErrored, setSubmissionErrored] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defaultError);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      form.firstName === "" ||
      form.lastName === "" ||
      form.email === "" ||
      form.subject === "" ||
      form.message === ""
    ) {
      setSubmissionErrored(true);
      setErrorMessage("All fields must be filled to submit.");
      setIsSubmitted(true);
      return;
    }

    const email = {
      from_name: form.firstName + " " + form.lastName,
      from_email: form.email,
      message: form.message,
    };
    const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const userId = process.env.REACT_APP_EMAILJS_USERID;

    await window.emailjs
      .send("default_service", template, email, userId)
      .then((res) => {
        setForm(initialFormState);
      })
      .catch((err) => {
        setSubmissionErrored(true);
      });
    setIsSubmitted(true);
  };

  const closeBanner = () => {
    setIsSubmitted(false);
    setSubmissionErrored(false);
    setErrorMessage(defaultError);
  };

  return (
    <div className="container mx-auto mt-10 px-4 h-full 0">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-2/3 xl:w-1/2 px-4">
          {isSubmitted ? (
            <FormBanner
              close={closeBanner}
              success={!submissionErrored}
              errorMessage={errorMessage}
            />
          ) : (
            <></>
          )}
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
            <div className="flex-auto px-4 lg:px-10 py-10">
              <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className="flex ">
                  <div className="relative md:w-full mb-3 mr-8">
                    <label className="inline-flex items-center text-gray-700">
                      First Name
                    </label>
                    <input
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="First Name"
                      name="firstName"
                      value={form.firstName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="relative md:w-full mb-3">
                    <label className="inline-flex items-center text-gray-700">
                      Last Name
                    </label>
                    <input
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Last Name"
                      name="lastName"
                      value={form.lastName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="relative w-full mb-3">
                  <label className="inline-flex items-center text-gray-700">
                    Email
                  </label>
                  <input
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="relative w-full mb-3 text-gray-700">
                  <label className="inline-flex items-center">Subject</label>
                  <input
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label className="inline-flex items-center text-gray-700">
                    Message
                  </label>
                  <textarea
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 h-36"
                    placeholder="How do you feel about my portfolio? Do you have any suggestions how I can improve it?"
                    name="message"
                    value={form.message}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="text-center mt-6">
                  <SubmitButton>Submit</SubmitButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
