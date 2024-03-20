import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import MangaScreen from "../navigator/screen/MangaScreen";

const MangaItem =({ imgsrc, rate, title, author, path }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MangaScreen',{path:path})}>
      <View className="bg-gray-500 h-[130px] w-[115px] rounded-lg ml-3">
        <Image source={{ uri: imgsrc }} className="h-full w-full rounded-lg" />

        <Text className="pt-3 pb-1 text-sm text-[#333333]">
          {title.length > 15 ? title.slice(0, 15) + "..." : title}
        </Text>
        <Text className="text-xs text-[#939393]">
          {author.length > 15 ? author.slice(0, 15) + "..." : author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default MangaItem;