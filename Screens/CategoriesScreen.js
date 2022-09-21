import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
 import {Ionicons} from '@expo/vector-icons'
import CategoryGridTile from "../Components/CategoryGridTile";
import { CATEGORIES } from "../Data/Dummy-data";

export default function CategoriesScreen(Props) {
  // console.log(Props);

  const renderGridItem = (itemdata) => {
    return <CategoryGridTile 
            title={itemdata.item.title} 
            color={itemdata.item.color}
          onSelect={()=>{
      Props.navigation.navigate("CategoryMeals" ,{
        categoryId:itemdata.item.id,
        categorytitle:itemdata.item.title
        });
    }}/>
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
}

export const screenOptions = navdata => {
 return { headerTitle: "   Meal Categories",
  headerLeft:() => (
    <TouchableOpacity style={styles.star}  onPress={()=>{navdata.navigation.toggleDrawer()}}>
       <Ionicons name="ios-menu" size={24} color="white" />
    </TouchableOpacity>)
}
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
});
