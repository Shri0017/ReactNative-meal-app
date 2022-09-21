import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealList(Props) {
  const renderMealItem = (itemdata) => {
    return (
      <MealItem
        title={itemdata.item.title}
        image={itemdata.item.imageUrl}
        duration={itemdata.item.duration}
        complexity={itemdata.item.complexity}
        affordabilty={itemdata.item.affordabilty}
        onSelectMeal={() => {
          Props.navigation.navigate(
            "MealDetail",
             {
              mealId: itemdata.item.id,
            },
          );
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "95%" }}
        data={Props.listdata}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealList;
