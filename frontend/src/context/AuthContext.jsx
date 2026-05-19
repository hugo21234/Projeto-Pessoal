import { createContext, useState, useContext } from "react";


  const Auth = createContext(null)

export default function AuthProvider({children}){
    const [auth, setAuth] = useState({
    token: null,
    user: null,
    })
   async function login(email, password) {
       try{
        const response = await fetch('http://137.131.204.143:3333/tokens', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
          throw new Error('Login failed');
        }else{
        const { token, user } = await response.json();

        setAuth({ token, user });
        }

      } catch (error) {
        console.log('Error during login:', error);
        throw new Error('Login failed');
      }
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
