import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import { SearchBarAndroid } from "@rneui/base/dist/SearchBar/SearchBar-android";
import MangaList from "../../components/MangaList";
import AvatarUser from "../../components/AvatarUser";
import HomeChose from "../../components/HomeChose";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function HomeScreen() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const insets = useSafeAreaInsets();
  return (
    <View
      className="h-full bg-white"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <AvatarUser />
      <SearchBarAndroid
        placeholder="Find Something..."
        onChangeText={updateSearch}
        value={search}
        inputContainerStyle={{}}
        containerStyle={{
          borderRadius: 20,
          padding: 0,
          opacity: 0.8,
          backgroundColor: "#F4F3FD",
          marginHorizontal: 10,
          height: "48px",
        }}
        placeholderTextColor={"#B8B8D2"}
      />
      <View className="flex flex-row justify-between items-center">
        <Text className="text-sm py-3 ml-3 text-[#333333]">Trending Manga</Text>
        <Text className="text-2xl py-3 text-[#858597]">...</Text>
      </View>
      <MangaList />
      <HomeChose />
    </View>
  );
}
export default HomeScreen;
