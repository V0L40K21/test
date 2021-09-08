import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const RandomButton = ({cb}) => {
  return (
    <Pressable style={styles.container} onPress={cb}>
      <Text>R</Text>
    </Pressable>
  );
};

export default RandomButton;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 30,
    position: "absolute",
    right: 15,
    bottom: 85,
    zIndex: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
