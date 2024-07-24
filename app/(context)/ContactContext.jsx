import { createContext, useState } from "react";

export const ContactContext = createContext(null);
export function Context({ children }) {
  const [query, setQuery] = useState();
  
  return (
    <ContactContext.Provider value={{ setQuery , query }}>
      {children}
    </ContactContext.Provider>
  );
}
