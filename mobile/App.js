import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./Routes";

import { Provider as PaperProvider } from "react-native-paper";
import { AuthContextProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <PaperProvider>
          <AppRoutes />
        </PaperProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
