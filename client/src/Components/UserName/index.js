import React, { useState } from 'react'
import "./style.css";
import { FaUserCircle } from "react-icons/fa";
import convertToBase64 from '../../helper/convert';
import { useFormik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { usernameValidate } from "../../helper/validate";


export default function UserName() {
    // const [showDashboard, setShowDashboard] = useState(false);
    // const [selectedImage, setSelectedImage] = useState(null);
    const [file, setFile] = useState();

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onloadend = () => {
    //         setSelectedImage(reader.result);
    //       };
    //       reader.readAsDataURL(file);
    //     }
    //   };

    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }

    const formik = useFormik({
        initialValues: {
          username: '',
        },
        validate: usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, {profile : file || ''})
        //   alert(JSON.stringify(values, null, 2));
          console.log(values);
        },
      });

  return (
    <>
    <Toaster position = 'top-center' reverseOrder = {false}></Toaster>
    {(
        
        <form className="user-form email-form" onSubmit={formik.handleSubmit}>
            <div className="user-avatar-container">
                <label htmlFor="avatar" className="user-avatar">
                    {file ? (
                    <img
                        src={file}
                        alt="User Avatar"
                        className="user-avatar-image"
                    />
                    ) : (
                    <FaUserCircle className="user-avatar-icon" />
                    )}
                    <input
                    type="file"
                    id="avatar"
                    className="user-avatar-input"
                    name="user-avatar"
                    onChange = { onUpload }
                    />
                </label>
            </div>
            <input
                {...formik.getFieldProps('username')}
                placeholder="Username"
                className="form-input-box"
                type="text"
            />
            <button className="continue-btn" type="submit">
                Create Account
            </button>
        </form>
    )}
    </>
  )
}
