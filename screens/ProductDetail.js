import { View, Text, ScrollView, ImageBackground } from "react-native";
import React from "react";

import colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SecondaryButton } from "../components/Button";
import { Feather } from "@expo/vector-icons";
import dimensions from "../constants/dimensions";

const ProductDetail = (navigation, route) => {
  const item = route.param;
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("../assets/Products/product.jpg")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
            backgroundColor: colors.white,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        ></ImageBackground>

        <View
          style={{
            paddingHorizontal: dimensions.hpadding,
            paddingVertical: dimensions.vpadding,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",

              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: colors.white,
              }}
            >
              Original Gold
            </Text>
            <MaterialIcons name="favorite-border" size={24} color="orange" />
          </View>

          <View style={{}}>
            <Text
              style={{
                color: colors.white,
                paddingHorizontal: 5,
              }}
            >
              3packs
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderBottomColor: colors.appgrey,
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",

                    flex: 0.4,
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <AntDesign
                    name="minus"
                    size={24}
                    color="white"
                    style={{
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: colors.white,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: colors.white,
                      borderRadius: 10,
                      borderColor: colors.appgrey,
                    }}
                  >
                    1
                  </Text>
                  <AntDesign name="plus" size={24} color="white" />
                </View>

                <Text
                  style={{
                    color: colors.white,
                  }}
                >
                  3000 ugx
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                paddingVertical: 15,
                borderWidth: 1,
                borderBottomColor: colors.appgrey,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Product Detail
              </Text>
              <Text
                style={{
                  paddingVertical: 10,
                  color: colors.white,
                }}
              >
                O condoms are black, contoured, studded, lubricated and strong
                to give you extra pleasure.They are natural rubber latex condoms
                with a reservoir.
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: colors.white,
                }}
              >
                Review
              </Text>
              <Feather name="star" size={24} color="orange" />
            </View>
            <View
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <SecondaryButton
                title="Add to Basket"
                // onPress={() => navigation.navigate("Cart")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
