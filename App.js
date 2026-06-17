import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/Pages/Login";
import Home from "./src/Pages/Home";
import Territorio1 from "./src/Pages/Territorios/Territorio1";
import Territorio2 from "./src/Pages/Territorios/Territorio2";
import Territorio3 from "./src/Pages/Territorios/Territorio3";
import Territorio4 from "./src/Pages/Territorios/Territorio4";
import Territorio5 from "./src/Pages/Territorios/Territorio5";
import Territorio6 from "./src/Pages/Territorios/Territorio6";
import Loading from "./src/Pages/Loading";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Territorio 3" component={Territorio3} />

        <Stack.Screen name="Territorio 5" component={Territorio5} />

        <Stack.Screen name="Territorio 2" component={Territorio2} />

        <Stack.Screen name="Territorio 6" component={Territorio6} />

        <Stack.Screen name="Territorio 1" component={Territorio1} />

        <Stack.Screen name="Territorio 4" component={Territorio4} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
