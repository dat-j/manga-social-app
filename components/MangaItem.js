import { View, Text, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MangaItem({ imgsrc, rate, title, author }) {
  return (
    <View
      style={{
        backgroundColor: "grey",
        height: "130px",
        width: "115px",
        borderRadius: "8px",
        marginLeft: "10px",
      }}
    >
      <Image
        source={{ uri: imgsrc }}
        style={{ height: "100%", width: "100%", borderRadius: "8px" }}
      />

      <Text
        style={{
          paddingTop: 10,
          paddingBottom: 5,
          fontFamily: "Poppins-semibold",
          fontSize: "14px",
          color: "#333333",
        }}
      >
        {title.length > 20 ? title.slice(0, 20) + "..." : title}
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-regular",
          fontSize: "10px",
          color: "#939393",
        }}
      >
        {author.length > 15 ? author.slice(0, 15) + "..." : author}
      </Text>
    </View>
  );
}
