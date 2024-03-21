import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MangaScreen from './screen/MangaScreen';
import NovelScreen from './screen/NovelScreen';
import HomeScreen from './screen/HomeScreen';
import UserProfile from './screen/UserProfile';
import ReadManga from './screen/ReadManga';
import UserProfileLogined from './screen/UserProfileLogined';
const Stack = createNativeStackNavigator();
const MangaPageNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='MangaScreen' component={MangaScreen}/>
        <Stack.Screen name='ReadManga' component={ReadManga}/>
    </Stack.Navigator>
  )
}
export {MangaPageNavigator}



const NovelPageNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="NovelScreen" component={NovelScreen}/>
        
      </Stack.Navigator>
    )
  }
  export {NovelPageNavigator}



  const UserPageNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='User' component={UserProfileLogined}/>
          <Stack.Screen name='Login' component={UserProfile}/>
      </Stack.Navigator>
    )
  }
  export {UserPageNavigator}
