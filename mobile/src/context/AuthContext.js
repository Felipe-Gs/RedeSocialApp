import { View, Text } from "react-native";
import React, { createContext } from "react";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const teste = () => {
    console.log("ola mundo!");
  };

  return (
    <AuthContext.Provider
      value={{
        teste,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
