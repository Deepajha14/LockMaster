import React, { useState } from "react";
import "./style.css";
import { useFormik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { userDetailsValidate } from "../../helper/validate";
import UserName from "../UserName";


export default function Email() {
  const [showUsernameForm, setShowUsernameForm] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: userDetailsValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      setShowUsernameForm(true);
    },
  });

  return (
    <>
    <Toaster position = 'top-center' reverseOrder = {false}></Toaster>
    {!showUsernameForm && (
      <form className="email-form" onSubmit={formik.handleSubmit}>
        <input
          {...formik.getFieldProps('email')}
          name="email"
          placeholder="Email"
          className="form-input-box"
          type="email"
        ></input>
        <input
          {...formik.getFieldProps('password')}
          name="password"
          placeholder="Password"
          className="form-input-box"
          type="password"
        ></input>
        <button className="continue-btn" type="submit">
          Continue with Email
        </button>
      </form>
    )}

    {showUsernameForm && <UserName/>}
    </>
  );
}
