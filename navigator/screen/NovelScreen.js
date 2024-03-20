import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import AvatarUser from "../../components/AvatarUser";
import { Dropdown } from "react-native-element-dropdown";
import NovelList from "./../../components/NovelList";
function NovelScreen() {
  const [search, setSearch] = useState("");
  const [chosedItem, setChosedItem] = useState(1);

  const updateSearch = (search) => {
    setSearch(search);
  };
  const handleChose = (item) => {
    setChosedItem(item.value);
    console.log(item.value);
  };
  const dataDropdown = [
    { label: "New Release Novel", value: 1 },
    { label: "Recent Novel", value: 2 },
    { label: "Recommended Novel", value: 3 },
    { label: "Comming Soon Novel", value: 4 },
    { label: "Top 15 Best Novel Of The Week", value: 5 },
    { label: "Comedy Novel", value: 6 },
  ];

  return (
    <View className="h-full bg-slate-100">
      <AvatarUser />
      <Dropdown
        data={dataDropdown}
        maxHeight={300}
        onChange={(item) => handleChose(item)}
        labelField="label"
        valueField="value"
        placeholder="Select somthing"
        value={chosedItem}
        placeholderStyle={{
          color: "#858597",
          marginHorizontal: 20,
          fontFamily: "Poppins-regular",
          fontSize: 14,
          marginRight:5
        }}
        selectedTextStyle={{
          color: "#858597",
          marginHorizontal: 20,
          fontFamily: "Poppins-regular",
          fontSize: 14,
          marginRight:5
        }}
        style={{
          marginHorizontal: 10,
          backgroundColor: "#F4F3FD",
          borderRadius: 20,
          height: 48,
          opacity: 0.8,
          padding: 0,
          fontFamily: "Poppins-regular",
        }}
      />
      <NovelList index={chosedItem} key={chosedItem} />
    </View>
  );
}
export default NovelScreen;
