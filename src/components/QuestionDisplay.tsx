import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AllHtmlEntities } from "html-entities";

export interface QuestionDisplayProps {
  questionText: string;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  questionText,
}) => {
  return (
    <View style={styles.questionDisplay}>
      <Text style={styles.text}>{AllHtmlEntities.decode(questionText)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionDisplay: {
    backgroundColor: "#fff",
    height: 200,
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});
