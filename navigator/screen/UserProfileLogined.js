import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function UserProfileLogined() {
  const insets = useSafeAreaInsets();
  const [idUser, setIdUser] = useState();
  const [userData, setUserData] = useState();
    const [key,SetKey] = useState(0);
  const navigation = useNavigation();
  
  const id_user2 = AsyncStorage.getItem("id_user");

  const getUserData = async () => {
    try {
      const id_user = await AsyncStorage.getItem("id_user");
      if (id_user !== null) {
        setIdUser(id_user);
        SetKey(key=>key+1)
      }
    } catch (err) {
      console.log(err);
    }
  };
  const removeUserData = async () => {
    try {
      const id_user = await AsyncStorage.removeItem("id_user");
      
        setIdUser(id_user);
        setUserData(null)
        console.log("remove id user")
  
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await axios.get("https://hanico.online/user/" + idUser);
      setUserData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () =>{
    removeUserData();

    navigation.navigate("Login");
  }

  useEffect(() => {
    getUserData();
    fetchUserData();
    console.log("aaa");
  }, []);
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {userData ? (
        <Button
        onPress={() => logout() }
        title="Logout"
      ></Button>
      ) : (
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Login"
        ></Button>
      )}
    </View>
  );
}
