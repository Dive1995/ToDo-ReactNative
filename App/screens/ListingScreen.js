import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, Modal, Button } from 'react-native'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import CreateButton from '../components/CreateButton'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import Seperator from '../components/Seperator'
import colors from '../config/colors'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppFormInput from '../components/AppFormInput'
import {getTodos} from '../api'

const todos = [
    {id:1, title: "Create TODO app 📱"},
    {id:2, title: "Walk with Dog 🐶"},
    {id:3, title: "Eat Apple 🍎"},
]



const validationSchema = Yup.object().shape({
    title: Yup.string().min(1).label("Title").required("Add some todo.")
})

function ListingScreen() {
    const [modalVisible, setModalVisible] = useState(false)
    // const [title, setTitle] = useState()
    const [todo, setTodo] = useState(todos)

    

   return (
       <Screen style={{padding: 10}}>
          <AppText style={{fontSize: 35, color: colors.primary}}>ToDo</AppText>
          <FlatList
             style={styles.list}
              data={todo}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                  <ListItem title={item.title}/>
              )}
              ItemSeparatorComponent={() => <Seperator/>}
          />
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
              <View style={styles.modal}>
                  <AppText>New TODO</AppText>
                  <Formik
                    initialValues={{title:''}}
                    onSubmit={({title}) => {
                                    const newTodo = {id: Date.now(), title}
                                    setTodo([newTodo, ...todo])
                                    // setTitle('')
                                    setModalVisible(false)
                                }}
                    validationSchema={validationSchema}
                  >
                      {({handleSubmit}) => (
                        <>
                        {/* <AppTextInput autoFocus={true} style={{backgroundColor:"#fff", marginVertical:15}} placeholder="Whats on your mind!!" onChangeText={(text) => setTitle(text)} value={title}/> */}
                        <AppFormInput 
                            name="title"
                            placeholder="Whats on your mind !!"
                            autoFocus
                            />
                        <View>
                            
                        </View>
                        <View style={styles.modalButtonContainer}>
                            <AppButton 
                                style={{backgroundColor:"grey"}}
                                title="Cancel" 
                                onPress={() => {
                                    setModalVisible(false)
                                    // setTitle('')
                                }}
                            />
                            <AppButton 
                                title="Add"
                                onPress={handleSubmit}
                            />
                        </View>
                        </>
                      )}
                  </Formik>
              </View>
          </Modal>
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
        paddingHorizontal: 20,
        marginTop: 30,
    },
    modal:{
        // height: 80,
        // width:100,
        padding: 20,
        position: 'absolute',
        top:280,
        left:50,
        right:50,
        backgroundColor:"#f1f1f1",
        borderRadius:20,
    },
    modalButtonContainer:{
        flexDirection:"row",
        justifyContent:'space-around'
    }
})

export default ListingScreen