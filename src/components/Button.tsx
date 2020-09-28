import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

interface ButtonProps {
  buttonText: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, onPress }) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text style={styles.button}>{buttonText.toUpperCase()}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "#488687",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 5,
    width: 100,
    textAlign: "center",
  },
});
