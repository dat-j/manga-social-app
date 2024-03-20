import { View, Text, ScrollView } from "react-native";
import React from "react";
import useFetch from "./useFetch";
import MangaCard from "./MangaCard";

export default function Recomened() {
  const listManga = useFetch(4);
  return (
      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
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
