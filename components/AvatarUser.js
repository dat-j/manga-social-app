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
    <View style={{ display: "flex", flexDirection:"row", alignItems:"center", gap:"10px", padding:"10px" }}>
      <View style={{ height: "58px", width: "58px" }}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={avatar}
        ></Image>
      </View>
      <View >
      <Text style={{fontFamily:"Poppins-regular", fontSize:"14px", color:"#858597"}}>Goodmorning,</Text>
      <Text style={{fontFamily:"Poppins-semibold",fontSize:"22px", color:"#1F1F39"}}>Tran Dat</Text>
      </View>
    </View>
  );
}
