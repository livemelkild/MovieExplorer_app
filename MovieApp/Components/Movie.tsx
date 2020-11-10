import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Card, Button, Icon, Image } from "react-native-elements";
import { iMovie } from "./MovieIterator";

type MovieProps = {
  data: iMovie;
};

const Movie = ({ data }: MovieProps) => {
  return (
    <Card>
      <Card.Title>{data.title}</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 20 }}></Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="More info"
      />
    </Card>
  );
};

export default Movie;
