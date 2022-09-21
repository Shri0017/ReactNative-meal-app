import React from "react";
import { StyleSheet } from "react-native";

import MealList from "../Components/MealList";

import { CATEGORIES, MEALS } from "../Data/Dummy-data";

export default function CategoryMealScreen(Props) {
  // const catId = Props.navigation.getParam("categoryId");
  const {categoryId} = Props.route.params;
  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );

  return <MealList listdata={displayedMeals} navigation={Props.navigation} />;
}

export const screenOptions = (navigationdata) => {
  // console.log(navigationdata);
  // const catId = navigationdata.navigation.getParam("categoryId");
  const {categoryId} = navigationdata.route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({});
