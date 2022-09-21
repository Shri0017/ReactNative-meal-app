import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { MealNavigator , MainNavigator} from './MealNavigator'

function AppNavigator() {
  return (
   <NavigationContainer>
    {/* <MealNavigator /> */}
    <MainNavigator />
   </NavigationContainer>
  )
}

export default AppNavigator