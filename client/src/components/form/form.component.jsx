import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
// import { axiosInstance } from "../../config.js";
import axios from "axios";


function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = async (event) => {
    const toastID = toast.loading("Sending...", {
      position: "bottom-center",
      autoClose: 5000,
    });

    try {
      event.preventDefault();
      if (
        state.email === "" ||
        state.name === "" ||
        state.subject === "" ||
        state.message === ""
      ) {
        toast.update(toastID, {
          render: "Please provide all required fields.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
        return;
      }

      const reply = await axios.post(`/api/send`, { ...state });
      // console.log({
      //   axiosInstanceSERVER_URI: axiosInstance,
      //   nodeEnv: process.env.NODE_ENV,
      // });

      if (reply.data.sent === false) {
        throw "message not sent";
      }
      toast.update(toastID, {
        render: "Your message has been sucessfully sent.",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
      });
      resetForm();
    } catch (error) {
      toast.update(toastID, {
        render: "Something went wrong.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        status: error.status,
      });
    }
  };

  const resetForm = () => {
    setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const fields = [
    {
      type: "text",
      name: "name",
      required: true,
      label: "name",
      errorMessage: "Please write your name.",
      pattern: "^[A-Za-z]+([ A-Za-z]+){1,25}$",
    },
    {
      type: "email",
      name: "email",
      required: true,
      label: "Email",
      autoComplete: "email",
      errorMessage: "Please write a valid email.",
      pattern:
        "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
    },
    {
      type: "text",
      name: "subject",
      required: true,
      label: "subject",
      errorMessage: "Please write the subject of the message.",
    },
    {
      type: "textarea",
      name: "message",
      required: true,
      label: "message",
      errorMessage: "Please type your message.",
    },
  ];

  return (
    <div className="form-container">
      <form id="contact-form" className="form" onSubmit={sendEmail}>
        {fields.map((field, index) => (
          <FormInput
            key={index}
            {...field}
            value={state[field.name]}
            onChange={onInputChange}
          />
        ))}
        <Button className="submit-btn" btnColor="rgb(54, 54, 54)" type="submit">
          Submit
        </Button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Form;
