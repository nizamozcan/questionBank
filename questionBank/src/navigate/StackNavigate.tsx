import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen.tsx";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as NavigationHelpers from "../helper/NavigationHelpers.tsx";
import { QuestionsListScreen } from "../screens/QuestionsListScreen.tsx";
import { ResultScreen } from "../screens/ResultScreen.tsx";

const Stack = createStackNavigator();

export const StackNavigate = () => {

  return (
    <NavigationContainer ref={NavigationHelpers.navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="questions" component={QuestionsListScreen} />
        <Stack.Screen name="result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
