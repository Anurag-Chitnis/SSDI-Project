import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Import Components
import FormInput from "../components/formInput";

// Import Redux Action
import { createUser } from "../redux/user/userAction";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmpassword } = userData;

    if (password !== confirmpassword) {
      alert("Passwords do not match");
    } else {
      dispatch(createUser({ firstName, lastName, email, password }, navigate));
    }
  };

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div className="flex items-center min-h-screen bg-white">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700">
                SIGN UP
              </h1>
              <p className="text-gray-500 text-xl">
                Sign up to access your account
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={handleSubmit}>
                <FormInput
                  label={{ labelFor: "firstName", message: "Enter First Name" }}
                  inputAttributes={{
                    type: "firstName",
                    placeholder: "Your first name",
                    name: "firstName",
                    id: "firstName",
                  }}
                  onChange={handleChange}
                />
                <FormInput
                  label={{ labelFor: "lastName", message: "Enter Last Name" }}
                  inputAttributes={{
                    type: "lastName",
                    placeholder: "Your last name",
                    name: "lastName",
                    id: "lastName",
                  }}
                  onChange={handleChange}
                />
                <FormInput
                  label={{ labelFor: "email", message: "Enter Email" }}
                  inputAttributes={{
                    type: "email",
                    placeholder: "johndoe@gmail.com",
                    name: "email",
                    id: "email",
                  }}
                  onChange={handleChange}
                />
                <FormInput
                  label={{ labelFor: "password", message: "Enter Password" }}
                  inputAttributes={{
                    type: "password",
                    placeholder: "Your password",
                    name: "password",
                    id: "password",
                  }}
                  onChange={handleChange}
                />
                <FormInput
                  label={{
                    labelFor: "confirmpassword",
                    message: "Confirm Password",
                  }}
                  inputAttributes={{
                    type: "password",
                    placeholder: "Confirm password",
                    name: "confirmpassword",
                    id: "confirmpassword",
                  }}
                  onChange={handleChange}
                />
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full hover:bg-blue-600 text-xl px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Sign up
                  </button>
                </div>
                <p className="text-lg text-center text-gray-400">
                  Already existing user ?{" "}
                  <Link
                    to="/login"
                    className="text-blue-500 hover:text-blue-400 text-lg focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterScreen;
