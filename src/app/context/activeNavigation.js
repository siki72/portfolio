const { createContext, useState } = require("react");

const NavigationContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [about, setAbout] = useState(false);
  const [experience, setexperience] = useState(false);
  const [projects, setprojects] = useState(false);
  const [contact, setcontact] = useState(false);

  return <NavigationContext.Provider value={{}}></NavigationContext.Provider>;
};
