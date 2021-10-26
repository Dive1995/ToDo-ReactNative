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
            tabBarActiveTintColor:"white", 
            tabBarActiveBackgroundColor: colors.active, 
            tabBarInactiveBackgroundColor: colors.inactive
        }}>
        <Tab.Screen 
          name="TODO" 
          options={{tabBarIcon:() => <MaterialIcons name="add-box" size={25}/>}}>
          {() => <ListingScreen 
                    todo={todo} 
                    setTodo={setTodo} 
                    setCompletedTodo={setCompletedTodo} 
                    completedTodo={completedTodo}/>}
        </Tab.Screen>
        <Tab.Screen 
          name="Completed" 
          options={{tabBarIcon:() => <MaterialIcons name="done-outline" size={20}/>}}>
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
