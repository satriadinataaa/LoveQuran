import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen'
import HomePage from './pages/HomePage';
import SurahPage from './pages/SurahPage'
import SemuaSurah from './pages/SemuaSurah';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
    headerShown: false
      }} initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="SurahPage" component={SurahPage}/>
      <Stack.Screen name="SemuaSurah" component={SemuaSurah}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})