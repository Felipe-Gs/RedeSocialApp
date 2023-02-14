import { View, Text } from "react-native";
import React, { createContext, useState } from "react";
import api from "../axios/api";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  // funções login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState();
  const [error, setError] = useState("");
  const handleLogin = async () => {
    try {
      if (email === "" || password === "") {
        setError("Insira os dados corretamente");
        return;
      }
      const response = await api.post("/login", {
        email,
        password,
      });
      setUsuario(response.data.usuario);
      console.log(usuario);
    } catch (error) {
      console.log(error);
    }
  };
  // funcoes login

  // funcoes cadastro
  const [name, setName] = useState("");
  const handleCadastro = async () => {
    try {
      if (email === "" || password === "" || name === "") {
        setError("Insira os dados corretamente");
        return;
      }
      const response = await api.post("/cadastrar", {
        name,
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        usuario,
        email,
        password,
        error,
        setError,
        setPassword,
        setEmail,
        name,
        setName,
        handleCadastro,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
