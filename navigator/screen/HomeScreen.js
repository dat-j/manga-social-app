import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import { SearchBarAndroid } from "@rneui/base/dist/SearchBar/SearchBar-android";
import MangaList from "../../components/MangaList";
import AvatarUser from "../../components/AvatarUser";
import Recomened from "../../components/Recomened";
import HomeChose from "../../components/HomeChose";

function HomeScreen() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  

  return (
    <View style={{ height: "100%", backgroundColor: "white",  }}>
      <AvatarUser />
      <SearchBarAndroid
        placeholder="Find Something..."
        onChangeText={updateSearch}
        value={search}
        inputContainerStyle={{}}
        containerStyle={{ borderRadius: 20, padding: 0, opacity: "0.8", backgroundColor:"#F4F3FD", marginHorizontal:"10px", height:"48px" }}
        placeholderTextColor={"#B8B8D2"}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"center"
        }}
      >
        <Text
          style={{
            fontSize: "14px",
            paddingVertical: "10px",
            color: "#333333",
            fontFamily:"Poppins-semibold",
            marginLeft:"10px"
          }}
        >
          Trending Manga
        </Text>
        <Text
          style={{
            fontSize: "24px",
            paddingVertical: "10px",
            color: "#858597",
            fontFamily:"Poppins-semibold"
          }}
        >
          ...
        </Text>
      </View>
      <MangaList  />
      <HomeChose/>
    </View>
  );
}
export default HomeScreen;
