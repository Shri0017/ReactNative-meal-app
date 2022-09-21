import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import 'react-native-reanimated';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Colors from "../Constants/Colors";
import CategoriesScreen ,{screenOptions as CategoriesScreenOptions} from "../Screens/CategoriesScreen";
import CategoryMealScreen, {screenOptions as CategoryMealScreenoptions} from "../Screens/CategoryMealScreen";
import MealDetailScreen , {screenOptions as MealDetailScreenOptions} from "../Screens/MealDetailScreen";
import FavoritesScreen ,{screenOptions as FavoritesScreenOptions} from "../Screens/FavoritesScreen";
import FiltersScrren ,{screenOptions as FiltersScrrenOptions} from "../Screens/FiltersScreen"
import { createDrawerNavigator } from "@react-navigation/drawer";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'


const defaultStackNavOptions ={
   headerStyle: {
      backgroundColor: Platform.OS == "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS == "android" ? "white" : Colors.primaryColor,
  };

const MealStackNavigator = createNativeStackNavigator();

export const MealNavigator = () => {

  return <MealStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
          <MealStackNavigator.Screen name="Categories" component={CategoriesScreen} options={CategoriesScreenOptions}/>
          <MealStackNavigator.Screen name="CategoryMeals" component={CategoryMealScreen} options={CategoryMealScreenoptions}/>
          <MealStackNavigator.Screen name="MealDetail" component={MealDetailScreen} options={MealDetailScreenOptions}/>
    </MealStackNavigator.Navigator>
}

// const MealNavigator = createStackNavigator(
//   {
//     Categories: {
//       screen: CategoriesScreen,
//       navigationOptions: {
//         headerTitle: "Meal Categories",
//       },
//     },
//     CategoryMeals: {
//       screen: CategoryMealScreen,
//     },
//     MealDetail: MealDetailScreen,
//   },
//   {
//     // initialRouteName:'MealDetail',
//     defaultNavigationOptions: defaultStackNavOptions,
//   }
// );

const FavStackNavigator = createNativeStackNavigator();
const FavNavigator = () => {
  return <FavStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <FavStackNavigator.Screen name="Favorites" component={FavoritesScreen} options={FavoritesScreenOptions}/>
        <FavStackNavigator.Screen name="MealDetail" component={MealDetailScreen} options={MealDetailScreenOptions}/>
  </FavStackNavigator.Navigator>
}

// const favNavigator = createStackNavigator({
//   Favorites:FavoritesScreen,
//   MealDetail : MealDetailScreen
// },{
//   // initialRouteName:'MealDetail',
//   defaultNavigationOptions: defaultStackNavOptions,
// });

const filterNavigator=createStackNavigator({
  Filters:FiltersScrren 
})

// const tabScreenConfig = { 
//   Meals: {
//   screen: MealNavigator,
  // navigationOptions: {
  //   tabBarIcon: (tabInfo) => {
  //     return (
  //       <Ionicons
  //         name="ios-restaurant"
  //         size={25}
  //         color={tabInfo.tintColor}
  //       />
  //     );
  //   },
  //   tabBarColor:Colors.primaryColor,
  // },
// },
// Favorites: {
//   screen: favNavigator,
  // navigationOptions: {
  //   tabBarLabel: "Favorites!",
  //   tabBarIcon: (tabInfo) => {
  //     return (
  //       <Ionicons
  //         name="ios-star"
  //         size={25}
  //         color={tabInfo.tintColor}
  //       />
  //     );
  //   },
  //   tabBarColor:Colors.accentColor ,

  // },
// },
// };

const MealsTabNavigator = createMaterialBottomTabNavigator();

const MealsFavNavigator = () => {
  return <MealsTabNavigator.Navigator   shifting={true} activeColor='white'  barStyle={{ backgroundColor: 'tomato' }}>
        <MealsTabNavigator.Screen name="Meals" component={MealNavigator} options={{
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="ios-restaurant"
          size={25}
          color="white"
        />
      );
    },
    tabBarColor:Colors.primaryColor,
  }}/>
        <MealsTabNavigator.Screen name="AllFavorites" component={FavNavigator} options={{
    tabBarLabel: "Favorites!",
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="ios-star"
          size={25}
          color="white"
        />
      );
    },
  }}/>
  </MealsTabNavigator.Navigator>

}

// const   MealsFavNavigator =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator(
//       tabScreenConfig,
      // {
      //   activeTintColor:'white',
      //   shifting:true,
      // }
//     )
//     : createBottomTabNavigator(
//       tabScreenConfig,
//         {
//           tabBarOptions: {
//             activeTintColor: Colors.accentColor,
//           },
//         }
//       );

const mainDrawerNavigator = createDrawerNavigator();

export const MainNavigator = () => {
  return <mainDrawerNavigator.Navigator screenOptions={{
    drawerActiveTintColor:Colors.accentColor
  }} >
    
      <mainDrawerNavigator.Screen name="mealsFav" component={MealsFavNavigator} options={{
        drawerLabel:'Meals',
    headerShown: false,
  }}/>
      <mainDrawerNavigator.Screen name="Filters" component={FiltersScrren} options={{FiltersScrrenOptions,headerStyle:{backgroundColor:Colors.primaryColor},headerTintColor:'white'}}/>
  </mainDrawerNavigator.Navigator>
} 
// const mainNavigator = createDrawerNavigator({
//    MealsFavs:MealsFavNavigator,
//    Filters: filterNavigator
//  })

// export default createAppContainer(MealsFavNavigator);
