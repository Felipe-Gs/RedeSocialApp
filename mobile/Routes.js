import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import PostsGerais from "./src/pages/PostsGerais";
import CriarPost from "./src/pages/CriarPost";
import Comentarios from "./src/pages/Comentarios";

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "black" },
        transparentCard: true,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="PostsGerais" component={PostsGerais} />
      <Screen name="CriarPost" component={CriarPost} />
      <Screen
        name="Comentarios"
        component={Comentarios}
        initialParams={{ idDoPost: 0 }}
      />
    </Navigator>
  );
}

//rotas
