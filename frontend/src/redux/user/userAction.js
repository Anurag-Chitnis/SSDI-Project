// Default Imports
import axios from "axios";

export const createUser = (userData, navigate) => async (dispatch) => {
  dispatch({
    type: "USER_REGISTER_REQUEST",
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const body = JSON.stringify(userData);

    const { data } = await axios.post("/api/user/create", body, config);
    console.log(data);
    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: data,
    });
    navigate("/login");
  } catch (err) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload: err.message,
    });
  }
};

export const loginUser = (userData, navigate) => async (dispatch) => {
  dispatch({
    type: "USER_LOGIN_REQUEST",
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(userData);

  try {
    const { data } = await axios.post("/api/user/login", body, config);
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    navigate("/");
  } catch (err) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: err.message,
    });
  }
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: "USER_LOGOUT",
  });
  dispatch({
    type: "CLEAR_STATE",
  });
};
