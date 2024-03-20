import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import useFetch from "./useFetch";
import MangaItem from "./MangaItem";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function MangaList() {
  const listChapter = useFetch(0);
  return (
    <View
    className="flex flex-row gap-3 mr-1 h-[200px]"
    >
      <ScrollView
        alwaysBounceHorizontal={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {listChapter.map((item, index) => (
          <MangaItem
          
            key={index}
            imgsrc={item.image_poster_link_goc}
            title={item.title_manga}
            chapter_new={item.chapter_new}
            rate={item.rate}
            author={item.author}
            path={item.path_segment_manga}
          />
        ))}
      </ScrollView>
    </View>
  );
}
