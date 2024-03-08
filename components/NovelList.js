import { View, Text, ScrollView } from "react-native";
import React from "react";

import MangaCard from "./MangaCard";
import useFetchNovel from './useFetchNovel';

export default function NovelList({index}) {
    
  const listManga = useFetchNovel(index);
  console.log(listManga)
  return (
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20}}>
        <View>
          {listManga.slice(0, 20).map((item, index) => (
            <MangaCard
              key={index}
              imgsrc={item.image_poster_link_goc}
              author={item.author}
              chapter={item.chapter_new}
              title={item.title_manga}
            />
          ))}
        </View>
      </ScrollView>
  );
}
