import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  buttonText: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{buttonText.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "#488687",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 5,
    width: 100,
    textAlign: "center",
  },
});
