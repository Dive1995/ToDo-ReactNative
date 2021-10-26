import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListingScreen from './App/screens/ListingScreen';

export default function App() {
  const [todo, setTodo] = useState([])

  return (
    <View style={styles.container}>
      <ListingScreen todo={todo} setTodo={setTodo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
