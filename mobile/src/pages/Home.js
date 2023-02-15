import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

import Login from "./Login";

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>Social Media</Text>

      <Button
        style={{
          width: "100%",
          height: 50,
          borderRadius: 10,
        }}
        mode="contained"
        onPress={() => navigate("Cadastro")}
      >
        Criar nova conta
      </Button>
      <Button
        onPress={() => navigate("Login")}
        style={{ marginTop: 20, width: "100%" }}
      >
        Entrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  textCenter: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    color: "black",
  },
});
