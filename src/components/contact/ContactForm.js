import React, { useState } from "react";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const userId = process.env.REACT_APP_EMAILJS_USERID;
    const emailContent = {
      from_name: form.firstName + " " + form.lastName,
      from_email: form.email,
      message: form.message
    };
    
    window.emailjs.send('default_service', template, emailContent, userId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    setForm(initialFormState);
  };

  return (
    <div className="container mx-auto mt-10 px-4 h-full 0">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-2/3 xl:1/2 2xl:1/3 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 ">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex ">
                  <div className="relative md:w-full mb-3 mr-8">
                    <label className="inline-flex items-center cursor-pointer text-gray-700">
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
                    <label className="inline-flex items-center cursor-pointer text-gray-700">
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
                  <label className="inline-flex items-center cursor-pointer text-gray-700">
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
                  <label className="inline-flex items-center cursor-pointer">
                    Subject
                  </label>
                  <input
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label className="inline-flex items-center cursor-pointer text-gray-700">
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
                  <button
                    className="bg-gray_blue text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
