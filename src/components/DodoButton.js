import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DodoButton = ({ title }) => {
  return (
    <View style={{ marginHorizontal: 20, backgroundColor: "orange", borderRadius: 10, marginVertical: 10}}>
      <Text style={{ textAlign: "center", paddingVertical: 15 }}>{title}</Text>
    </View>
  );
};

export default DodoButton;

const styles = StyleSheet.create({});
