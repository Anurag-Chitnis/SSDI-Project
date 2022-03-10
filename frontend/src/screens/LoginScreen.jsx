// Default Imports
import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Import Components
import FormInput from "../components/formInput";

// Import Redux actions
import { loginUser } from "../redux/user/userAction";

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }, navigate));
  };

  return (
    <Fragment>
      <div className="flex items-center min-h-screen bg-white">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700">
                SIGN IN
              </h1>
              <p className="text-gray-500 text-xl">
                Sign in to access your account
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={handleSubmit}>
                <FormInput
                  label={{ labelFor: "email", message: "Email Address" }}
                  inputAttributes={{
                    type: "email",
                    placeholder: "your@company.com",
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
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full hover:bg-blue-600 text-xl px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-lg text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="text-blue-500 hover:text-blue-400 text-lg focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Sign up
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

export default LoginScreen;
