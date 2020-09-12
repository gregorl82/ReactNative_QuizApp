import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";

export default function App() {
  let [fontsLoaded] = useFonts({ FugazOne_400Regular });
  let fontSize = 40;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Qwizzr</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6f4",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "FugazOne_400Regular",
    fontSize: 50,
  },
});
