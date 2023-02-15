import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useAuth } from "../hooks/useAuth";
import { Button, Card, TextInput } from "react-native-paper";
import api from "../axios/api";

export default function Comentarios({ route }) {
  const idDoPost = route.params.idDoPost;
  const { postId, setPostId, usuario } = useAuth();
  const [dados, setDados] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    const CarregarComentarios = async () => {
      try {
        const response = await api.get(`/comentarios/${idDoPost}`);
        setDados(response.data.comments);
        // console.log(response.data.comments);
      } catch (error) {
        console.log(error);
      }
    };
    CarregarComentarios();
  }, [dados]);

  const FazerComentario = async () => {
    try {
      const response = await api.post("/comments", {
        text,
        user_id: usuario.id,
        post_id: idDoPost,
        user_name: usuario.name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center", fontSize: 20 }}>Comentarios</Text>
      {postId &&
        postId.map((item, index) => {
          return (
            <Cards
              user_name={item.user_name}
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
        <TextInput
          style={{ width: "80%" }}
          value={text}
          onChangeText={(text) => setText(text)}
          label="coment"
        ></TextInput>
        <Button onPress={() => FazerComentario()}>Fazer comentario</Button>
      </View>
      <ScrollView>
        {dados &&
          dados.map((item, index) => {
            return (
              <Cards
                title={item.created_at}
                description={item.text}
                user_name={item.user_name}
              />
            );
          })}
      </ScrollView>
      {/* {console.log("os dados od usuairo", usuario)} */}
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
