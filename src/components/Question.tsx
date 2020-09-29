import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import HTML from "react-native-render-html";
import { QuestionWithAnswers } from "../screens/GameScreen";

export const Question: React.FC<{ question: QuestionWithAnswers }> = ({
  question,
}) => {
  return (
    <View>
      <HTML html={question.question} />
      <HTML html={question.correctAnswer} />
      <HTML html={question.incorrectAnswers[0]} />
      <HTML html={question.incorrectAnswers[1]} />
      <HTML html={question.incorrectAnswers[2]} />
    </View>
  );
};
