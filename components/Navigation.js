import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

import Profile from "../screens/Profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "../screens/ProductDetail";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import Orders from "../screens/Orders";
import Cart from "../screens/Cart";

import colors from "../constants/colors";
import SuccessScreen from "../screens/SuccessScreen";
import OrderComfirmation from "../screens/OrderComfirmation";
import Maps from "../screens/Maps";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.dark,
          borderWidth: 0,
        },
        headerTintColor: colors.white,
        headerShown: route.name !== "Product" && route.name !== "Home", // Hide header on "Product" screen
      })}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Sign"
        component={SignUp}
      />

      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Product" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Location" component={Maps} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen name="ConfirmOrder" component={OrderComfirmation} />
    </Stack.Navigator>
  );
};

function TabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        top: -30,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        elevation: 5,
      }}
    >
      <MaterialCommunityIcons name="shopping" size={30} color={"#222"} />
    </TouchableOpacity>
  );
}

function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarActiveTintColor: "#e91e63",
        tabBarActiveTintColor: "#fff",
        // headerShown: false,

        tabBarShowLabel: false,
        tabBarStyle: {
          height: 55,
          backgroundColor: "#222",
          position: "absolute",
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={({ navigation }) => ({
          borderWidth: 0,
          headerStyle: {
            backgroundColor: colors.dark,
            borderWidth: 0,
          },
          headerTintColor: colors.white,
          headerRight: () => (
            <View
              style={{
                marginHorizontal: 5,
                paddingHorizontal: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Cart")}
                style={{
                  backgroundColor: "#222",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <MaterialCommunityIcons
                  name="shopping"
                  size={28}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={24} />
          ),
          tabBarButton: (props) => <TabBarButton {...props} />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.white,

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={24} color={"#fff"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
