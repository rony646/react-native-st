
import React, { useState } from 'react';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Button, 
    ScrollView, 
    FlatList } 
  from 'react-native';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goal}])
    // console.log(goal)
  }

  const removeGoalHandler = (goalId) => {
     setCourseGoals(currentGoals => {
       return currentGoals.filter(goal => goal.key !== goalId)
      })
  }

  return (
    <View style={styles.screen}>

      <GoalInput addGoalHandler={addGoalHandler}/>

      <FlatList data={courseGoals} renderItem={itemData => (
            <GoalItem onDelete={() => removeGoalHandler(itemData.item.key)} title={itemData.item.value}/>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  }
});
