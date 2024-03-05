import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import useFetch from "./useFetch";
import MangaItem from "./MangaItem";

export default function MangaList() {
  const listChapter = useFetch(0);
  console.log(listChapter);
  return (
    <ScrollView alwaysBounceHorizontal={true} horizontal={true}>
      <View style={{ display: "flex", flexDirection: "row", gap: 10, marginHorizontal:2 }}>
        {listChapter.map((item, index) => (
          <MangaItem
            key={index}
            imgsrc={item.image_poster_link_goc}
            title={item.title_manga}
            chapter_new={item.chapter_new}
            rate={item.rate}
          />
        ))}
      </View>
    </ScrollView>
  );
}
