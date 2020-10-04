import React from "react";
import { StyleSheet, View } from "react-native";
import HTML from "react-native-render-html";

export interface AnswerDisplayProps {
  answerText: string;
}

export const AnswerDisplay: React.FC<AnswerDisplayProps> = ({ answerText }) => {
  return (
    <View>
      <HTML
        baseFontStyle={styles.text}
        containerStyle={styles.answerDisplay}
        html={answerText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  answerDisplay: {
    height: 50,
    width: 400,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});
