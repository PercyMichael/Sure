import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const width = Dimensions.get("screen").width / 2 - 20;

const Product = ({ onPress, price, image, name }) => {
  return (
    <View
      style={{
        borderColor: "red",
        width: width,
        borderWidth: 1,
        marginVertical: 8,
        borderRadius: 5,
        borderColor: "#222",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image
          source={image}
          style={{ width: "100%", height: 150, marginVertical: 16 }}
        />
      </TouchableOpacity>
      <View id="details" style={{ padding: 12 }}>
        <Text className="text-white text-xs capitalize">
          {/* {name.length > 23
            ? `${props?.name.slice(0, 23)}...`
            : props?.name} */}
        </Text>

        <Text className="text-white font-semibold">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "UGX",
          })}
        </Text>

        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AntDesign name="star" size={15} color="white" />
            <View className="rounded-full ">
              <MaterialCommunityIcons
                name="basket-plus"
                size={20}
                color="white"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;
