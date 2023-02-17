import { View, Text } from "react-native";
import React, { createContext, useState, useEffect } from "react";
import api from "../axios/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

//AsyncStorage
export const AuthContext = createContext({});
const KEY = "AUTH_KEY";

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
      await AsyncStorage.setItem(KEY, JSON.stringify(response.data.usuario));
      // console.log(usuario);
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

  const [postId, setPostId] = useState();

  const handlePostComents = async (id) => {
    try {
      const response = await api.get(`/visualizarPost/${id}`);
      setPostId(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComents = async (id, post_id) => {
    try {
      const response = await api.delete(`/deletarComentario/${post_id}/${id}`);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  //verifica se ja fez o login alguma vez
  useEffect(() => {
    async function checkAuth() {
      const storedData = await AsyncStorage.getItem(KEY);
      if (storedData) {
        setUsuario(JSON.parse(storedData));
      }
    }
    // console.log(usuario);
    checkAuth();
  }, []);

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
        postId,
        setPostId,
        handlePostComents,
        handleDeleteComents,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
