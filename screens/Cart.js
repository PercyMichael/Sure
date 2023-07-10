import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SecondaryButton } from "../components/Button";
import dimensions from "../constants/dimensions";
import CartItem from "../components/CartItem";

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.dark,
        flex: 1,
        paddingHorizontal: dimensions.hpadding,
      }}
    >
      <ScrollView style={{ flex: 0.8 }}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>

      <View
        style={{
          flex: 0.8,

          marginTop: 25,
        }}
      >
        <Text style={styles.pagetitle}>Order Info</Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={styles.price1}>Sub total</Text>
          <Text style={styles.price1}>6000 ugx</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 5,
          }}
        >
          <Text style={styles.price1}>Delivery</Text>
          <Text style={styles.price1}>2000 ugx</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 5,
          }}
        >
          <Text style={styles.item1}>Total</Text>
          <Text style={styles.price1}>8000 ugx</Text>
        </View>
        <SecondaryButton
          title="Checkout"
          onPress={() => navigation.navigate("Success")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  pagetitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  item1: {
    color: colors.white,
    fontSize: 16,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  price1: {
    color: colors.white,
    fontSize: 14,
    paddingVertical: 5,
  },
  productimg: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
