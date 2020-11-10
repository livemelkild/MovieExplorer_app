import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieIterator from "./Components/MovieIterator";
import SearchBar from "./Components/SearchBar";
import { Provider } from "react-redux"
import Store from "./Store"
import { Header } from 'react-native-elements';


export default function App() {
  return (
    <Provider store={Store}>
      <Header 
        centerComponent={{text: "MovieExplorer"}}
      />

      <SearchBar/>
      <MovieIterator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
