import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, AppRegistry } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import MealNavigator from './Navigation/MealNavigator';
import AppNavigator from './Navigation/AppNavigator';
import { registerRootComponent } from 'expo'
const featchFont = ()=>{
  return Font.loadAsync({
    'open-sans-regular':require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/Fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontloaded,setFontLoaded]=useState(false);
  if(!fontloaded)
  {
     return <AppLoading  startAsync={featchFont} onFinish={setFontLoaded(true)}/>
  }
  return (
      <AppNavigator/>
  );
}
registerRootComponent(App);
const styles = StyleSheet.create({
  
});
registerRootComponent(App);