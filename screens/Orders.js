import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import product_list from "../constants/product_list";
import dimensions from "../constants/dimensions";
const Orders = ({ navigation }) => {
  const CartCard = ({ name, packs, price, image }) => {
    return (
      <View
        style={{
          height: 100,
          backgroundColor: "black",
          borderWidth: 1,
          borderBottomColor: colors.appgrey,
          marginVertical: 10,
          marginHorizontal: 5,
          paddingHorizontal: dimensions.hpadding,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image style={{ height: 80, width: 80 }} source={image} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "gray",
            }}
          >
            {packs}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 14,
            }}
          >
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "UGX",
            })}
          </Text>
        </View>
        <View
          style={{
            width: 80,
            height: 30,
            borderRadius: 30,
            borderColor: colors.white,
            borderWidth: 1,
            paddingHorizontal: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{ fontWeight: "bold", color: "white" }}
              onPress={() => navigation.navigate("ConfirmOrder")}
            >
              Select
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <FlatList
        style={{ marginBottom: 50 }}
        // showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ paddingBottom: 80 }}
        data={product_list}
        renderItem={({ item }) => (
          <CartCard
            packs={item.packs}
            image={item.image}
            price={item.price}
            name={item.name}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Orders;
