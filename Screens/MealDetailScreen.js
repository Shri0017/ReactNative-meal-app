import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MEALS } from "../Data/Dummy-data";
import {Ionicons} from '@expo/vector-icons'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";

export default function MealDetailScreen(Props) {
  // const mealId = Props.navigation.getParam("mealId");
  const {mealId} = Props.route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView >
                 <View style={styles.screen}>
      <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      
      
        <Text>List of ingradiants.....</Text>
          {selectedMeal.ingradiants.map((itm,index) => <Text key={index}>* {itm}</Text>)}
      
     
        <Text>List of Steps.....</Text>
          {selectedMeal.steps.map((itm,index) => <Text key={index}>* {itm}</Text>)}
      
    </View>
    </ScrollView>
  );
}

export const screenOptions = (navigationData) => {
  // const id = navigationData.navigation.getParam("mealId");
  const {mealId} = navigationData.route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
        <TouchableOpacity style={styles.star} onPress={()=>{console.log('fav click')}}>
           <Ionicons name="ios-star" size={24} color="white" />
        </TouchableOpacity>

      
      // <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //   <Item
      //     title="favorite"
      //     iconName="ios-star-otline"
      //     onPress={() => {
      //       console.log("favorite click");
      //     }}
      //   />
      // </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex:1

  },
  star:{
    paddingRight:30,
  },
  image:{
    width:'100%',
    height:'20%'
  },
  title:{
    fontSize:30,
    fontStyle:'italic',
    margin:'auto',
  },
});
