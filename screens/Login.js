import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SecondaryButton } from "../components/Button";
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{}}>
        <Text style={{ fontWeight: "bold", color: colors.dark, fontSize: 22 }}>
          Welcome to Sure
        </Text>
        <Text>Hi</Text>
        <TextInput
          onChangeText={() => console.log("hi")}
          value="hello"
          style={{ height: 20, width: 100 }}
          placeholder="ppop"
        />
        <Text
          style={{ color: colors.appgrey, fontSize: 15, paddingVertical: 10 }}
        >
          Please enter your account details here
        </Text>
      </View>

      <View style={{}}>
        <View
          style={{
            paddingVertical: 10,
            bordercolor: "gray",
            paddingHorizontal: 10,
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <Fontisto name="email" size={24} color="gray" />
          <TextInput
            placeholder="Email or phone number"
            styles={styles.input}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
            marginTop: 20,
            paddingHorizontal: 10,
            borderWidth: 1,
            bordercolor: "gray",
            borderRadius: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{}}>
            <MaterialIcons name="lock-outline" size={24} color="gray" />
            <TextInput
              placeholder="Password"
              styles={styles.input}
              secureTextEntry
            />
          </View>

          <AntDesign name="eyeo" size={24} color="black" />
        </View>
        <View style={{ paddingVertical: 20, alignSelf: "flex-end" }}>
          <Text style={{ fontWeight: "500" }}>Forgot Password?</Text>
        </View>
      </View>
      <SecondaryButton
        title="Login"
        onPress={() => navigation.navigate("Home")}
      />
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          paddingVertical: 30,
        }}
      >
        <Text style={{ fontSize: 15 }}>Or continue with</Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          marginTop: 20,
          paddingHorizontal: 10,
          borderWidth: 1,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          bordercolor: "gray",
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <AntDesign name="google" size={24} color="black" />
        <Text style={{ paddingHorizontal: 5 }}>Continue with Google</Text>
      </View>
      <View
        style={{
          paddingVertical: 20,
          fontSize: 15,
          alignSelf: "center",
          flexDirection: "row",
        }}
      >
        <Text>Don't have any account</Text>
        <Text
          style={{ fontWeight: "bold", paddingHorizontal: 5 }}
          onPress={() => navigation.navigate("Sign")}
        >
          Sign Up
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 80,
  },
});
