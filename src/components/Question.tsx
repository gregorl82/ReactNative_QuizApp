import React from "react";
import { GestureResponderEvent, View } from "react-native";
import { QuestionDisplay } from "./QuestionDisplay";
import { AnswerDisplay } from "./AnswerDisplay";
import { QuestionWithAnswers } from "../screens/GameScreen";

const insert = (arr: string[], index: number, newItem: string) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

interface QuestionProps {
  question: QuestionWithAnswers;
  handlePress: (text: string) => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  handlePress,
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
        return (
          <AnswerDisplay
            key={index}
            answerText={answer}
            handlePress={handlePress}
            answered={question.answered}
          />
        );
      })}
    </View>
  );
};
