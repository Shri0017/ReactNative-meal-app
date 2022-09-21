import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
export default function FiltersScreen(Props) {
  return (
    <View style={styles.screen}>
      <Text>The Filter Screen!!</Text>
    </View>
  )
}
export const screenOptions= navdata => {
  return{
    headerTitle:'Filter Meals',
  headerLeft: ()  => (
    <TouchableOpacity style={styles.star}  onPress={()=>{navdata.navigation.toggleDrawer()}}>
       <Ionicons name="ios-menu" size={24} color="Black" />
    </TouchableOpacity>)
  }
  
  };
const styles=StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})