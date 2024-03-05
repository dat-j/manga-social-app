import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { SearchBarAndroid } from "@rneui/base/dist/SearchBar/SearchBar-android";
function HomeScreen() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View>
      <Text>Welcome Tran Dat</Text>
      <SearchBarAndroid
        placeholder="Find Something..."
        onChangeText={updateSearch}
        value={search}
        inputContainerStyle={style.inputSearch}
      />
    </View>
  );
}
export default HomeScreen;
const style = StyleSheet.create({
  inputSearch: {},
});
