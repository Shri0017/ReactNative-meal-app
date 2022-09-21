import React from 'react'
import { StyleSheet} from 'react-native'
import MealList from '../Components/MealList'
import { MEALS } from '../Data/Dummy-data'

export default function FavoritesScreen(Props) {
  const favmeals= MEALS.filter(meal=>meal.id === 'm1' || meal.id === 'm2')
  return (
   <MealList listdata={favmeals} navigation={Props.navigation}/>
  )
}

export const screenOptions={
headerTitle:"Your Favorites"
}

const styles=StyleSheet.create({});