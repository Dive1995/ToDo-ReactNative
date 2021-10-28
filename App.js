import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from "@expo/vector-icons"


import CompletedScreen from './App/screens/CompletedScreen';
import ListingScreen from './App/screens/ListingScreen';
import colors from './App/config/colors';


const Tab = createBottomTabNavigator()

export default function App() {
  const [todo, setTodo] = useState([])
  const [completedTodo, setCompletedTodo] = useState([])




  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator 
        screenOptions={{ 
            headerShown: false,
            tabBarInactiveTintColor:colors.darkGray,
            tabBarActiveTintColor:colors.medium, 
            tabBarActiveBackgroundColor: colors.active, 
            tabBarInactiveBackgroundColor: colors.inactive
        }}>
        <Tab.Screen 
          name="TODO" 
          options={{tabBarIcon:({color, size}) => <MaterialIcons name="add-box" size={size} color={color}/>}}>
          {() => <ListingScreen 
                    todo={todo} 
                    setTodo={setTodo} 
                    setCompletedTodo={setCompletedTodo} 
                    completedTodo={completedTodo}/>}
        </Tab.Screen>
        <Tab.Screen 
          name="Completed" 
          options={{tabBarIcon:({color, size}) => <MaterialIcons name="done-outline" size={size} color={color}/>}}>
            {() => <CompletedScreen 
                      completedTodo={completedTodo} 
                      setCompletedTodo={setCompletedTodo}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
});
