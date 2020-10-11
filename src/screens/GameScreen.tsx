import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { useNavigation } from "@react-navigation/native";
import { useFonts, FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { AppLoading } from "expo";

export interface QuestionWithAnswers {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  selectedAnswer: string | undefined;
  answered: boolean;
}

export const GameScreen = () => {
  const [questions, setQuestions] = useState<Array<QuestionWithAnswers>>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;

        const formattedQuestions: QuestionWithAnswers[] = results.map(
          (result: any) => {
            return {
              question: result.question,
              correctAnswer: result.correct_answer,
              incorrectAnswers: result.incorrect_answers,
              selectedAnswer: undefined,
              answered: false,
            } as QuestionWithAnswers;
          }
        );

        setQuestions(formattedQuestions);
      });
  }, []);

  const handlePress = (answer: string) => {
    console.log(answer);

    if (answer === questions![currentQuestionIndex].correctAnswer) {
      console.log("CORRECT!");
    } else {
      console.log("INCORRECT!");
    }
  };

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({ FugazOne_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else if (!questions) {
    return <ActivityIndicator style={styles.container} />;
  } else {
    return (
      <View style={styles.container}>
        {questions && (
          <>
            <Text style={styles.text}>Question {currentQuestionIndex + 1}</Text>
            <Question
              question={questions[currentQuestionIndex]}
              handlePress={handlePress}
            />
          </>
        )}
        {questions && currentQuestionIndex < questions.length - 1 ? (
          <Button
            buttonText="next"
            onPress={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          />
        ) : (
          <Button
            buttonText="finish"
            onPress={() =>
              navigation.navigate("Score", { correctAnswers: score })
            }
          />
        )}
        <Button buttonText="quit" onPress={() => navigation.navigate("Home")} />
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
    marginLeft: 20,
    alignSelf: "flex-start",
    fontFamily: "FugazOne_400Regular",
    fontSize: 20,
  },
});
