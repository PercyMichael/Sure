import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./components/Navigation";

import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
