import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, resetPage } from "../Action/Actions";
import { Dispatch } from "redux";
import { RootStore } from "../store";
import { View } from "react-native";
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
      <Button onPress={() => changePageButton("prevPage")} title="PREV" />
      <Button onPress={() => changePageButton("resetPage")} title="RESET" />
      <Button onPress={() => changePageButton("nextPage")} title="NEXT" />
    </View>
  );
};

export default Pages;
