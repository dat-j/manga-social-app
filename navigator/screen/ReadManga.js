import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
const arr = ["a", "b", "c"];
export default function ReadManga({ route }) {
  const [chapterData, setChapterData] = useState("");
  const fetchData = async () => {
    try {
      const res = await axios.get("" + route.params.chapterLink);
      setChapterData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(chapterData);
  }, []);
  return (
    <ScrollView>
      {chapterData?.image_chapter?.slice(0,20).map((item, index) => (
        <View className="flex justify-center items-center w-full h-screen m-0 p-0">
          <Image
            className="w-full h-full "
            src={item}
            key={index}
            resizeMode="contain"
          />
        </View>
      ))}
    </ScrollView>
  );
}
