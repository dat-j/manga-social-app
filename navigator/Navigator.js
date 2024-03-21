import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screen/HomeScreen";
import UserProfile from "./screen/UserProfile";
import NovelScreen from "./screen/NovelScreen";
import MangaScreen from "./screen/MangaScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screen name
const home = "HomeMain";
const userProfile = "User Profile";
const novel = "Novel";
const search = "Search screen";
import {NovelPageNavigator, MangaPageNavigator, UserPageNavigator} from "./customNavigator"
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
            } else if (rn === novel) {
              iconName = focused ? "book" : "book-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { display: "flex", flexDirection: "column" },
          headerShown:false
        })}
        tabBarOptions={{
          activeTintColor: "#54BAB9",
          inactiveTintColor: "grey",
          // inactiveBackgroundColor:"grey",
          labelStyle: { fonsize: 10 },
        }}
      >
        <Tab.Screen name={home} component={MangaPageNavigator} />
        <Tab.Screen name={novel} component={NovelPageNavigator} />
        <Tab.Screen name={userProfile} component={UserPageNavigator} />
      </Tab.Navigator>
        
    </NavigationContainer>
  );
}
