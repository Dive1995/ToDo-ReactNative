import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'



import AppButton from './AppButton'
import AppFormInput from './AppFormInput'
import AppText from './AppText'
import colors from '../config/colors'
import { FlatList } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useEffect } from 'react/cjs/react.development'

const validationSchema = Yup.object().shape({
    title: Yup.string().min(1).label("Title").required("Add some todo.")
})

const priorityColor = [
    {id:1, backgroundColor: colors.danger},
    {id:2, backgroundColor: colors.orange},
    {id:3, backgroundColor: colors.medium},
]

function AppModal({addTodo, modalVisible, onPressPriority, setModalVisible,  todo, priority, setPriority}) {

   return (
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
                                    const newTodo = {id: Date.now(), title, priority: priority}
                                    console.log({newTodo})
                                    addTodo([newTodo, ...todo])
                                    setModalVisible(false)
                                    setPriority(colors.medium)
                                }}
                    validationSchema={validationSchema}
                  >
                      {({handleSubmit, values}) => (
                        <>
                        {/* <AppTextInput autoFocus={true} style={{backgroundColor:"#fff", marginVertical:15}} placeholder="Whats on your mind!!" onChangeText={(text) => setTitle(text)} value={title}/> */}
                        <AppFormInput 
                            autoFocus
                            blurOnSubmit={false}
                            name="title"
                            placeholder="Whats on your mind !!"
                            />
                        <View>
                        <FlatList
                            data={priorityColor}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={3}
                            renderItem={({item}) => (
                                <Pressable hitSlop={5} onPressIn={() => onPressPriority(item.backgroundColor)} style={[styles.priority, {backgroundColor: item.backgroundColor, borderWidth:2, borderColor: priority === item.backgroundColor ? colors.darkGray : colors.white, borderStyle:"solid"}]}></Pressable>
                            )}
                        />
                            
                        </View>
                        <View style={styles.modalButtonContainer}>
                            <AppButton 
                                style={{backgroundColor: "transparent"}}
                                color= {colors.medium}
                                title="Cancel" 
                                onPress={() => {
                                    setModalVisible(false)
                                    setPriority(colors.medium)
                                }}
                            />
                            <AppButton 
                                disabled={!values.title}
                                title="Add"
                                onPress={handleSubmit}
                            />
                        </View>
                        </>
                      )}
                  </Formik>
              </View>
          </Modal>
   )
}

const styles = StyleSheet.create({
    modal:{
        // height: 80,
        // width:100,
        padding: 20,
        position: 'absolute',
        bottom:100,
        left:30,
        right:30,
        backgroundColor: colors.white,
        borderRadius:20,
        elevation:1,
    },
    modalButtonContainer:{
        flexDirection:"row",
        justifyContent:'space-around'
    },
    priority:{
        height:30, 
        width:30,
        borderRadius:15,
        marginHorizontal:10,
    },
   
})

export default AppModal