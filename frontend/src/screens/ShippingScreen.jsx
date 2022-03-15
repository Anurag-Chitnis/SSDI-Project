import React from "react";
import { Link } from "react-router-dom";

// Import React Custom Component
import ProgressBar from "../components/progressBar";
import FormInput from "../components/formInput";

const ShippingScreen = () => {
  return (
    <>
      <div className="container w-11/12 mx-auto">
        <div className="shipping-head mb-10">
          <ProgressBar progress="0%" />
        </div>
        <form>
          <FormInput
            label={{
              labelFor: "fullName",
              message: "Enter Fullname",
            }}
            inputAttributes={{
              type: "text",
              placeholder: "Eg: John Doe",
              name: "fullName",
              id: "fullName",
            }}
          />
          <FormInput
            label={{
              labelFor: "mobile",
              message: "Contact Number",
            }}
            inputAttributes={{
              type: "text",
              placeholder: "Eg: 8456987415",
              name: "mobile",
              id: "mobile",
            }}
          />
          <FormInput
            label={{
              labelFor: "streetOne",
              message: "Street One",
            }}
            inputAttributes={{
              type: "text",
              placeholder: "Eg: flat no, bldg no, colony",
              name: "streetOne",
              id: "streetOne",
            }}
          />
          <FormInput
            label={{
              labelFor: "streetTwo",
              message: "Street Two",
            }}
            inputAttributes={{
              type: "text",
              placeholder: "Eg: Road, Area",
              name: "streetTwo",
              id: "streetTwo",
            }}
          />
          <FormInput
            label={{
              labelFor: "landmark",
              message: "Landmark",
            }}
            inputAttributes={{
              type: "text",
              placeholder: "Eg: Near AIIMS college, Behind Thane multiplex etc",
              name: "landmark",
              id: "landmark",
            }}
          />
          <FormInput
            label={{
              labelFor: "city",
              message: "city",
            }}
            inputAttributes={{
              type: "text",
              placeholder: "Enter City Name",
              name: "city",
              id: "city",
            }}
          />
          <FormInput
            label={{
              labelFor: "state",
              message: "state",
            }}
            inputAttributes={{
              type: "text",
              placeholder: "Enter State Name",
              name: "state",
              id: "state",
            }}
          />
          <FormInput
            label={{
              labelFor: "zipcode",
              message: "zip code",
            }}
            inputAttributes={{
              type: "text",
              placeholder: "6 digits [0-9] PIN Code",
              name: "zipcode",
              id: "zipcode",
            }}
          />
          <button
            type="submit"
            className="bg-black rounded hover:bg-blue-500 px-10 uppercase py-4 text-white text-lg font-medium"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
