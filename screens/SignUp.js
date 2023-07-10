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

const SignUp = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{}}>
        <Text style={{ fontWeight: "bold", color: colors.dark, fontSize: 22 }}>
          Welcome to Sure
        </Text>
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
      </View>

      <View style={{ paddingVertical: 20, marginBottom: 10 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Your password must contain:
        </Text>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Text>Atleast 6 characters</Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 5 }}>
          <Text>Contain a number</Text>
        </View>
      </View>
      <SecondaryButton
        title="Sign Up"
        onPress={() => navigation.navigate("Login")}
      />
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 80,
  },
});
