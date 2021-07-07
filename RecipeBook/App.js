import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import SearchBar from './Components/SearchBar';
import TrenList from './Components/TrenList';
import RecipeDetail from './Components/RecipeDetail';

function HomeScreen({navigation}) {
  return (
    <View style={styles.mainViewStyle}>
      <SearchBar title={'What do you want to eat?'} />
      <TrenList
        title={'TRENDING'}
        onGoRecipe={(prop) =>
          navigation.navigate('Details', {
            rId: prop.recipe.id,
            rName: prop.recipe.recipeName,
            rImage: prop.recipe.image,
            rServings: prop.recipe.servings,
            rIngredients: prop.recipe.ingredients,
            rCategoria: 'TRENDING',
          })
        }
      />
      <TrenList
        title={'RECENT'}
        onGoRecipe={(prop) =>
          navigation.navigate('Details', {
            rId: prop.recipe.id,
            rName: prop.recipe.recipeName,
            rImage: prop.recipe.image,
            rServings: prop.recipe.servings,
            rIngredients: prop.recipe.ingredients,
            rCategoria: 'RECENT',
          })
        }
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {
    rId,
    rName,
    rImage,
    rServings,
    rIngredients,
    rCategoria,
  } = route.params;
  return (
    <View style={styles.DetailView}>
      <RecipeDetail
        rdId={rId}
        rdName={rName}
        rdImage={rImage}
        rdServings={rServings}
        rdIngredients={rIngredients}
        rdCategoria={rCategoria}
        onGoHome={() => navigation.goBack()}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarVisible: false}}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{tabBarVisible: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = {
  mainViewStyle: {
    flex: 1,
    backgroundColor: '#272727',
  },
  DetailView: {
    flex: 1,
    backgroundColor: '#272727',
  },
  scrollViewStyle: {
    paddingBottom: 10,
  },
};

export default App;
