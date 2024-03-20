import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MangaItem({ imgsrc, rate, title, author, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("MangaScreen")}>
      <View className="bg-gray-500 h-[130px] w-[115px] rounded-lg ml-3">
        <Image source={{ uri: imgsrc }} className="h-full w-full rounded-lg" />

        <Text className="pt-3 pb-1 text-sm text-[#333333]">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </Text>
        <Text className="text-xs text-[#939393]">
          {author.length > 15 ? author.slice(0, 15) + "..." : author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
