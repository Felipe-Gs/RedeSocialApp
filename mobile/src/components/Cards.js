import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

export default function Cards({
  title,
  description,
  img,
  id,
  user_name,
  deletar,
  idDoPost,
  idDoComentario,
}) {
  const { navigate } = useNavigation();
  const { handlePostComents, postId, setPostId, handleDeleteComents } =
    useAuth();

  return (
    <View
      style={{
        padding: 10,
        marginTop: 20,
        flexDirection: "row",
        // alignItems: "center",
        borderTopWidth: 0.2,
        borderColor: "grey",
      }}
    >
      {/* <Avatar.Icon size={45} icon="folder" /> */}
      <Ionicons
        style={{ marginLeft: 10 }}
        name="ios-person-outline"
        size={30}
        color="black"
      />
      <View style={{ marginLeft: 20, width: "85%" }}>
        <Text style={{ fontWeight: "bold" }}>{user_name}</Text>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Text>{description}</Text>
        <View style={{ width: "100%", height: 100 }}>
          <Image
            style={{ width: "85%", height: "100%" }}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <TouchableOpacity
            onPress={() => (
              navigate("Comentarios", { idDoPost: id }), handlePostComents(id)
            )}
          >
            <Foundation name="comments" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 15 }}
            onPress={() => handleDeleteComents(idDoComentario, idDoPost)}
          >
            <AntDesign name={deletar} size={24} color="black" />
          </TouchableOpacity>
          <Text>{id}</Text>
        </View>
      </View>
    </View>
  );
}
