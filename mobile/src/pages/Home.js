import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <View style={{ marginTop: 100 }}>
      <Text>Home</Text>
      <Button mode="outlined" onPress={() => navigate("Login")}>
        Ir para login
      </Button>
    </View>
  );
}
