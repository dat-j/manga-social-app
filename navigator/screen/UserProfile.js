import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";

import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const UserProfile = () => {
  const insets = useSafeAreaInsets();
  const [login, setLogin] = useState(true);
  const [logined, setLogined] = useState(false);
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigation = useNavigation();
  

  const handleOnChangeEmail = (event) => {
   setEmail(event.target.value)
    
  };
  const handleOnChangePassword = (event) => {
    setEmail(event.target.value)
     
   };
  const changeTab = () =>{
    setLogin(!login)
  }
  //store save user Data
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem("");
    } catch (error) {
      // Error saving data
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const loginSubmit = async () => {
    try {
      
      const response = await axios.post("https://hanico.online/login", {email,password});
      if (response?.data.errCode !== 200) {
        console.log("error!")
        
        
      } else {
        
        console.log("login success!");
        setLogined(true);
        console.log(response.data.account.email);
        console.log(response.data.account.id_user);
        AsyncStorage.setItem("email",response.data.account.email);
        AsyncStorage.setItem("id_user",(response.data.account.id_user).toString());
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    await loginSubmit();
  };

  const logout = () =>{
    AsyncStorage.removeItem("email");
    AsyncStorage.removeItem("id_user");
    setLogined(false);
    console.log(AsyncStorage.getItem("email"))
  }
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      className="flex items-center justify-center my-auto bg-white h-full "
    >
      {
        !logined?(
          <View className="h-[524px] w-[315px] shadow-2xl shadow-black rounded-[34px] flex flex-col items-center bg-white">
        {login?(
          <View className="h-7 w-56 rounded-[14px] bg-white shadow-2xl shadow-black flex flex-row mt-14 ">
          <TouchableOpacity className="w-1/2" onPress={()=>changeTab()}>
            <View className="bg-[#614385] h-full w-full rounded-[14px] flex justify-center items-center">
              <Text className="text-white">Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/2" onPress={()=>changeTab()}>
            <View className=" h-full w-full rounded-[14px] flex justify-center items-center">
              <Text className="text-black">Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        ):(
          <View className="h-7 w-56 rounded-[14px] bg-white shadow-2xl shadow-black flex flex-row mt-14 ">
          <TouchableOpacity className="w-1/2" onPress={()=>changeTab()}>
            <View className=" h-full w-full rounded-[14px] flex justify-center items-center">
              <Text className="text-black">Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/2" onPress={()=>changeTab()}>
            <View className=" bg-[#614385] h-full w-full rounded-[14px] flex justify-center items-center">
              <Text className="text-white">Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        )}

        {login ? (
          <View>
            <View className="w-56 mt-10">
              <View>
                <TextInput
                  className="h-10"
                  placeholder="Enter your email"
                  onChangeText={newText=>setEmail(newText)}
                  inputMode='email'
                ></TextInput>
                <View className="w-full bg-[#EAEAF5] h-[1px] -mt-1"></View>
              </View>
              <View className="pt-6">
                <TextInput className="h-10" placeholder="Password" secureTextEntry={true} onChangeText={newText=>setPassword(newText)}></TextInput>
                <View className="w-full bg-[#EAEAF5] h-[1px] -mt-1"></View>
              </View>
              <View className="mt-2 flex flex-row-reverse">
                <Text className="text-xs text-[#A8A7A7]">Forgot password?</Text>
              </View>
            </View>
            <View className="mt-10">
              <TouchableOpacity onPress={handleSubmit}>
                <View className="flex justify-center items-center bg-[#614385] rounded-[22px] w-56 h-11">
                  <Text className="text-white text-base">Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View className="w-56 mt-10">
              <View>
                <TextInput
                  className="h-10"
                  placeholder="Enter your email"
                ></TextInput>
                <View className="w-full bg-[#EAEAF5] h-[1px] -mt-1"></View>
              </View>
              <View className="pt-6">
                <TextInput className="h-10" placeholder="Password"></TextInput>
                <View className="w-full bg-[#EAEAF5] h-[1px] -mt-1"></View>
              </View>
              <View className="pt-6">
                <TextInput
                  className="h-10"
                  placeholder="Confirm password"
                ></TextInput>
                <View className="w-full bg-[#EAEAF5] h-[1px] -mt-1"></View>
              </View>
              <View className="mt-10">
                <TouchableOpacity>
                  <View className="flex justify-center items-center bg-[#614385] rounded-[22px] w-56 h-11">
                    <Text className="text-white text-base">Sign Up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <Text className="text-white text-xs my-7">OR</Text>
        <View className="flex flex-row gap-10">
          <View className="w-12 h-12">
            <Image
              className="h-full w-full"
              source={require("../img/social/facebook.png")}
            ></Image>
          </View>
          <View className="w-12 h-12">
            <Image
              className="h-full w-full"
              source={require("../img/social/google.png")}
            ></Image>
          </View>
          <View className="w-12 h-12">
            <Image
              className="h-full w-full"
              source={require("../img/social/twitter.png")}
            ></Image>
          </View>
        </View>
      </View>
        ):(
          <View>
            <Text>
              Logined
            </Text>
            <Button onPress={logout} title="Logout"></Button>
          </View>
        )
      }
    </View>
  );
};

export default UserProfile;
