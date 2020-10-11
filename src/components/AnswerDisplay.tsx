import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Entities = require("html-entities").AllHtmlEntities;

export interface AnswerDisplayProps {
  answerText: string;
}

export const AnswerDisplay: React.FC<AnswerDisplayProps> = ({ answerText }) => {
  const entities = new Entities();

  return (
    <View style={styles.answerDisplay}>
      <TouchableOpacity onPress={() => console.log("Pressed!")}>
        <Text
          testID={"answer-display"}
          style={styles.text}
          adjustsFontSizeToFit={true}
        >
          {entities.decode(answerText)}
        </Text>
      </TouchableOpacity>
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
