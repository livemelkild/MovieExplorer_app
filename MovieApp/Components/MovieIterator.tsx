import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import Movie from "./Movie";

export interface iMovie {
  id: string | number;
  title: string;
  year: string | number;
  users_rating: string | number;
  img_url: string;
  genre: string;
}

function MovieIterator(Props: iMovie) {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/api/movie`)
      .then((res) => res.json()) //format the resault to json
      .then((res) => {
        console.log(res);
        setItems(res.DATA);
      });
  }, []);

  return (
    <View>
      {items?.map((item: any) => (
        <View key={item._id}>
          <Movie
            id={item._id}
            title={item.title}
            year={item.year}
            users_rating={item.user_rating}
            img_url={item.img_url}
            genre={item.genre}
          />
        </View>
      ))}
    </View>
  );
}

export default MovieIterator;
