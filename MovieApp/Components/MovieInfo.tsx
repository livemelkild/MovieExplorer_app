import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { iMovie } from "./MovieIterator";
import { Card, Button, Icon, Image, Text } from "react-native-elements";

function MovieInfo() {
  const movie = useRoute().params as iMovie;

  const genres = movie.genre
  const items = []

  for (const [index, value] of genres.entries()) {
    if (genres.length === items.length+1){
      items.push(<Text key={index}>{value} </Text>)
    }else{
      items.push(<Text key={index}>{value}, </Text>)
    }

  }

  return (
    <View style={styles.container}>
      <Card>
        <Text style={{ marginBottom: 20 }}>
          <Image
            source={{ uri: movie.img_url }}
            style={{ width: 200, height: 400 }}
          />
        </Text>
        <Text> <Text style={styles.title}>Title: </Text><Text>{movie.title}</Text></Text>
        <Text> <Text style={styles.title}>Genre: </Text><Text>{items}</Text></Text>
        <Text> <Text style={styles.title}>Year: </Text><Text>{movie.year}</Text></Text>
      </Card>
    </View>
  );
}

export default MovieInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#30475e",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold"
  }
});
