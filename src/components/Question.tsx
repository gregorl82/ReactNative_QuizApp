import React from "react";
import { View } from "react-native";
import { QuestionDisplay } from "./QuestionDisplay";
import { AnswerDisplay } from "./AnswerDisplay";
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
      <QuestionDisplay questionText={question.question} />
      {answers.map((answer, index) => {
        return <AnswerDisplay key={index} answerText={answer} />;
      })}
    </View>
  );
};
