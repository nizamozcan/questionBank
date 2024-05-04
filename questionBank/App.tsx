/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigate } from "./src/navigate/StackNavigate.tsx";
import { HomeScreen } from "./src/screens/HomeScreen.tsx";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function App(): React.JSX.Element {



  return (
    <SafeAreaView style={styles.container}>
      <StackNavigate/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container:{flex:1}
});

export default App;
