import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import dimensions from "../constants/dimensions";

const CartItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 7,
        borderBottomWidth: 1,
        borderColor: colors.appgrey,
      }}
    >
      <View
        style={{
          flexDirection: "row",

          flex: 1,
        }}
      >
        <Image
          style={styles.productimg}
          source={require("../assets/Products/blue.png")}
        />

        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: dimensions.hpadding,

            flex: 0.8,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.item1}>Item 1</Text>
          <Text style={styles.price1}>Price 1</Text>
          <Text style={styles.item1}>3000 ugx</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-end",

          flex: 0.5,
        }}
      >
        <MaterialIcons name="cancel" size={20} color="white" />

        <View
          style={{
            flexDirection: "row",
            width: "75%",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 1,
              borderWidth: 1,

              borderColor: colors.white,
              height: 24,
              width: 24,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="minus" size={18} color="white" />
          </TouchableOpacity>

          <View
            style={{
              padding: 1,

              borderColor: colors.white,
              height: 24,
              width: 24,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: colors.white, fontSize: 17 }}>1</Text>
          </View>

          <TouchableOpacity
            style={{
              padding: 1,
              backgroundColor: colors.white,
              height: 25,
              width: 25,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="plus" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

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
