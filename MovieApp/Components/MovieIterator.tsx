import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import Movie from "./Movie";

export interface iMovie {
  id: string;
  title: string;
  year: string | number;
  users_rating: string | number;
  img_url: string;
  genre: string;
}

function MovieIterator() {
  const [items, setItems] = useState<iMovie[]>([]);

  useEffect(() => {
    console.log("live");

    fetch(`http://10.24.17.146:4000/api/movie`)
      .then((res) => res.json()) //format the resault to json
      .then((res) => {
        console.log(res);
        setItems(res.DATA);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Movie data={item} />}
        keyExtractor={(item, _) => item.id}
      />
    </View>
  );
}

export default MovieIterator;
