import { View, Text, ScrollView, Image, SafeAreaView, Button, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ReadManga({ route }) {
  const [chapterData, setChapterData] = useState("");
  const [chosedItem, setChosedItem] = useState(1);
  const [urlRecentChapter, setUrlRecentChapter] = useState(route.params.chapterLink);
  const [chapterNum, setChapterNum] = useState();
  const indexChapter = urlRecentChapter.indexOf("chapter");
  const urlChapter = urlRecentChapter.substring(0, indexChapter); 
  

  const nextChap = () => {
    
    setChapterNum(chapterNum+1)
    setUrlRecentChapter(urlChapter + "chapter-"+ chapterNum);
    
  };
  console.log("chapter:", urlRecentChapter)

  const prevChap = () => {
    
    setChapterNum(chapterNum-1)
    setUrlRecentChapter(urlChapter + "chapter-"+ chapterNum);
    
  };


  
  const fetchData = async () => {
    
    
    try {
      const res = await axios.get("" + urlRecentChapter);
      setChapterNum(Number(urlRecentChapter.substring(indexChapter + 8)))
      setChapterData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20
    );
  };

  const insets = useSafeAreaInsets();


  useEffect(() => {
    fetchData();
  }, [urlRecentChapter]);
  const dataDropdown = [
    { label: "New Release Novel", value: 1 },
    { label: "Recent Novel", value: 2 },
    { label: "Recommended Novel", value: 3 },
    { label: "Comming Soon Novel", value: 4 },
    { label: "Top 15 Best Novel Of The Week", value: 5 },
    { label: "Comedy Novel", value: 6 },
  ];
  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      <ScrollView>
      {chapterData?.image_chapter?.map((item, index) => (
        <View className="flex justify-center items-center w-full h-screen m-0 p-0" key={index}>
          <Image
            className="w-full h-full "
            src={item}
            resizeMode="contain"
          />
        </View>
      ))}
      
    </ScrollView>
    <View className="bg-red-400 h-14 w-full fixed flex flex-row justify-evenly items-center">
        <TouchableOpacity onPress={()=>prevChap()}>
          <View className="w-12 bg-blue-500 h-8 rounded-xl flex justify-center items-center"><Text className="text-white text-sm">Back</Text></View>
        </TouchableOpacity>
        {/* <Dropdown
        data={dataDropdown}
        maxHeight={300}
        onChange={(item) => handleChose(item)}
        labelField="label"
        valueField="value"
        placeholder="Select somthing"
        value={chosedItem}
        placeholderStyle={{
          color: "#858597",
          marginHorizontal: 20,
          fontFamily: "Poppins-regular",
          fontSize: 14,
          marginRight:5
        }}
        selectedTextStyle={{
          color: "#858597",
          marginHorizontal: 20,
          fontFamily: "Poppins-regular",
          fontSize: 14,
          marginRight:5
        }}
        style={{
          marginHorizontal: 10,
          backgroundColor: "#F4F3FD",
          borderRadius: 20,
          height: 48,
          opacity: 0.8,
          padding: 0,
          width:250,
          fontFamily: "Poppins-regular",
        }}
      /> */}
      <View className="w-60 bg-slate-300 flex items-center justify-center h-7 rounded-lg">
        <Text>{"Chapter " + chapterNum}</Text>
      </View>
      <TouchableOpacity onPress={()=>nextChap()}>
      <View className="w-12 bg-blue-500 h-8 rounded-xl flex justify-center items-center"><Text className="text-white text-sm">Next</Text></View>
        </TouchableOpacity>
      
    </View>
    </View>
  );
}
