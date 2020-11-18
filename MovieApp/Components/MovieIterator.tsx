import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
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

  const filterSingle = useSelector(
    (state: RootStore) => state.filterReducer.filterby
  );
  const filter = [filterSingle];

  const order = useSelector((state: RootStore) => state.sortReducer.order);

  const [items, setItems] = useState<iMovie[]>([]);

  //husk å endre IP-adresse
  useEffect(() => {
    fetch(
      `http://it2810-09.idi.ntnu.no:4000/api/movie?search=${searchState}&filter=${filter}&order=${order}&page=${page}`
    )
      .then((res) => res.json()) //format the resault to json
      .then((res) => {
        console.log(res);
        setItems(res.DATA);
      })
      .catch((e) => console.log(e));
  }, [searchState, filterSingle, order, page]);

  return (
    <View style={styles.container}>
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
    // flex: 1,
    backgroundColor: "#30475e",
    //alignItems: "center", - ser fint ut på web, men forsvinner på mobil

    // width: Dimensions.get("window").width / 2.6,
    // height: Dimensions.get("window").width / 2.6
  },
});
