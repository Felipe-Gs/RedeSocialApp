import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import api from "../axios/api";

export default function CriarPost() {
  const { navigate } = useNavigation();
  const { usuario } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [user_id, setUserId] = useState(usuario.id);

  const handlePosts = async () => {
    try {
      const response = await api.post("/posts", {
        title,
        description,
        image,
        user_id,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: "bold", alignSelf: "center" }}>
        Criar Post
      </Text>

      <View style={styles.viewPost}>
        <Ionicons
          style={{ marginLeft: 10 }}
          name="ios-person-outline"
          size={30}
          color="black"
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "500" }}>{usuario.name}</Text>
          <Text style={{ fontWeight: "300" }}>@{usuario.email}</Text>
        </View>
      </View>
      <View style={{ width: "100%", padding: 20 }}>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={{ marginTop: 10, backgroundColor: "none" }}
          label="Titulo"
        ></TextInput>
        <TextInput
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={{ marginTop: 10, backgroundColor: "none" }}
          label="Descrição"
        ></TextInput>
        <TextInput
          value={image}
          onChangeText={(text) => setImage(text)}
          style={{ marginTop: 10, backgroundColor: "none" }}
          label="Image"
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Button
          onPress={() => handlePosts()}
          style={{ width: "50%" }}
          mode="contained"
        >
          Enviar
        </Button>
        <Button
          onPress={() => navigate("PostsGerais")}
          style={{ width: "50%" }}
        >
          Voltar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  viewPost: {
    flexDirection: "row",
    marginTop: 20,
    borderTopWidth: 0.2,
    padding: 20,
  },
});
