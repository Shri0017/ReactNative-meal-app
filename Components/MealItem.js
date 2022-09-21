import React from 'react'
import { StyleSheet, View,Text,TouchableOpacity,ImageBackground } from 'react-native'

function MealItem(Props) {
  return (
      <View style={styles.MealItem}>
      <TouchableOpacity onPress={Props.onSelectMeal}>
     <View>
         <View style={{...styles.mealRow , ...styles.mealHeader}}>
             <ImageBackground source={{uri:Props.image}} style={styles.bgImage}>
        <Text style={styles.title}>{Props.title }</Text>
        </ImageBackground>
            </View>
         <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{Props.duration} min</Text>
            <Text>{Props.complexity.toUpperCase()}</Text>
            <Text>{Props.affordabilty.toUpperCase()}</Text>
         </View>

         </View>
      </TouchableOpacity>
      </View>
  )

}

const styles=StyleSheet.create({
    MealItem:{
            height: 200,
            width: '100%',
            backgroundColor:'#f5f5f5',
            marginVertical:20,
            borderRadius:12,
            overflow: 'hidden',
    },
    mealRow:{
        flexDirection:'row',

    },
    mealHeader:{
        height: '85%',
        
    },
    title:{
        fontSize:20,
        color: 'white', 
        backgroundColor:'rgba(0,0,0,0.4)',
        paddingVertical:5,
         textAlign:'center',
    },
    mealDetail:{
        paddingHorizontal:7,
        justifyContent:'space-between',
        alignItems:'center',
        height: '15%',
    },
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent:'flex-end'
    }

})

export default MealItem
