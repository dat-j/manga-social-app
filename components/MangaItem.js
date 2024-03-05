import { View, Text, Image } from 'react-native'
import React from 'react'
import  Ionicons  from 'react-native-vector-icons/Ionicons';

export default function MangaItem({imgsrc,rate,title,chapter_new}) {
  return (
    <View style={{backgroundColor:"grey", height:200, width:120}}>
        <Image source={{uri:imgsrc}} style={{height:"100%", width:"100%"}}/>
        <Text style={{paddingTop:10}}>{title.length>30?(title.slice(0,30)+"..."):title}</Text>
        <Text>{chapter_new}</Text>
        <View style={{backgroundColor:"grey", alignItems:"center", justifyContent:"center", height:40, width:40, borderRadius:60, zIndex:1, display:"flex", position:"absolute", opacity:0.7}}>
            <Text style={{fontWeight:"bold"}}>{rate}</Text>
            <Ionicons name="star"/>
        </View>
    </View>
  )
}