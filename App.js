import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login    from './src/Pages/Login';
import Home     from './src/Pages/Home';
import Floresta from "./src/Pages/Territorios/Floresta";
import Oceano   from "./src/Pages/Territorios/Oceano";
import Deserto  from "./src/Pages/Territorios/Deserto";
import Savana   from "./src/Pages/Territorios/Savana";
import Artico   from "./src/Pages/Territorios/Artico";
import Jurassic from "./src/Pages/Territorios/Jurassic";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Home"     component={Home}/>

        <Stack.Screen name="Floresta" component={Floresta}/>

        <Stack.Screen name="Oceano"   component={Oceano}/>

        <Stack.Screen name="Deserto"  component={Deserto}/>

        <Stack.Screen name="Savana"   component={Savana}/>

        <Stack.Screen name="Artico"   component={Artico}/>

        <Stack.Screen name="Jurassic" component={Jurassic}/>

        <Stack.Screen name="Login" component={Login}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}