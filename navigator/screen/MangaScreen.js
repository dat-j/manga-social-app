import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MangaScreen() {
  const [dataManga, setDataManga] = useState();
  const fetchData = async () => {
    const res = await axios.get("https://hanico.online/rmanga/manga-pf992540");
    try {
      setDataManga(res.data[0]);
      console.log(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{backgroundColor:"white", height:"100%"}}>
      <View style={{height:298, width:"100%", shadowColor:"black", shadowOpacity:1, shadowRadius:30, shadowOffset:{height:-10, width:10}}}>
        <Image source={{uri:dataManga?.poster}} style={{height:"100%"}}/>
      </View>
      <Text>{dataManga?.title.length>30?(dataManga?.title.slice(0,30)+"..."):dataManga?.title}</Text>
      <Text>
        {dataManga?.views} Views {dataManga?.chapters.length}
      </Text>
    </View>
  );
}
