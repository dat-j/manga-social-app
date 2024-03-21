import { View, Text } from 'react-native'
import React from 'react'
import Navigator from './navigator/Navigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar translucent={true}/>
      <Navigator/>
    </>
    
  )
}