import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieIterator from "./Components/MovieIterator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieInfo from "./Components/MovieInfo";
import Router from "./Components/Router";

type RootStackParaList = {
  Movies: undefined;
  MovieInfo: undefined;
};
import SearchBar from "./Components/SearchBaren";
import { Provider } from "react-redux";
import Store from "./Store";
import { Header } from "react-native-elements";

export default function App() {
  const Stack = createStackNavigator<RootStackParaList>();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={Router} />
          <Stack.Screen name="MovieInfo" component={MovieInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
