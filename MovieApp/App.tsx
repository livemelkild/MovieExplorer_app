import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container , Text} from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Header from "./Components/Header";
import Card from "./Components/Card"

export default function App() {
    const [isReady, setReady] = useState(false);
    useEffect(() => {
        native_base();
        setReady(true);
    });
    const app = !isReady ? (
          <AppLoading />
        ) : (
          <Container>
            <Header />
            <Card />
          </Container>
    );
    return app;
}

async function native_base() {
await Font.loadAsync({
  Roboto: require("native-base/Fonts/Roboto.ttf"),
  Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  ...Ionicons.font,
});
}



