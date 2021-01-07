import React from 'react';
import Home from './components/HomeScreen';
import Details from './components/listItem/DetailsScreen';
import ListItem from './components/listItem/listItem';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
        <Stack.Screen name="Details" options={{headerShown: false}} component={Details}/>
        <Stack.Screen name="ListItem" options={{headerShown: false}} component={ListItem}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;