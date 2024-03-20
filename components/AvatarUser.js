import { View, Text, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
const avatar = require("../navigator/img/user.jpg");


export default function AvatarUser() {
    const [fontsLoaded] = useFonts({
        "Poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
      });
  return (
    <View className="flex flex-row items-center gap-3 p-3" >
      <View className="h-14 w-14 bg-red-400" >
        <Image
          className="h-full w-full"
          source={avatar}
        ></Image>
      </View>
      <View >
      <Text className="text-sm text-[#858597]" >Goodmorning,</Text>
      <Text className="text-2xl text-[#1F1F39]" >Tran Dat</Text>
      </View>
    </View>
  );
}
