import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import dimensions from "../constants/dimensions";
import colors from "../constants/colors";
import { SecondaryButton } from "../components/Button";
import { Ionicons } from "@expo/vector-icons";

const OrderComfirmation = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.dark,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: dimensions.hpadding,
          paddingVertical: dimensions.vpadding,
        }}
      >
        <Text style={styles.orderdetails}>Order Details</Text>
        <Text style={styles.inlinetext}>
          You have ordered a pack of condoms. The order will be delivered to:
        </Text>
        <View
          style={{ flexDirection: "row", paddingVertical: dimensions.vpadding }}
        >
          <Text style={styles.inlinetext}>Estimated delivery time:</Text>
          <Text style={styles.time}>20 minutes</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "grey",
            shadowColor: "grey",
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontWeight: "bold",
              fontSize: 15,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            Your location
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Ionicons
              name="ios-location-sharp"
              size={24}
              color="orange"
              borderRadius={14}
              borderColor="white"
              borderWidth={1}
            />
            <Text
              style={{
                color: colors.white,
                paddingHorizontal: 10,
                fontSize: 15,
                paddingVertical: 10,
              }}
            >
              4517 Kulambilo, Ntinda Kisasi, Kampala 394
            </Text>
          </View>
          <View
            style={{ paddingVertical: 10, paddingHorizontal: 10, width: "95%" }}
          >
            <SecondaryButton
              title="Set Location"
              onPress={() => navigation.navigate("Location")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderComfirmation;

const styles = StyleSheet.create({
  orderdetails: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  map: {
    width: 390,
    height: 200,
    borderRadius: 10,
  },
  userimg: {
    width: 60,
    height: 60,
    borderRadius: 75,
  },
  time: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 15,
    paddingHorizontal: 10,
  },
  inlinetext: {
    color: colors.white,
    fontSize: 15,
  },
});
