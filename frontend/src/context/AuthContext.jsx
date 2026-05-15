import { createContext, useState } from "react";

  const Auth = createContext(null)

export default function AuthProvider({children}){
    const [auth, setAuth] = useState({
    token: null,
    user: null,
      });

      return (
        <Auth.Provider value={{ auth, setAuth }}>
          {children}
        </Auth.Provider>
      );
}
