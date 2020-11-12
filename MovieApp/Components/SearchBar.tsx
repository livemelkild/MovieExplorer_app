import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import { searchInput } from "../Action/Actions";
import { RootStore } from "../store";
import { View, TextInput, Button } from "react-native";
import SearchSort from "./SearchSort";
import {Overlay} from "react-native-elements";

export const SearchBar = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const searchState = useSelector(
    (state: RootStore) => state.searchReducer.search
  );
  const [search, setSearch] = useState(searchState);
  const handleSubmit = () => dispatch(searchInput(search));

  const [visible, setVisible] = useState(false)

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  //må fikse web-view
  return (
    <View>
      <TextInput onChangeText={(text) => setSearch(text)} />
      <Button onPress={handleSubmit} title="Search" />
      {/*legg inn filter-logikk*/}
      {search === "" ?
        <View />
      :
      <Button title="Show filter" onPress={toggleOverlay}></Button>
    }
      <Overlay 
          isVisible={visible} 
          onBackdropPress={toggleOverlay}>

          <SearchSort />
      
      </Overlay>

  </View>
  );
};

export default SearchBar;
