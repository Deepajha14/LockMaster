import toast from "react-hot-toast";

/** validate login page email */
export async function userDetailsValidate(values) {
    const errors = userDetailsVerify({}, values);
    return errors;
}

/** validate username */
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);
    return errors ;
}

/** verify username */
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error('Username is required!');
    } else if (values.username.length > 8) {
        error.username = toast.error('Username is too long. Choose a shorter Username!');
    } 

    return error;
}

/** verify email */
function userDetailsVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error('Email address is required!');
    } else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong email address!")
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error('Invalid email address!');
    }

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!values.password) {
        error.password = toast.error('Password is required!');
    } else if (values.password.includes(" ")) {
        error.password = toast.error('Password must not contain spaces (" ")!');
    } else if (values.password.length < 6) {
        error.password = toast.error('Password must be more than 6 characters long!');
    } 
    else if (!specialChars.test(values.password)) {
        error.password = toast.error('Password must have special character!');
    }

    return error;
}