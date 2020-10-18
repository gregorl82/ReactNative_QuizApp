import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

interface ButtonProps {
  buttonText: string;
  displayed?: boolean;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  displayed,
  onPress,
}) => {
  return (
    <View style={{ display: displayed ? "none" : "flex" }}>
      <Pressable onPress={onPress}>
        <Text style={styles.button}>{buttonText.toUpperCase()}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#488687",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    borderRadius: 5,
    textAlign: "center",
  },
});
