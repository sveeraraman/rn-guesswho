import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CordiColors from "../shared/CordiColors";
const CordiHeader = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: CordiColors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: CordiColors.titleColor,
  },
});

export default CordiHeader;
