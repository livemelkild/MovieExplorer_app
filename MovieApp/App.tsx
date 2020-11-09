import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container , Text} from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Header from "./Components/Header";
import Movie , { iMovie } from "./Components/Movie"

export default function App() {

  const [items, setItems] = useState<iMovie[]>([]);
    
  useEffect(() => {
  fetch(`http://it2810-09.idi.ntnu.no:4000/api/movie`)
    .then(res => res.json()) //format the resault to json
    .then(res => {
        console.log(res)
        setItems(res.DATA)
        }).catch((e) => console.log(e));
  }, []); 

    const [isReady, setReady] = useState(false);
    useEffect(() => {
        native_base();
        setReady(true);
    }, []);
    const app = !isReady ? (
          <AppLoading />
        ) : (
          <View>
          <Container>
            <Header />
            {items.map((item) => (
              <Movie data={item} key={item._id} />
            ))}
          </Container>
          </View>
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



