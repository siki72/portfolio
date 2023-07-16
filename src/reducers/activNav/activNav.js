export const INITIAL_STATE = {
  about: false,
  experience: false,
  projects: false,
  contact: false,
};

export const activeNvigationReucer = (state, action) => {
  switch (action.type) {
    case "ABOUT_ACTIVE":
      return {
        ...state,
        about: true,
      };
      break;
    case "EXPERIENCE_ACTIVE":
      return {
        ...state,
        experience: true,
      };
      break;
    case "PROJECTS_ACTIVE":
      return {
        ...state,
        projects: true,
      };
      break;
    case "CONTACT_ACTIVE":
      return {
        ...state,
        contact: true,
      };
      break;

    default:
      return state;
      break;
  }
};
