import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function ListChapter({ index,chapterLink, chapters }) {
  const navigation = useNavigation();
  return (
    <View className="flex flex-row items-center justify-between px-[10px] my-[10px] ">
      <View className="flex flex-row gap-5">
        <Text className="text-2xl text-[#B8B8D2]">
          {index < 9 ? "0" + (index + 1) : index + 1}
        </Text>
        <View>
          <Text className="text-sm text-black">{"Chapter " + (index + 1)}</Text>
          <Text className="text-[12px] text-[#B8B8D2]">30 pages</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('ReadManga',{chapterLink:chapterLink})}>
        <View
          style={{
            height: 44,
            width: 44,
            borderRadius: 44,
            backgroundColor: "#54BAB9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name={"book-outline"} size={20} color={"white"} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
