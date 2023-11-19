import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/stores"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import screen_01 from './screen/screen_01'
import screen_02 from './screen/screen_02'
import screen_03 from './screen/screen_03'
var Stack = createStackNavigator();

export default function app() {
  return (
    <Provider store={store}>
     <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen component = { screen_01 }name = "screen_01" options={{headerShown:false}}/>
            <Stack.Screen component = { screen_02 }name = "screen_02" options={{headerShown:false}}/>
            <Stack.Screen component = { screen_03 }name = "screen_03"  options={{headerShown:false}}/>   
        </Stack.Navigator> 
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
