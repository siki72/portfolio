export const INTIAL_STATE = {
  success: false,
  loading: false,
  error: false,
  mailError: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "SEND_START":
      return {
        ...state,
        loading: true,
      };
      break;
    case "WRONG_ENTRIES":
      return {
        ...state,
        loading: false,
        error: true,
      };
      break;

    case "SEND_SUCCES":
      return {
        ...state,
        success: true,
        loading: false,
      };
      break;
    case "EMAIL_ERROR":
      return {
        ...state,
        mailError: true,
        loading: false,
      };

    default:
      return state;
      break;
  }
};
