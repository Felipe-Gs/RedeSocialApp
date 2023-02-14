import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

export default function Cadastro() {
  const {
    name,
    setName,
    error,
    email,
    setEmail,
    password,
    setPassword,
    handleCadastro,
  } = useAuth();
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>Criar conta</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
        label="Nome"
      ></TextInput>

      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        label="Email"
      ></TextInput>

      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        style={styles.input}
        label="Password"
      ></TextInput>
      <Button
        mode="contained"
        style={{ width: "100%", height: 50, borderRadius: 10, marginTop: 10 }}
        onPress={() => handleCadastro()}
      >
        Criar
      </Button>
      <Text>{error}</Text>
      <Text style={{ marginTop: 20 }}>Já tem conta?</Text>
      <TouchableOpacity onPress={() => navigate("Login")}>
        <Text style={{ fontWeight: "bold" }}>Login</Text>
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
