import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { color } from "react-native-reanimated";

const Entities = require("html-entities").AllHtmlEntities;

export interface AnswerDisplayProps {
  answerText: string;
  answered: boolean;
  handlePress: (text: string) => void;
}

export const AnswerDisplay: React.FC<AnswerDisplayProps> = ({
  answerText,
  answered,
  handlePress,
}) => {
  const entities = new Entities();

  return (
    <View style={styles.answerDisplay}>
      <Pressable
        onPress={() => handlePress(answerText)}
        android_ripple={{ color: "f5d0dc", radius: 300 }}
        disabled={answered}
      >
        <Text
          testID={"answer-display"}
          style={styles.text}
          adjustsFontSizeToFit={true}
        >
          {entities.decode(answerText)}
        </Text>
      </Pressable>
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
