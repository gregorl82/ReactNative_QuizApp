import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { QuestionWithAnswers } from "../screens/GameScreen";

export const Question: React.FC<{ question: QuestionWithAnswers }> = ({
  question,
}) => {
  return (
    <View>
      <Text>{question.question}</Text>
      <Text>{question.correctAnswer}</Text>
      <Text>{question.incorrectAnswers[0]}</Text>
      <Text>{question.incorrectAnswers[1]}</Text>
      <Text>{question.incorrectAnswers[2]}</Text>
    </View>
  );
};
