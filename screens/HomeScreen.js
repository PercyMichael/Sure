import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";

import Product from "../components/Product";
import Brand from "../components/Brand";

import product_list from "../constants/product_list";
import colors from "../constants/colors";
import dimensions from "../constants/dimensions";

const width = Dimensions.get("screen").width / 2 - 20;

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-black"
      style={{
        flex: 1,
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <StatusBar />

      <View id="page" style={{ paddingHorizontal: dimensions.hpadding }}>
        {/* Header */}
        <View
          id="header"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 12,
            alignItems: "center",
          }}
        >
          <View>
            <Text
              onPress={() => navigation.navigate("ProductDetails")}
              style={{
                fontWeight: 800,
                color: colors.white,
                fontSize: 24,
                lineHeight: 32,
              }}
            >
              Rajab
            </Text>
            <Text style={{ color: "white", fontSize: 20, lineHeight: 28 }}>
              Welcome Back!
            </Text>
          </View>

          <TouchableOpacity
            style={{ backgroundColor: "#222", padding: 8, borderRadius: 100 }}
            className="bg-[#222] p-2 rounded-full"
          >
            <MaterialCommunityIcons
              name="shopping"
              size={28}
              color="white"
              onPress={() => navigation.navigate("Cart")}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          {/* search */}
          <View
            style={{
              backgroundColor: "#222",
              flexDirection: "row",
              borderRadius: 100,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginVertical: 10,
            }}
          >
            <Ionicons name="search-sharp" size={24} color="white" />
            <TextInput
              placeholderTextColor="gray"
              selectionColor={"gray"}
              placeholder="Search..."
              style={{
                flex: 1,
                paddingHorizontal: 4,
                color: "white",
                fontSize: 18,
                lineHeight: 28,
                outline: "none",
              }}
            />
          </View>
          {/* end search */}

          {/* brands */}

          <View>
            {/* <Text
              style={{ color: "white", paddingVertical: 20, fontWeight: 700 }}
            >
              Popular Brands
            </Text> */}
            <Brand />
          </View>
          {/* end brands */}

          {/* product */}
          <View style="">
            <Text
              style={{ color: "white", paddingVertical: 20, fontWeight: 700 }}
            >
              Products
            </Text>

            <FlatList
              columnWrapperStyle={{ justifyContent: "space-between" }}
              style={{ marginBottom: 200 }}
              data={product_list}
              numColumns={2}
              renderItem={({ item }) => (
                // <View
                //   style={{
                //     width: width,
                //     height: 200,
                //     backgroundColor: "red",
                //     marginVertical: 9,
                //   }}
                // />
                <Product
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  onPress={() => navigation.navigate("Product")}
                />
              )}
              keyExtractor={(product) => product.id}
            />
          </View>
          {/* end products */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    height: 225,
    width,
    borderRadius: 5,
  },
});
export default HomeScreen;
