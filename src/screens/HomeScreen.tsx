import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Button } from "../components/Button";
import { Picker } from "@react-native-community/picker";
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
        <Text style={styles.titleText}>Qwizzr</Text>

        <Button
          buttonText="start"
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
    alignItems: "center",
    justifyContent: "center",
  },
  pickerContainer: {
    alignItems: "baseline",
  },
  titleText: {
    fontFamily: "FugazOne_400Regular",
    fontSize: 50,
    padding: 50,
  },
  labelText: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  picker: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica",
    height: 50,
    width: 200,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});
