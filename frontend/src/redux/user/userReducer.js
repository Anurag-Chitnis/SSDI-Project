const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
  userData: null,
};

export const UserReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "USER_LOGIN_REQUEST":
    case "USER_REGISTER_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        userData: payload,
      };
    case "USER_LOGIN_FAIL":
    case "USER_REGISTER_FAIL":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
