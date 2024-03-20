import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import ListChapter from "../../components/ListChapter";

export default function MangaScreen() {
  const [dataManga, setDataManga] = useState();
  const [info, setInfo] = useState();
  const [hideDes, setHideDes] = useState(true);

  const viewDescription = () => {
    setInfo(dataManga.description);
    setHideDes(!hideDes);
  };
  const hideDescription = () => {
    setInfo(dataManga.description.slice(0, 250));
    setHideDes(!hideDes);
  };

  const fetchData = async () => {
    const res = await axios.get("https://hanico.online/rmanga/control-player");
    try {
      setDataManga(res.data[0]);
      setInfo(res.data[0].description.slice(0, 250));
      console.log(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View className="bg-white h-full">
      <View className="h-[298px] w-full bg-gray-500">
        <Image source={{ uri: dataManga?.poster }} className="h-full" />
      </View>
      <View>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-[#1F1F39] text-[20px] ml-[10px] mt-[10px]">
            {dataManga?.title.length > 30
              ? dataManga?.title.slice(0, 30) + "..."
              : dataManga?.title}
          </Text>
          <View className="flex flex-row items-center mr-[10px] mt-[12px]">
            <Ionicons name={"star"} size={20} color={"#FF6905"} />
            <Text className="text-[20px] text-[#61BFAD]">
              {dataManga?.rate}
            </Text>
          </View>
        </View>
        <Text className="text-[12px] text-[#858597] ml-[10px]">
          {dataManga?.views} Views {dataManga?.chapters.length} chapters
        </Text>
      </View>
      <View className="py-[10px]">
        <Text className="ml-[10px] text-[16px]">Descriptions</Text>

        {hideDes == true && (
          <>
            <Text className="text-xs ml-[10px] text-[#9393A3]">
              {info + "..."}
            </Text>
            <View className="flex justify-center items-center">
              <Ionicons
                onPress={() => viewDescription()}
                name={"chevron-down"}
                color={"black"}
                size={20}
              />
            </View>
          </>
        )}
        {hideDes == false && (
          <>
            <Text className="text-xs ml-[10px] text-[#9393A3]">{info}</Text>
            <View className="flex justify-center items-center">
              <Ionicons
                onPress={() => hideDescription()}
                name={"chevron-up"}
                color={"black"}
                size={20}
              />
            </View>
          </>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataManga?.chapters.map((item, index) => (
          <ListChapter key={index} index={index} />
        ))}
      </ScrollView>
    </View>
  );
}
