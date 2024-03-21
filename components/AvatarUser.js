import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const avatar = require("../navigator/img/user.jpg");

export default function AvatarUser() {
  const [idUser, setIdUser] = useState();
  const [userData, setUserData] = useState();
  
  const getUserData = async () => {
    try {
      const id_user = await AsyncStorage.getItem("id_user");
      if (id_user !== null) {
        setIdUser(id_user);
      }
    } catch (err) {
      setIdUser(null)
      console.log(err);
    }
  };

  const fetchUserData = async () => {
        
    try {
        const res = await axios.get("https://hanico.online/user/"+idUser);
        setUserData(res.data);
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    getUserData();
    fetchUserData();
  }, [idUser]);
  return (
    <View className="flex flex-row items-center gap-3 p-3">
      <View className="h-14 w-14 bg-red-400 rounded-full">
        <Image className="h-full w-full rounded-full" source={{uri:userData?.avatar_user}}></Image>
      </View>
      <View>
        <Text className="text-sm text-[#858597]">Goodmorning,</Text>
        {
          idUser?(
            <Text className="text-2xl text-[#1F1F39]">{userData?.name_user}</Text>
          ):(
            <Text className="text-2xl text-[#1F1F39]">Anonymous</Text>
          )
        }
      </View>
    </View>
  );
}
