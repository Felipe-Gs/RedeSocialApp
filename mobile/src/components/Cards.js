import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Cards({ title, description, img }) {
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
          <TouchableOpacity>
            <Foundation name="comments" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
