import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import { searchInput } from "../Action/Actions";
import { RootStore } from "../store";
import { View, TextInput, Button } from "react-native";
import { SearchBar } from "react-native-elements";

export const SearchBaren = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // Annen mulig løsning:
  const searchState = useSelector(
    (state: RootStore) => state.searchReducer.search
  );
  const [search, setSearch] = useState(searchState);

  const handleSubmit = () => dispatch(searchInput(search));
  return (
    <View>
      <SearchBar
        placeholder="Explore.."
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      {/*<TextInput onChangeText={(text) => setSearch(text)} /> */}
      <Button onPress={handleSubmit} title="Search" />
      {/*legg inn filter-logikk*/}
    </View>
  );
};

export default SearchBaren;
