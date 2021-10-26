import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, Modal, Button } from 'react-native'


import {MaterialCommunityIcons} from '@expo/vector-icons'


import AppText from '../components/AppText'
import colors from '../config/colors'
import CreateButton from '../components/CreateButton'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import Seperator from '../components/Seperator'
import { getData, storeData } from '../storage/cache'
import { TouchableHighlight } from 'react-native-gesture-handler'
import AppModal from '../components/AppModal'




function ListingScreen({todo, setTodo, completedTodo, setCompletedTodo}) {
    const [modalVisible, setModalVisible] = useState(false)

    // getting todos
    useEffect(() => {
        getTodos()
    },[])

    async function getTodos(){
        const result = await getData("todo")
        if(result){
            setTodo(result)
            return 
        }
        setTodo([])
    }
    
    async function addTodo(value){
        await storeData("todo", value)
        getTodos()
    }

    const handleRemove = async (id) => {
        const newTodos = todo.filter(item => item.id !== id)
        setTodo(newTodos)
        await storeData("todo", newTodos)
        // getTodos()
    }

    const handleComplete = async (id) => {
        const newTodos = todo.filter(item => item.id !== id)
        setTodo(newTodos)
        await storeData("todo", newTodos)

        const completed = todo.filter(item => item.id == id)
        setCompletedTodo([...completedTodo, ...completed ])
        await storeData("completedTodo", [...completedTodo, ...completed ])
    }


   return (
       <Screen>
          <AppText style={{fontSize: 35, color: colors.primary, margin: 20}}>ToDo</AppText>
          {todo?.length > 0 ? <FlatList
             style={styles.list}
              data={todo}
              keyExtractor={(item) => item?.id?.toString()}
              renderItem={({item}) => (
                  <ListItem 
                    onPress={() => handleComplete(item.id)}
                    title={item.title} 
                    renderRightActions={() => (
                        <TouchableHighlight onPress={() => handleRemove(item.id)} style={styles.rightAction}>
                            <MaterialCommunityIcons name="trash-can" size={25} color="#fff"/>
                        </TouchableHighlight>)}/>
              )}
              ItemSeparatorComponent={() => <Seperator/>}
          /> : <AppText style={styles.notice}>You are free for today 🤩</AppText>}

          <AppModal todo={todo} modalVisible={modalVisible} setModalVisible={setModalVisible} addTodo={addTodo}/>

          <View style={styles.buttonContainer}>
            {!modalVisible && <CreateButton onPress={() => setModalVisible(true)}/>}
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
        // marginTop: 30,
    },
    
    rightAction:{
        backgroundColor:"red",
        width: 70,
        alignItems:"center",
        justifyContent:"center",
        height: "100%",
    },
    notice:{
        textAlign:"center",
        color:colors.medium,
        marginTop:40
    }
})

export default ListingScreen