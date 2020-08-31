
import React, { useState } from 'react';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

import { 
    StyleSheet,  
    View,
    Button,
    FlatList } 
  from 'react-native';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

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

      <Button title="Add your goal" onPress={() => setIsAddMode(true)}/>

      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler}/>

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
