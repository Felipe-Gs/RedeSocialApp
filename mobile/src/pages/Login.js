import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { navigate } = useNavigation();
  const {
    handleLogin,
    email,
    password,
    setPassword,
    setEmail,
    error,
    setError,
    usuario,
  } = useAuth();

  useEffect(() => {
    {
      usuario && navigate("PostsGerais");
    }
  }, [usuario]);

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>Social Media</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        label="email"
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        label="password"
      ></TextInput>
      <Button
        onPress={() => handleLogin()}
        mode="contained"
        style={{ width: "100%", height: 50, borderRadius: 10, marginTop: 10 }}
      >
        Entrar
      </Button>
      <Text>{error}</Text>
      <Text style={{ marginTop: 20 }}>Nao tem conta?</Text>
      <TouchableOpacity onPress={() => navigate("Cadastro")}>
        <Text style={{ fontWeight: "bold" }}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textCenter: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    color: "black",
  },
  input: {
    width: "100%",
    marginTop: 10,
  },
});
