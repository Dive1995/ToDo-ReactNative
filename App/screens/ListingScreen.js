import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import AppText from '../components/AppText'
import CreateButton from '../components/CreateButton'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import Seperator from '../components/Seperator'
import colors from '../config/colors'

const todos = [
    {id:1, title: "Create TODO app 📱"},
    {id:2, title: "Walk with Dog 🐶"},
    {id:3, title: "Eat Apple 🍎"},
]

function ListingScreen() {
   return (
       <Screen style={{padding: 10}}>
          <AppText style={{fontSize: 35, color: colors.primary}}>ToDo</AppText>
          <FlatList
             style={styles.list}
              data={todos}
              renderItem={({item}) => (
                  <ListItem title={item.title}/>
              )}
              ItemSeparatorComponent={() => <Seperator/>}
          />
          <View style={styles.buttonContainer}>
            <CreateButton/>
          </View>
       </Screen>
   )
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:20,
        left:0,
        right:0
    },
    list:{
        paddingHorizontal: 20,
        marginTop: 30,
    }
})

export default ListingScreen