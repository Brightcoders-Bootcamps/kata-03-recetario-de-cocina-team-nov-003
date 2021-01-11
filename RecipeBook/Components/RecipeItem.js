import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Item from './Item';
import ItemSection from './ItemSection';

const RecipeItem = (props) => {
  return (
    <Item>
      <ItemSection>
        <TouchableOpacity style={styles.imbStyle} onPress={props.onGoRecipe}>
          <Image source={{uri: props.recipe.image}} style={styles.imageStyle} />
        </TouchableOpacity>
      </ItemSection>
      <ItemSection>
        <View styles={styles.headerContainer}>
          <Text style={styles.headerText}>{props.recipe.recipeName}</Text>
        </View>
      </ItemSection>
    </Item>
  );
};
const styles = {
  headerContainer: {
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
    marginBottom: 2,
  },
  imbStyle: {height: 150, flex: 1, width: 150, borderRadius: 10},
  imageStyle: {height: 150, width: 150, borderRadius: 10},
};
export default RecipeItem;
