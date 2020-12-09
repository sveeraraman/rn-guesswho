import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CordiHeader from "./components/CordiHeader";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <CordiHeader title="Guess a Number"></CordiHeader>
      <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
