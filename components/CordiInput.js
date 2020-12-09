import React from "react";
import { TextInput, StyleSheet } from "react-native";
import CordiColors from "../shared/CordiColors";

const CordiInput = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: CordiColors.borderColor,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default CordiInput;
