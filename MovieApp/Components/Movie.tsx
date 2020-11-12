import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Card, Button, Icon, Image } from "react-native-elements";
import { iMovie } from "./MovieIterator";
import { useNavigation } from "@react-navigation/native";

type MovieProps = {
  data: iMovie;
};

const Movie = ({ data }: MovieProps) => {
  const navigation = useNavigation();

  return (
    <Card>
      <Card.Title>{data.title}</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 20 }}>
        <Image
          source={{ uri: data.img_url }}
          style={{ width: 200, height: 400 }}
        />
      </Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="More info"
        onPress={() => navigation.navigate("MovieInfo", data)}
      />
    </Card>
  );
};

export default Movie;
