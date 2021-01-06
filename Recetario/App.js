import React from 'react';
import Home from './Components/HomeScreen';
import Details from './Components/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
        <Stack.Screen name="Details" options={{headerShown: false}} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;