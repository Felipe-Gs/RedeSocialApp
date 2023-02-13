import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { navigate } = useNavigation();
  const { teste } = useAuth();

  return (
    <View style={{ marginTop: 100 }}>
      <Text>Home</Text>
      <Button mode="outlined" onPress={teste}>
        Ir para login
      </Button>
    </View>
  );
}

// pagina Home
