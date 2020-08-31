
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
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
     setCourseGoals(currentGoals => {
       return currentGoals.filter(goal => goal.key !== goalId)
      })
  }

  const cancelGoalAddHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>

      <Button title="Add your goal" onPress={() => setIsAddMode(true)}/>

      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler}/>

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
