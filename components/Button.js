import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";

const PrimaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{ ...style.btnContainer, backgroundColor: colors.appgrey }}>
        <Text style={{ ...style.title, color: colors.white }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: colors.appgrey,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { PrimaryButton, SecondaryButton };
