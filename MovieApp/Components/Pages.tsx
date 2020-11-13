import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, resetPage } from "../Action/Actions";
import { Dispatch } from "redux";
import { RootStore } from "../store";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

interface iProps {
  page: number;
  prevPage: string;
  nextPage: string;
  resetPage: string;
  changePage(page: number): number;
}

const Pages = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const pageState = useSelector((state: RootStore) => state.pageReducer.page);

  const changePageButton = (action: string) => {
    //pageState er page tallet gjennom pageReducer
    if ((pageState === 0 && action === "prevPage") || action === "resetPage") {
      dispatch(resetPage());
    } else if (action === "prevPage") {
      dispatch(prevPage());
    } else if (action === "nextPage") {
      dispatch(nextPage());
    }
  };
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Button buttonStyle={styles.buttonColor} onPress={() => changePageButton("prevPage")} title="PREV" />
      <Button buttonStyle={styles.buttonColor} onPress={() => changePageButton("resetPage")} title="RESET" />
      <Button buttonStyle={styles.buttonColor} onPress={() => changePageButton("nextPage")} title="NEXT" />
    </View>
  );
};

export default Pages;

const styles = StyleSheet.create({
  buttonColor: {
      backgroundColor: "#222831",
      borderColor: "#c1a57b",
      borderWidth: 2 
  }
})