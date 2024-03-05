import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import { SearchBarAndroid } from "@rneui/base/dist/SearchBar/SearchBar-android";
import MangaList from "../../components/MangaList";
const background = require("../img/background/bg.jpg");
function HomeScreen() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={background}
        style={{ height: "100%", width: "100%" }}
      >
        <Text
          style={{
            fontSize: 24,
            paddingVertical: 20,
            paddingLeft: 4,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Welcome, Tran Dat
        </Text>
        <SearchBarAndroid
          placeholder="Find Something..."
          onChangeText={updateSearch}
          value={search}
          inputContainerStyle={{}}
          containerStyle={{ borderRadius: 20, padding: 0, opacity: "0.8" }}
        />
        <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
          <Text
            style={{
              fontSize: 24,
              paddingVertical: 10,
              color: "white",
              fontWeight: "bold",
            }}
          >
            New Relase
          </Text>
          <Text
            style={{
              fontSize: 24,
              paddingVertical: 10,
              color: "white",
              fontWeight: "bold",
            }}
          >
            See All
          </Text>
        </View>
        <MangaList />
      </ImageBackground>
    </View>
  );
}
export default HomeScreen;
