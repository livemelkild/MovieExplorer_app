import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { iMovie } from "./MovieIterator";
import { Card, Button, Icon, Image } from "react-native-elements";

function MovieInfo() {
  const movie = useRoute().params as iMovie;

  return (
    <View style={styles.container}>
      <Card>
        <Text style={{ marginBottom: 20 }}>
          <Image
            source={{ uri: movie.img_url }}
            style={{ width: 200, height: 400 }}
          />
        </Text>
        <Text>Title: {movie.title}</Text>
        <Text></Text>
        <Text>Genre: {movie.genre}</Text>
        <Text></Text>
        <Text>Year: {movie.year}</Text>
      </Card>
    </View>
  );
}

export default MovieInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
