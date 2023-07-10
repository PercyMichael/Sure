import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import colors from "../constants/colors";
import dimensions from "../constants/dimensions";
import { SecondaryButton } from "../components/Button";
// import Lottie from "lottie-react-native";

const SuccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.dark,
      }}
    >
      <View
        style={{
          flex: 1,
          // marginBottom: 100,
          padding: dimensions.hpadding,
          paddingVertical: dimensions.vpadding,
          padding: 20,
        }}
      >
        <View style={{ flex: 0.5, marginBottom: 80 }}>
          {/* <Lottie
            style={{ width: "100%" }}
            source={require("../assets/check-sucess.json")}
            autoPlay
            loop
          /> */}
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.ordertext1}>Your Order has been accepted</Text>
          <Text style={styles.ordertext2}>
            Your item has been placed and is on it's way to you.
          </Text>
          <View style={{ width: "100%", paddingVertical: 30 }}>
            <SecondaryButton
              title="Back to Home"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>

        {/* <Text style={styles.ordertext1}>Your Order has been accepted</Text>
        <Text style={styles.ordertext2}>
          Your item has been placed and is on it's way to you.
        </Text>
        <View style={{ width: "100%", paddingVertical: 30 }}>
          <SecondaryButton
            title="Back to Home"
            onPress={() => navigation.navigate("Home")}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  ordertext1: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "bold",
    color: colors.white,
    fontsize: 16,
    alignItems: "center",
  },
  productimg: {
    width: 200,
    height: 200,
    alignItems: "center",
    borderRadius: 10,
  },
  ordertext2: {
    color: colors.white,
    fontSize: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
});
