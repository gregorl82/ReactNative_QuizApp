import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { AllHtmlEntities } from "html-entities";

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
  return (
    <View style={styles.answerDisplay}>
      <Pressable
        testID={"answer-display"}
        onPress={() => handlePress(answerText)}
        android_ripple={{ color: "f5d0dc", radius: 300 }}
        disabled={answered}
      >
        <Text
          testID={"answer-display-text"}
          style={styles.text}
          adjustsFontSizeToFit={true}
        >
          {AllHtmlEntities.decode(answerText)}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  answerDisplay: {
    height: 50,
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
