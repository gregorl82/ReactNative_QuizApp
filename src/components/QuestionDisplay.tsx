import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Entities = require("html-entities").AllHtmlEntities;

export interface QuestionDisplayProps {
  questionText: string;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  questionText,
}) => {
  const entities = new Entities();

  return (
    <View style={styles.questionDisplay}>
      <Text style={styles.text}>{entities.decode(questionText)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionDisplay: {
    backgroundColor: "#fff",
    height: 250,
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});
