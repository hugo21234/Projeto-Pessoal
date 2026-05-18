import { createContext, useState, useContext } from "react";


  const Auth = createContext(null)

export default function AuthProvider({children}){
    const [auth, setAuth] = useState({
    token: null,
    user: null,
    })
   async function login(email, password) {
        const response = await fetch('http://137.131.204.143:3333/tokens', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const { token, user } = await response.json();
        setAuth({ token, user });
      };


      return (
        <Auth.Provider value={{ auth, login }}>
          {children}
        </Auth.Provider>
      );
    }

    export function useAuth() {
      return useContext(Auth);
    }
