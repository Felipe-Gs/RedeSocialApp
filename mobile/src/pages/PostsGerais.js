import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  IconButton,
  Searchbar,
  MD3Colors,
} from "react-native-paper";
import Cards from "../components/Cards";
import api from "../axios/api";

import { AntDesign } from "@expo/vector-icons";

export default function PostsGerais() {
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState("");

  const fiterdados = posts
    ? posts.filter((item) =>
        item.description.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleDescription = async () => {
      try {
        const response = await api.get("/visualizarPost");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleDescription();
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Avatar.Icon size={24} icon="folder" />
        <Searchbar
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={{ width: "80%", borderRadius: 20, height: 40 }}
          placeholder="Search Post"
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        data={fiterdados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ width: "100%" }}>
            <Cards
              title={item.title}
              description={item.description}
              img={item.image}
            />
          </View>
        )}
      />
      <IconButton
        style={{ position: "absolute", end: 40, bottom: 20 }}
        icon="plus"
        iconColor="black"
        size={30}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}
