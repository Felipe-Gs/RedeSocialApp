import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useAuth } from "../hooks/useAuth";
import { Button, Card, TextInput } from "react-native-paper";
import api from "../axios/api";

export default function Comentarios() {
  const { postId, setPostId } = useAuth();
  const [dados, setDados] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    const CarregarComentarios = async () => {
      try {
        const response = await api.get(`/comentarios/${9}`);
        setDados(response.data.comments);
        console.log(response.data.comments);
      } catch (error) {
        console.log(error);
      }
    };
    CarregarComentarios();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center", fontSize: 20 }}>Comentarios</Text>
      {postId &&
        postId.map((item, index) => {
          return (
            <Cards
              key={index}
              title={item.title}
              description={item.description}
              img={item.image}
              id={item.id}
            />
          );
        })}
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextInput style={{ width: "80%" }} label="coment"></TextInput>
        <Button>Fazer comentario</Button>
      </View>
      <ScrollView>
        {dados &&
          dados.map((item, index) => {
            return <Cards title={item.created_at} description={item.text} />;
          })}
      </ScrollView>
      {/* {console.log("esse é a valriavel post id", { postId })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
