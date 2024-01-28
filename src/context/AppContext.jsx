import { createContext, useState } from "react";

const Context = createContext(null);

const AppContext = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <Context.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context };
export default AppContext;
