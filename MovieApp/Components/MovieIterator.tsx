import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import Movie from "./Movie";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { RootStore } from "../Store";
import { searchInput } from "../Action/Actions";
import { Header } from "react-native-elements";

export interface iMovie {
  id: string;
  title: string;
  year: string | number;
  users_rating: string | number;
  img_url: string;
  genre: string;
}

function MovieIterator() {
  const searchState = useSelector((state: RootStore) => state.searchReducer.search);

  const [search, setSearch] = useState(searchState);

  searchInput(search);

  const filterSingle = useSelector((state: RootStore) => state.filterReducer.filterby);
  const filter = [filterSingle]

  const order = useSelector((state: RootStore) => state.sortReducer.order);

  const [items, setItems] = useState<iMovie[]>([]);

  useEffect(() => {
    console.log("live");

    fetch(`http://10.24.17.146:4000/api/movie?search=${searchState}&filter=${filter}&order=${order}`)
      .then((res) => res.json()) //format the resault to json
      .then((res) => {
        console.log(res);
        setItems(res.DATA);
      })
      .catch((e) => console.log(e));
  }, [searchState, filterSingle, order]);

  return (
    <View>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Movie Explorer", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <SearchBar />
      <FlatList
        data={items}
        renderItem={({ item }) => <Movie data={item} />}
        keyExtractor={(item, _) => item.id}
      />
    </View>
  );
}

export default MovieIterator;
