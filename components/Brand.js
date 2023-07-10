import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";

const Brand = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#222",
          width: 50,
          height: 50,
          borderRadius: 100,
          padding: 12,
        }}
      >
        <Fontisto name="injection-syringe" size={26} color="white" />
        {/* <Text className="text-white">{props.name}</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#222",
          width: 50,
          height: 50,
          borderRadius: 100,
          padding: 12,
        }}
      >
        <Fontisto name="injection-syringe" size={26} color="white" />
        {/* <Text className="text-white">{props.name}</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#222",
          width: 50,
          height: 50,
          borderRadius: 100,
          padding: 12,
        }}
      >
        <Fontisto name="injection-syringe" size={26} color="white" />
        {/* <Text className="text-white">{props.name}</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#222",
          width: 50,
          height: 50,
          borderRadius: 100,
          padding: 12,
        }}
      >
        <Fontisto name="injection-syringe" size={26} color="white" />
        {/* <Text className="text-white">{props.name}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default Brand;
