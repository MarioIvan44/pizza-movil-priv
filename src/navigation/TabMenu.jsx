import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CarritoScreen from "../screens/CarritoScreen";

const Tab = createBottomTabNavigator();

export default function TabMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#AF8260",
        tabBarInactiveTintColor: "#B99873",
        tabBarStyle: {
          backgroundColor: "#FFF",
          height: Platform.OS === "ios" ? 80 : 60,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Productos") {
            iconName = focused ? "cafe" : "cafe-outline";
          } else {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="Productos"
        component={ProductScreen}
        options={{ title: "Productos" }}
      />
      <Tab.Screen
        name="Carrito"
        component={CarritoScreen}
        options={{ title: "Carrito" }}
      />
    </Tab.Navigator>
  );
}
