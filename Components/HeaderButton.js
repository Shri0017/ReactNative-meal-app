import React from "react";
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'
import { StyleSheet, View } from "react-native";

import Colors from "../Constants/Colors";


const CustomHeaderButton= Props =>{
  return (
  <HeaderButton {...Props} IconComponent={Ionicons} iconSize={23} color={Colors.primaryColor}/>
  )
}
const styles=StyleSheet.create({})

export default CustomHeaderButton;
