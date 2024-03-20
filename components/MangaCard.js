import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const MangaCard = ({ imgsrc, author, chapter, title, path }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("MangaScreen",{path:path})}>
      <View className="flex flex-row gap-5 py-3 mx-5">
        <View className="h-16 w-16 rounded-lg">
          <Image
            className="h-full w-full rounded-lg"
            source={{ uri: imgsrc }}
          ></Image>
        </View>
        <View className="w-full gap-1">
          <Text className="text-sm text-[#333333]">
            {title.length > 35 ? title.slice(0, 35) + "..." : title}
          </Text>
          <View className="flex flex-row gap-[2px]">
            <Ionicons name="person" size={12} color={"#B8B8D2"} />
            <Text className="text-[12px] text-[#B8B8D2]">
              {author.length > 15 ? author.slice(0, 15) + "..." : author}
            </Text>
          </View>
          <View className="bg-[#FFEBF0] self-start rounded-md">
            <Text className="text-[10px] text-[#FF6905] p-[2px]">
              {chapter}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MangaCard;
