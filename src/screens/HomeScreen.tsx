import React from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components";
import { useNavigation } from "@react-navigation/native";
import { useFonts, FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";

export const HomeScreen = () => {
  let [fontsLoaded] = useFonts({ FugazOne_400Regular });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Qwizzr!</Text>

        <Button
          buttonText="start game"
          onPress={() => navigation.navigate("Game")}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6f4",
    alignItems: "stretch",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "FugazOne_400Regular",
    fontSize: 50,
    padding: 50,
    textAlign: "center",
  },
});
