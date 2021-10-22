import React, { useState } from 'react'
import { View, StyleSheet, Text, FlatList, Modal, Button } from 'react-native'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
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
    const [modalVisible, setModalVisible] = useState(false)
    const [text, setText] = useState()
    console.log(text)

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
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
          >
              <View style={styles.modal}>
                  <AppText>New TODO</AppText>
                  <AppTextInput style={{backgroundColor:"#fff", marginVertical:15}} placeholder="Whats on your mind!!" onChangeText={(text) => setText(text)} value={text}/>
                  <Button title="Close" onPress={() => setModalVisible(false)}/>
              </View>
          </Modal>
          <View style={styles.buttonContainer}>
            <CreateButton onPress={() => setModalVisible(true)}/>
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
    },
    modal:{
        // height: 80,
        // width:100,
        padding: 20,
        position: 'absolute',
        top:300,
        left:50,
        right:50,
        backgroundColor:"#f1f1f1",
        borderRadius:20,
    }
})

export default ListingScreen