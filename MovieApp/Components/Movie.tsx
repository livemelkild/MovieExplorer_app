import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button, Icon, Image } from "react-native-elements";
import { iMovie } from "./MovieIterator";
import { useNavigation } from "@react-navigation/native";

type MovieProps = {
  data: iMovie;
};

const Movie = ({ data }: MovieProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>{data.title}</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 20 }}>
          <Image
            source={{ uri: data.img_url }}
            style={{ width: 200, height: 300 }}
          />
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: "#222831",
            borderColor: "#c1a57b",
            borderWidth: 2 
          }}
          title="More info"
          onPress={() => navigation.navigate("MovieInfo", data)}
        />
      </Card>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
