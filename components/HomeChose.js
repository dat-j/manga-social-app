import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Recomened from "./Recomened";
import Comedy from "./Comedy";
import BestOfTheWeek from "./BestOfTheWeek";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeChose() {
  const [render, setRender] = useState(1);
  const [btnStyle1, setBtnStyle1] = useState(buttonStyle.pressed);
  const [btnStyle2, setBtnStyle2] = useState(buttonStyle.unpress);
  const [btnStyle3, setBtnStyle3] = useState(buttonStyle.unpress);
  const pressBtn = (index) => {
    if (index == 1) {
      setRender(1);
      setBtnStyle1(buttonStyle.pressed);
      setBtnStyle2(buttonStyle.unpress);
      setBtnStyle3(buttonStyle.unpress);
    } else if (index == 2) {
      setRender(2);
      setBtnStyle2(buttonStyle.pressed);
      setBtnStyle1(buttonStyle.unpress);
      setBtnStyle3(buttonStyle.unpress);
    } else if (index == 3) {
      setRender(3);
      setBtnStyle3(buttonStyle.pressed);
      setBtnStyle2(buttonStyle.unpress);
      setBtnStyle1(buttonStyle.unpress);
    }
  };
  return (
    <>
      <View className="mt-8 flex flex-row pl-5 pt-5 gap-3 ">
        <Text onPress={() => pressBtn(1)} style={btnStyle1}>
          Recomened
        </Text>
        <Text onPress={() => pressBtn(2)} style={btnStyle2}>
          Comedy
        </Text>
        <Text onPress={() => pressBtn(3)} style={btnStyle3}>
          Best of the week
        </Text>
      </View>
      {render == 1 && <Recomened />}
      {render == 2 && <Comedy />}
      {render == 3 && <BestOfTheWeek />}
    </>
  );
}
const buttonStyle = StyleSheet.create({
  unpress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 28,
    borderRadius: 20,
    color: "#858597",
    padding: 5,
  },
  pressed: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#61BFAD",
    height: 28,
    borderRadius: 20,
    color: "white",
    padding: 5,
  },
});
