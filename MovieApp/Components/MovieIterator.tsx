import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import { RootStore } from "../Store";
import { searchInput } from "../Action/Actions";

export interface iMovie {
  id: string;
  title: string;
  year: string | number;
  users_rating: string | number;
  img_url: string;
  genre: string;
}

function MovieIterator() {
  const searchState = useSelector(
    (state: RootStore) => state.searchReducer.search
  );
  const [search, setSearch] = useState(searchState);
  const page = useSelector((state: RootStore) => state.pageReducer.page);

  searchInput(search);

  const [items, setItems] = useState<iMovie[]>([]);

  useEffect(() => {
    console.log("live");

    fetch(
      `http://10.24.17.146:4000/api/movie?search=${searchState}&page=${page}`
    )
      .then((res) => res.json()) //format the resault to json
      .then((res) => {
        console.log(res);
        setItems(res.DATA);
      })
      .catch((e) => console.log(e));
  }, [searchState, page]);

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Movie data={item} />}
        keyExtractor={(item, _) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default MovieIterator;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
