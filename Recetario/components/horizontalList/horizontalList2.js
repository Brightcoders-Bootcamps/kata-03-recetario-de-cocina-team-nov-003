import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import recentRecipes from './../../RecipesList/recentRecipes.json';

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity>
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.item}>{item.image}</Text>
        <Text style={styles.title}>{item.recipeName}</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const Lista2 = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id, item.image)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recentRecipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal = {true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: 
  {
    height: 500,    
    marginTop: 10,
  },
  item: 
  {
    width: 180,
    height: 180,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: 
  {
    fontSize: 25,
    color: 'white'
  },
});

export default Lista2;