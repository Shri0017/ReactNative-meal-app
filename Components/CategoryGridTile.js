import React from 'react'
import { StyleSheet, View,TouchableOpacity,Text } from 'react-native'

export default function CategoryGridTile(Props) {
  return (
    <TouchableOpacity
        style={styles.gridItem}
        onPress={Props.onSelect} >
        <View style={{...styles.textContainer,...{backgroundColor: Props.color}}}>
          <Text style={styles.title}>{Props.title}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        
      },
      textContainer:{
        flex: 1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        elevation:3,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
      },
      title:{
        fontSize:20,
        fontStyle:'italic'
      }
})