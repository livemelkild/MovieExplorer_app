import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import {searchInput} from "../Action/Actions";
import { RootStore } from "../store";
import { View, TextInput, Button } from "react-native";


export const SearchBar = () => {

    const dispatch: Dispatch<any> = useDispatch();
      // Annen mulig løsning: 
      const searchState = useSelector((state: RootStore) => state.searchReducer.search);
      const [search, setSearch] = useState(searchState);

      const handleSubmit = () => dispatch(searchInput(search));
return (
    <View>
        <TextInput 
            onChangeText={text => setSearch(text)}
        />
        <Button 
            onPress={handleSubmit}
            title="Search"
        />

        {/*legg inn filter-logikk*/}

       
    </View>
    )
}

export default SearchBar;