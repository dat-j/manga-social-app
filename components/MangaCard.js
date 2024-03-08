import { View, Text, Image } from 'react-native'
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MangaCard({imgsrc, author, chapter, title}) {
  return (
    <View style={{display:"flex", flexDirection:"row", gap:20, paddingVertical:"10px", marginHorizontal:"20px"}}>
      <View style={{height:68, width:68, borderRadius:"8px"}}>
        <Image style={{height:"100%", width:"100%", borderRadius:"8px"}} source={{uri:imgsrc} }></Image>
      </View>
      <View style={{width:"100%", gap:5}}>
        <Text style={{fontFamily:"Poppins-semibold", fontSize:"14px", color:"#333333"}}>{title.length>35?(title.slice(0,35)+"..."):(title)}</Text>
        <View style={{display:"flex", flexDirection:"row", gap: 2}}>
            <Ionicons name='person' size={12} color={"#B8B8D2"}/>
            <Text style={{fontFamily:"Poppins-regular", fontSize:12, color:"#B8B8D2"}}>{author.length>15?(author.slice(0,15)+"..."):(author)}</Text>
        </View>
        <View style={{backgroundColor:"#FFEBF0", alignSelf:"flex-start", borderRadius:6}}>
            <Text style={{fontFamily:"Poppins-regular", fontSize:10, color:"#FF6905", padding:2}}>
                {chapter}
            </Text>
        </View>
      </View>
    </View>
  )
}