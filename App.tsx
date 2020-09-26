import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { QuestionScreen } from "./screens/QuestionScreen";
import { ScoreScreen } from "./screens/ScoreScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Questions" component={QuestionScreen} />
        <Stack.Screen name="Score" component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
