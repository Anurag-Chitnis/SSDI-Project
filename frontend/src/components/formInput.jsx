// Default Import
import React from "react";

const FormInput = ({ label, inputAttributes, onChange, value }) => {
  const { labelFor, message } = label;
  const { type, name, id, placeholder } = inputAttributes;

  return (
    <div className="mb-6">
      <label
        htmlFor={labelFor}
        className="block mb-2 text-xl uppercase font-medium text-gray-600"
      >
        {message}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value && value}
        className="w-full text-lg px-4 py-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
      />
    </div>
  );
};

export default FormInput;
