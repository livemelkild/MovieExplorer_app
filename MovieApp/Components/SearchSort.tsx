import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, Button } from "react-native";

import { yearAsk, yearDesc, yearReset, filterComedy, filterDrama, filterHorror, filterRomance, filterThriller  } from "../Action/Actions";

export const SearchSort = () => {
    const dispatch: Dispatch<any> = useDispatch();
    //ønsker å kalle på en funskjon som endrer state
    const callSortFunction = (action:any) => dispatch(action())

          //ønsker å kalle på en funskjon som endrer state
    const [options, setOptions] = useState(false);

    const callFilterFunction = (action:any) => dispatch(action())

 
    return (
            <View >
                    <View>
                    <Text>Sort</Text>
                        <Button title="New - Old" onPress={() => callSortFunction(yearAsk)}></Button>
                        <Button title="Old - New" onPress={() => callSortFunction(yearDesc)}></Button>
                        <Button title="Unorderd" onPress={() => callSortFunction(yearReset)}></Button>

                        <Text>Filter</Text>
                        <Button title="Comedy" onPress={() => callFilterFunction(filterComedy)}></Button>
                        <Button title="Drama" onPress={() => callFilterFunction(filterDrama)}></Button>
                        <Button title="Horror" onPress={() => callFilterFunction(filterHorror)}></Button>
                        <Button title="Romance" onPress={() => callFilterFunction(filterRomance)}></Button>
                        <Button title="Thriller" onPress={() => callFilterFunction(filterThriller)}></Button>
                    </View>
                
        </View>
        )
    }

export default SearchSort; 
