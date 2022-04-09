import React from 'react'

const AlertMessage = ({message, color}) => {
  return (
    <Fragment>
      {message && (
        <div
          className={`bg-${color}-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-full`}
        >
          <img
            src={
              color === "green"
                ? "/svg/check.svg"
                : color === "yellow"
                ? "/svg/warning.svg"
                : color === "blue"
                ? "/svg/info.svg"
                : color === "red" && "/svg/warning.svg"
            }
            alt="alert icon"
            className="h-5 px-2"
          />
          <span className={`text-${color}-800`}>{message}</span>
        </div>
      )}
    </Fragment>
  )
}

export default AlertMessage;