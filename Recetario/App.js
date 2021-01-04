import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/searchBar/searchBar";
import Lista from "./components/horizontalList/horizontalList";
import Lista2 from "./components/horizontalList/horizontalList2";

const App = () => (
  <View style = {styles.body}>
    <Header></Header>
    <Text style = {styles.titles}>TRENDING</Text>
    <Lista></Lista>
    <Text style = {styles.titles}>
     RECENT
    </Text>
    <Lista2></Lista2>
  </View>
);

const styles = StyleSheet.create(
  {
    body: 
    {
      backgroundColor: '#212529',
      flex: 1,
      padding: 5
    },
    titles: 
     {
       color: '#ff0a54',
       marginTop: 20, 
       fontSize: 28,  
     }
  }
)

export default App;