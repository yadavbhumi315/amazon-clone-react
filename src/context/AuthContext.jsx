import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();



export function AuthProvider({ children }) {


  const [user, setUser] = useState(null);




  // Load user when app starts

  useEffect(() => {


    const savedUser =
      JSON.parse(
        localStorage.getItem("user")
      );


    if(savedUser){

      setUser(savedUser);

    }


  }, []);








  // Login function

  const login = (userData) => {


    setUser(userData);


    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );


  };







  // Logout function

  const logout = () => {


    setUser(null);


    localStorage.removeItem(
      "user"
    );


  };







  return (

    <AuthContext.Provider

      value={{
        user,
        login,
        logout
      }}

    >

      {children}

    </AuthContext.Provider>

  );


}








// Custom hook

export function useAuth(){

  return useContext(AuthContext);

}