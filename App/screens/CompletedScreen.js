import React from 'react'
import { FlatList } from 'react-native'
import { TouchableHighlight } from 'react-native'
import { View, StyleSheet } from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import Seperator from '../components/Seperator'
import colors from '../config/colors'
import { getData, storeData } from '../storage/cache'

function CompletedScreen({completedTodo ,setCompletedTodo}) {
    useEffect(() => {
        getCompletedData()
    }, [])

    const getCompletedData = async () => {
        const result = await getData('completedTodo')
        setCompletedTodo(result == "null" ? null : result)
    }

    const handleRemove = async (id) => {
        const newTodos = completedTodo.filter(item => item.id !== id)
        setCompletedTodo(newTodos)
        await storeData("completedTodo", newTodos)
    }

   return (
    <Screen>
    <AppText style={{fontSize: 35, color: colors.primary, margin: 20}}>Completed ToDo</AppText>
    {completedTodo?.length > 0 ? <FlatList
       style={styles.list}
        data={completedTodo}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({item}) => (
            <ListItem 
              icon="done"
              circleStyle={{backgroundColor: colors.success, borderColor: colors.success}}
              textStyle={{color: colors.medium, textDecorationLine:"line-through"}}
              onPress={() => handleComplete(item.id)}
              title={item.title} 
              renderRightActions={() => (
                  <TouchableHighlight onPress={() => handleRemove(item.id)} style={styles.rightAction}>
                      <MaterialCommunityIcons name="trash-can" size={25} color="#fff"/>
                  </TouchableHighlight>)}

                  />
        )}
        ItemSeparatorComponent={() => <Seperator/>}
    /> : <AppText style={styles.notice}>You have no completed tasks.</AppText>}
 </Screen>
   )
}

const styles = StyleSheet.create({
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

export default CompletedScreen