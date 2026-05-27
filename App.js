import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Pages/Login';
import Home from './src/Pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">

      <Stack.Navigator>    
       <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}