import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import dimensions from "../constants/dimensions";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.dark,
        paddingHorizontal: dimensions.hpadding,
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.userimg}
          source={require("../assets/profileimage/profile.jpg")}
        />
        <Text style={styles.username}>Micheal</Text>
        <Text style={styles.useremail}>mic@gmail.com</Text>
        <View style={styles.userbtnwrap}>
          <TouchableOpacity style={styles.userbtn} onPress={() => {}}>
            <Text style={styles.userbtnText2}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userbtn} onPress={() => {}}>
            <Text style={styles.userbtnText2}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "50%",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="shopping"
                size={24}
                color="white"
                onPress={() => navigation.navigate("Cart")}
              />
            </TouchableOpacity>
            <Text style={styles.icontext}>25</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <MaterialIcons name="favorite-border" size={24} color="orange" />
            </TouchableOpacity>

            <Text style={styles.icontext}>15</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          padding: 10,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* <View
          style={{
            flexDirection: "row",
          }}
        >
          <Feather name="shopping-bag" size={20} color="white" />
          <Text style={styles.icontext}>Orders History</Text>
        </View>
        <View>
          <Text style={styles.icontext}>View</Text>
        </View> */}
      </View>
      <View
        style={{
          padding: 20,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <EvilIcons name="location" size={24} color="white" />
          <Text style={styles.icontext}>Delivery Address</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={20}
              color="white"
            />
          </TouchableOpacity>

          <Text style={styles.icontext}>Edit</Text>
        </View>
      </View>
      <View
        style={{ padding: 20, borderWidth: 1, borderColor: colors.appgrey }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: colors.white }}>
          Home
        </Text>
        <Text style={{ paddingVertical: 2, color: colors.white }}>
          Ntinda, street 1
        </Text>
        <Text style={{ paddingVertical: 2, color: colors.white }}>Kampala</Text>
      </View>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row", paddingVertical: 6 }}>  
          <EvilIcons name="location" size={24} color="white" />
          <Text style={styles.icontext}>Payment Methods</Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 6 }}>
          <EvilIcons name="location" size={24} color="white" />
          <Text style={styles.icontext}>About</Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 6 }}>
          <EvilIcons name="location" size={24} color="white" />
          <Text style={styles.icontext}>Help</Text>
        </View>
      </View>
      <View style={{ padding: 8, flexDirection: "row" }}>
        <Ionicons name="add-circle" size={20} color="white" />
        <Text
          style={{
            paddingHorizontal: 8,
            color: colors.white,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Add New Address
        </Text>
      </View>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  // userinfowrap: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   width: "100%",
  //   marginVertical: 20,
  // },
  userinfotitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  userimg: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  username: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 10,
  },
  useremail: {
    color: colors.white,
    fontSize: 15,
    textAlign: "center",
  },
  userbtnwrap: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  userbtn: {
    borderColor: colors.appgrey,
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  userbtnText1: {
    color: colors.appgrey,
  },
  userbtnText2: {
    color: colors.white,
  },

  icontext: {
    color: colors.white,
    paddingHorizontal: 5,
    fontSize: 16,
  },
});
