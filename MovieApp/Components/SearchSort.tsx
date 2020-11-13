import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, StyleSheet } from "react-native";
import {Button, Text}from "react-native-elements";
import { theme } from "./Styles/Button"


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
                    <View style={styles.container}>
                    <Text h4>Sort</Text>
                    </View>

                    <View style={styles.container1}>
                        <Button buttonStyle={styles.buttonColor} title="New - Old" onPress={() => callSortFunction(yearAsk)}/>
                        <Button buttonStyle={styles.buttonColor} title="Old - New" onPress={() => callSortFunction(yearDesc)}></Button>
                        <Button buttonStyle={styles.buttonColor} title="Unorderd" onPress={() => callSortFunction(yearReset)}></Button>
                    </View>
                    <View style={styles.container}>
                        <Text h4>Filter</Text>
                    </View>
                    <View>
                        <Button buttonStyle={styles.buttonColor} title="Comedy" onPress={() => callFilterFunction(filterComedy)}></Button>
                        <Button buttonStyle={styles.buttonColor} title="Drama" onPress={() => callFilterFunction(filterDrama)}></Button>
                        <Button buttonStyle={styles.buttonColor} title="Horror" onPress={() => callFilterFunction(filterHorror)}></Button>
                        <Button buttonStyle={styles.buttonColor} title="Romance" onPress={() => callFilterFunction(filterRomance)}></Button>
                        <Button buttonStyle={styles.buttonColor} title="Thriller" onPress={() => callFilterFunction(filterThriller)}></Button>
                    </View>
                
            </View>

        )
    }

export default SearchSort; 

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
    },
    container1:{
        flexDirection: "row",
    },
    buttonColor: {
        backgroundColor: "#222831",
        borderColor: "#c1a57b",
        borderWidth: 2 
    }
})