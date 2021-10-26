import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import CompletedScreen from './App/screens/CompletedScreen';
import ListingScreen from './App/screens/ListingScreen';


const Tab = createBottomTabNavigator()

export default function App() {
  const [todo, setTodo] = useState([])
  const [completedTodo, setCompletedTodo] = useState([])




  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator screenOptions={{ headerShown: false,tabBarActiveTintColor:"red", tabBarActiveBackgroundColor:'gold'}}>
        <Tab.Screen name="TODO" options={{}}>
          {() => <ListingScreen todo={todo} setTodo={setTodo} setCompletedTodo={setCompletedTodo} completedTodo={completedTodo}/>}
        </Tab.Screen>
        <Tab.Screen name="Completed">
          {() => <CompletedScreen completedTodo={completedTodo} setCompletedTodo={setCompletedTodo}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
