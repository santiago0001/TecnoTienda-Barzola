import { createContext, useState } from "react";

export default  ({ children }) => {
  const [category, setCategory] = useState(1);
  return (
    <LoadingContext.Provider value={[category, setCategory]}>
      {children}
    </LoadingContext.Provider>
  );
};

export const LoadingContext = createContext();
