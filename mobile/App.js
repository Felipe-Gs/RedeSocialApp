import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./Routes";

import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <AppRoutes />
      </PaperProvider>
    </NavigationContainer>
  );
}
