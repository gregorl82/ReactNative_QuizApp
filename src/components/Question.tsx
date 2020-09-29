import React from "react";
import { View } from "react-native";
import HTML from "react-native-render-html";
import { QuestionWithAnswers } from "../screens/GameScreen";

const insert = (arr: string[], index: number, newItem: string) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

export const Question: React.FC<{ question: QuestionWithAnswers }> = ({
  question,
}) => {
  const correctAnswerPosition = Math.floor(Math.random() * 4);

  const answers = insert(
    question.incorrectAnswers,
    correctAnswerPosition,
    question.correctAnswer
  );

  return (
    <View>
      <HTML html={question.question} />
      {answers.map((answer) => {
        return <HTML html={answer} />;
      })}
    </View>
  );
};
