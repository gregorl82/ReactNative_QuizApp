import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "../components";
import { useNavigation } from "@react-navigation/native";
import { useFonts, FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { AppLoading } from "expo";

export const ScoreScreen = ({ route }: any) => {
  const { score } = route.params;

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({ FugazOne_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>You scored...</Text>
        <Text style={styles.scoreText}>{score} out of 10!</Text>

        <Button buttonText="home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6f4",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  headerText: {
    fontFamily: "FugazOne_400Regular",
    textAlign: "center",
    fontSize: 30,
    marginTop: 200,
  },
  scoreText: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 30,
  },
});
