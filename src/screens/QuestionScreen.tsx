import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useFonts, FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { AppLoading } from "expo";

export const QuestionScreen = () => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));

    console.log(questions);
  }, []);

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({ FugazOne_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Question screen!</Text>
        <Button
          buttonText="finish"
          onPress={() => navigation.navigate("Score")}
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
  text: {
    fontFamily: "FugazOne_400Regular",
  },
});
