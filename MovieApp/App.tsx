import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/api/movie`)
      .then(res => res.json()) //format the resault to json
      .then(res => {
          console.log(res)
          setItems(res.DATA)
          });},[]);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {items?.map((item:any) => (
          <View key={item._id}>
            film tittel: {item.title}
          </View>
      ))
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
