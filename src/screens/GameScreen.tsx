import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { useNavigation } from "@react-navigation/native";
import { useFonts, FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { AppLoading } from "expo";
import { insert } from "../utils/insert";

export interface QuestionWithAnswers {
  question: string;
  correctAnswer: string;
  answers: string[];
  selectedAnswer: string | undefined;
  answered: boolean;
}

export const GameScreen = () => {
  const [questions, setQuestions] = useState<Array<QuestionWithAnswers>>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionWithAnswers>();
  const [answeredQuestions, setAnsweredQuestions] = useState<
    Array<QuestionWithAnswers>
  >([]);
  const [currentScore, setCurrentScore] = useState<number>(0);

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
              answers: insert(result.incorrect_answers, result.correct_answer),
              selectedAnswer: undefined,
              answered: false,
            } as QuestionWithAnswers;
          }
        );

        setQuestions(formattedQuestions);

        setCurrentQuestion(formattedQuestions[0]);
      });
  }, []);

  const handleAnswerPress = (answer: string) => {
    const updatedQuestion = {
      ...currentQuestion!,
      selectedAnswer: answer,
      answered: true,
    };

    setCurrentQuestion(updatedQuestion);

    if (currentQuestion!.correctAnswer === answer) {
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScore(currentScore);
    }
  };

  const handleNextPress = () => {
    setAnsweredQuestions([...answeredQuestions, currentQuestion!]);

    setCurrentQuestionIndex(currentQuestionIndex + 1);

    setCurrentQuestion(questions![currentQuestionIndex + 1]);
  };

  const handleFinishPress = () => {
    navigation.navigate("Score", { score: currentScore });
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
        {currentQuestion && (
          <>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Question {currentQuestionIndex + 1}
              </Text>
              <Text style={styles.headerText}>Score: {currentScore}</Text>
            </View>

            <Question
              question={currentQuestion}
              handlePress={handleAnswerPress}
            />
          </>
        )}
        {currentQuestion &&
          currentQuestion.answered &&
          (currentQuestionIndex < questions.length - 1 ? (
            <Button buttonText="next" onPress={handleNextPress} />
          ) : (
            <Button buttonText="finish" onPress={handleFinishPress} />
          ))}
        <Button buttonText="quit" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6f4",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  headerText: {
    fontFamily: "FugazOne_400Regular",
    fontSize: 20,
  },
});
