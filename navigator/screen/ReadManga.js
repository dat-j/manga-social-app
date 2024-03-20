import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ReadManga({ route }) {
  const [chapterData, setChapterData] = useState();
  const [imgChapter,setImgChapter] = useState("");
  const fetchData =  () => {
    try {
      const res =  axios.get("" + route.params.chapterLink);
      setChapterData(res.data);
      setImgChapter(res.data.image_chapter)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(imgChapter);
  
  useEffect(() => {
    fetchData();
    
  }, []);
  return (
    <View>
    { imgChapter && ( imgChapter?.map((item,index)=>{
            <Text key={index} className="text-black text-2xl">{item}</Text>
        }))}
       
    </View>
  );
}
