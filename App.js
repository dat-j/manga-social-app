import { View, Text } from 'react-native'
import React from 'react'
import Navigator from './navigator/Navigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Navigator/>
  )
}