import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import ListChapter from "../../components/ListChapter";

export default function MangaScreen() {
  const [dataManga, setDataManga] = useState();
  const [info, setInfo] = useState();
  const [hideDes, setHideDes] = useState(true);

  const viewDescription = () => {
    setInfo(dataManga.description);
    setHideDes(!hideDes);
  };
  const hideDescription = () => {
    setInfo(dataManga.description.slice(0, 250));
    setHideDes(!hideDes);
  };

  const fetchData = async () => {
    const res = await axios.get("https://hanico.online/rmanga/control-player");
    try {
      setDataManga(res.data[0]);
      setInfo(res.data[0].description.slice(0, 250));
      console.log(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ height: 298, width: "100%", backgroundColor: "grey" }}>
        <Image source={{ uri: dataManga?.poster }} style={{ height: "100%" }} />
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-semibold",
              color: "#1F1F39",
              fontSize: 20,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            {dataManga?.title.length > 30
              ? dataManga?.title.slice(0, 30) + "..."
              : dataManga?.title}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
              marginTop: 12,
            }}
          >
            <Ionicons name={"star"} size={20} color={"#FF6905"} />
            <Text
              style={{
                fontFamily: "Poppins-semibold",
                fontSize: 20,
                color: "#61BFAD",
              }}
            >
              {dataManga?.rate}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "Poppins-regular",
            fontSize: 12,
            color: "#858597",
            marginLeft: 10,
          }}
        >
          {dataManga?.views} Views {dataManga?.chapters.length} chapters
        </Text>
      </View>
      <View style={{ paddingVertical: 10 }}>
        <Text
          style={{
            marginLeft: 10,
            fontFamily: "Poppins-semibold",
            fontSize: 16,
          }}
        >
          Descriptions
        </Text>

        {hideDes == true && (
          <>
            <Text
              style={{
                fontFamily: "Poppins-regular",
                fontSize: 12,
                marginLeft: 10,
                color:"#9393A3"
              }}
            >
              {info + "..."}
            </Text>
            <Ionicons
              onPress={() => viewDescription()}
              style={{ marginHorizontal: "auto", marginVertical: 5 }}
              name={"chevron-down"}
              color={"black"}
              size={20}
            />
          </>
        )}
        {hideDes == false && (
          <>
            <Text
              style={{
                fontFamily: "Poppins-regular",
                fontSize: 12,
                marginLeft: 10,
                color:"#9393A3"
              }}
            >
              {info}
            </Text>
            <Ionicons
              onPress={() => hideDescription()}
              style={{ marginHorizontal: "auto", marginVertical: 5 }}
              name={"chevron-up"}
              color={"black"}
              size={20}
            />
          </>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        dataManga?.chapters.map((item,index)=>(
          <ListChapter key={index} index={index} />
        ))
      }
      </ScrollView>
    </View>
  );
}
