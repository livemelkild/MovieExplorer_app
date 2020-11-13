import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import { searchInput } from "../Action/Actions";
import { RootStore } from "../store";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { SearchBar, Button, Overlay, ThemeProvider } from "react-native-elements";
import SearchSort from "./SearchSort";


export const SearchBaren = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // Annen mulig løsning:
  const searchState = useSelector(
    (state: RootStore) => state.searchReducer.search
  );
  const [search, setSearch] = useState(searchState);
  const handleSubmit = () => dispatch(searchInput(search));

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <SearchBar
        placeholder="Explore.."
        onChangeText={(text) => setSearch(text)}
        value={search}
        containerStyle={styles.searchField}
        inputContainerStyle={styles.input} 
      />
      <Text></Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Button buttonStyle={styles.buttonColor} style={{padding: 20}} onPress={handleSubmit} title="Search" />
      </View>
      {search === "" ? (
        <View />
      ) : (
        <View>
        <Button buttonStyle={styles.buttonColor} title="Show filter" onPress={toggleOverlay}></Button>

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <SearchSort/>
        </Overlay>
        {/*}
        {visible === true ? 
        

        <Modal 
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        >
            <SearchSort/>
            <Button title="Hide filter" onPress={toggleOverlay}></Button>
        </Modal>
        
        :
        <View />
          }
          */}
        </View>
        )}
    </View>
  );
};

export default SearchBaren;

const styles = StyleSheet.create({
  searchField: {
    backgroundColor: "#30475e"
  },
  input: {
    backgroundColor: "#ececec"
  },
  buttonColor: {
    backgroundColor: "#222831",
    borderColor: "#c1a57b",
    borderWidth: 2 
}
});
