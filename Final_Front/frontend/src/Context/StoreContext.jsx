
import { createContext } from "react";
import { Rings_List } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const contextValue = {
    Rings_list: Rings_List,
  };

  console.log("StoreContext initialized:", contextValue);

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
