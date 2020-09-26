import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useFonts, FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { AppLoading } from "expo";

export const QuestionScreen = ({ navigation }: any) => {
  let [fontsLoaded] = useFonts({ FugazOne_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Question screen!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Score")}>
          <Text style={styles.button}>FINISH</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6f4",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "FugazOne_400Regular",
  },
  button: {
    padding: 15,
    backgroundColor: "#488687",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 5,
    width: 100,
    textAlign: "center",
  },
});
