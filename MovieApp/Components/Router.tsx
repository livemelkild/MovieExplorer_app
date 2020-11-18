import React from "react";
import MovieIterator from "./MovieIterator";
import Pages from "./Pages";
import SearchBaren from "./SearchBaren";
import { View, StyleSheet, Text } from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "./Footer";

function Router() {
  return (
    <ScrollView style={styles.container}>
      <Text></Text>
      <SearchBaren />
      <Text></Text>
      <Text></Text>
      <MovieIterator />
      <Text></Text>
      <Text></Text>
      <Pages />
      <Footer />
    </ScrollView>
  );
}

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#30475e",
  },
});
