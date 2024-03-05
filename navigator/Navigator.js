import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screen/HomeScreen";
import UserProfile from "./screen/UserProfile";
//screen name
const home = "Home";
const userProfile = "User Profile";

const Tab = createBottomTabNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === home) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === userProfile) {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
            activeTintColor:"tomato",
            inactiveTintColor:"grey",
            // inactiveBackgroundColor:"grey",
            labelStyle:{fonsize:10}
        }}
      >
        <Tab.Screen name={home} component={HomeScreen} />
        <Tab.Screen name={userProfile} component={UserProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
