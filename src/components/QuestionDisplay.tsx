import React from "react";
import { StyleSheet, View } from "react-native";
import HTML from "react-native-render-html";

export interface QuestionDisplayProps {
  questionText: string;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  questionText,
}) => {
  return (
    <View>
      <HTML containerStyle={styles.questionDisplay} html={questionText} />
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
});
