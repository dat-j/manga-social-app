import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ListChapter({index}) {
  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent:"space-between" , paddingHorizontal:10, marginVertical:10}}
    >
      <View style={{display:"flex", flexDirection:"row", gap:20}}>
        <Text
          style={{
            fontFamily: "Poppins-regular",
            fontSize: 24,
            color: "#B8B8D2"
          }}
        >
          {index<9?("0"+(index+1)):(index+1)}
          
        </Text>
        <View>
          <Text
            style={{
              fontFamily: "Poppins-regular",
              fontSize: 14,
              color: "black",
            }}
          >
            {"Chapter " +(index+1)}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-regular",
              fontSize: 12,
              color: "#B8B8D2",
            }}
          >
            30 pages
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 44,
          width: 44,
          borderRadius: 44,
          backgroundColor: "#54BAB9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name={"book-outline"} size={20} color={"white"} />
      </View>
    </View>
  );
}
